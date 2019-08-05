import React, {Component} from 'react'
import NavBar from '../components/NavBar.js'
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm'

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
      jobTitle: '',
      twitter: ''
    }
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
  }
  //Al hacer un levantamiento de estado hay que actualizar la información como corresponde en el componente de donde
  //viene. En este caso de BadgeForm.
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img src={this.props.logo} alt=""/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                logo={this.props.logo}
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                avatar="https://www.gravatar.com/avatar?d=identicon"
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew