import React, {Component} from 'react'
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm'
import logo from '../../images/platziconf-logo.svg'
import api from '../../api.js'
import PageLoading from '../components/PageLoading'
// import md5 from 'md5'

class BadgeNew extends Component {
  //Para levantar un estado desde un componente inferior hay que inicializar un estado desde uno superior
  //Hay que tener en cuenta que para levantar estados desde un componente hijo, hay que llevarlo hasta una
  //posición donde esté cerca de todos los componentes que compartirán dicha información.

  state = {
    form: {
      //es recomendable inicializar todos los valores, para así no tener warnings en el console.
      firstName: '',
      lastName: '',
      email: '',
      avatarUrl: '',
      jobTitle: '',
      twitter: ''
    },
    //Hay que recordar manejar los estados de loading y error también aquí.
    loading: false,
    error: null
  }

  //Cuando se hace el levantamiento de estado con esta técnica, puede pasar que se sustituya totalmente lo que
  //hay en form. Ya que, en este caso, form es un conjunto de objetos. Por esta razón hay que desestructurarlo
  //y actualizarlo como corresponde.
  handleChange = (e) => {

    //Podemos hacer el levantamiento de esta manera, creando un elemento auxiliar. o hacerlo con un spread operator
    // const nextForm = this.state.form
    // nextForm[e.target.name] = e.target.value

    this.setState({
      form: {
        ... this.state.form,
        [e.target.name]: e.target.value
      }
    })

    //En el caso de que se maneje un email, para generar el avatarUrl lo manejamos
    //en un bloque aparte. Esto es solo una opción. Pero es mejor reemplazar la imagen
    //por el componente gravatar en la lista de badges.

    // if (e.target.name === 'email') {
    //   const hash = md5(e.target.value)
    //   this.setState({
    //     form: {
    //       ... this.state.form,
    //       [e.target.name]: e.target.value,
    //       avatarUrl: `https://www.gravatar.com/avatar/${hash}?d=identicon`
    //     }
    //   })
    // }
  }

  //El handleSubmit va a manejar el submit que se haga desde la página que crea el
  //nuevo badge.
  handleSubmit = async e => {
    //primero se previene el subimit por defecto.
    e.preventDefault()
    // se inicializa el estado de cargando
    this.setState({loading: true, error: null})

    //con un try catch se hace el llamamiento a la API con el método POST
    try {
      await api.badges.create(this.state.form)
      //En el caso de que funcione se establece el siguiente estado.
      this.setState({loading: false})
      //como no queremos data, no hay que ejecutar ningún cambio de estado con la Data
      //no queremos consumir ninguna info.

      //En el caso de que todo salga bien, hay que redirigir al usuario a la página
      //donde se enlistan los badges. Hay 3 props que reciben las páginas gracias
      //a React-Router. Para navegar usaremos el prop history. El cual tiene una función
      //llamada push que me redirige a la página que desee.
      this.props.history.push('/badges')
    }
    catch (error) {
      //En el caso de que falle se establece el siguiente estado
      this.setState({loading: false, error: error})
    }
  }

  //Al hacer un levantamiento de estado hay que actualizar la información como corresponde en el componente de donde
  //viene. En este caso de BadgeForm.
  render() {
    //El estado de loading se maneja de la misma manera aquí pero el error es distinto
    //al error queremos mostrarlo directamente en el formulario. Y por eso pasamos un
    //prop al formulario para que reciba el error y se actualice ahí.
    if (this.state.loading) {
      return <PageLoading />
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero d-flex justify-content-center">
          <img className="BadgeNew__hero__image" src={logo} alt=""/>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-6">
              {/* Podemos agregar valores por omisión usando el condicional || (or)
              En los objetos evaluados entre llaves. Al hacer esto decimos que al no existir
              el valor o ser prácticamente nulo, toma el siguiente valor en el or.*/}
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                twitter={this.state.form.twitter || 'twitter'}
                email={this.state.form.email || 'E_MAIL'}
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew