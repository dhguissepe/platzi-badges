import React, {Component} from 'react'
import BadgesList from '../components/BadgesList.js'
import logo from '../../images/platziconf-logo.svg'
import { Link } from 'react-router-dom'
import api from '../../api.js'
import PageLoading from '../components/PageLoading.js'
import PageError from '../components/PageError.js'
import MiniLoader from '../components/MiniLoader.js'

class Badges extends Component {
  //si el constructor se va a utilizar, generalmente es buena idea inicializar un estado
  //ahí.
  constructor(props) {
    super(props)

    //Siempre que se trabaja con métodos GET es necesario declarar los 3 estados que se
    //manejarán: loading (condicional para la animación de carga, que se ejecuta
    //mientras se hace el GET y esperamos respuesta). Error (este estado se encarga
    //de reflear si hubo o no un error mientras se hacía el GET). Y el estado de datos
    //donde recibimos los datos y los renderizamos.

    this.state = {
      loading: true,
      error: null,
      data: undefined
    }
  }

  //Cuando usamos funciones asíncronas, las mismas se quedan en la lista de tareas
  //esperando a poder ser ejecutadas. Si nosotros desmontamos un componente antes de
  //que pueda ser actualizado de esta manera, lanzará un error que dice que no puede
  //actualizar un componente desmontado. Para evitar esto usamos, en el caso del SetTimeout
  //podemos usar la función clearTimeout con el timeoutid

  // componentDidMount() {

  //   //la función set Timeout deja como valor el timeoutId, el cual podemos utilizar para
  //   //limpiar la cola del timeout. Es posible usar una constante. Pero como va a ser consumido
  //   //por otro método (componentWillUnmount) hay que declararlo como una propiedad de esta clase.

  //   // this.timeoutId = setTimeout(() => {
  //   //   this.setState({
  //   //   })
  //   // }, 3000)
  // }

  //el siguiente método recibe como parámetro el estado previo y las propiedades previas

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('5. componentDidUpdate()', {
  //     prevProps: prevProps,
  //     prevState: prevState
  //   },
  //   this.props, this.state)
  // }

  // componentWillUnmount() {
  //   console.log('6. componentWillUnmount()')

  //   //Aquí es consumido el timeoutId con la función "clearTimeout"
  //   //lo más relevante de esta técnica es que podemos limpiar memoria y hacer
  //   //nuestra app más eficiente.

  //   clearTimeout(this.timeoutId)
  // }

  //El mejor lugar para cargar los datos siempre es el componentDidMount porque así nos
  //aseguramos de que nuestros elementos estén listos para recibir la data antes de ser
  //solicitada.

  componentDidMount() {
    this.fetchData()

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    //primero se vuelve a inicializar el estado a true y el error a null.
    this.setState({ loading: true, error: null })

    //luego se hace la llamada a la API con el uso de try...catch
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data })
    }
    catch(error) {
      this.setState({ loading:false, error: error })
    }
  }

  render() {
    //Para establecer el loading, podemos tomar como lugar justo antes del componente.
    if(this.state.loading === true && !this.state.data) {
      return <PageLoading />
    }
    //Así como manejamos un condicional para el loading, hay que manejar otro para el error.
    if(this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges__conf-logo"
                src={logo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid mb-4">
        <div className="row">
            <div className="col d-flex flex-column flex-wrap mb-2">
              {this.state.loading &&
                <MiniLoader className="align-self-center"/>
              }
              {this.state.data.length > 0 &&
                <Link to="/badges/new" className="btn btn-primary align-self-end justify-content-center">
                  New Badge
                </Link>
              }
            </div>
            {/* <div className="Badges__buttons col-auto d-flex align-items-center">

            </div> */}
          </div>

          <div className="row">
              <BadgesList className="col-4 pl-2 pr-2 pt-0 pb-0" badges={this.state.data}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges