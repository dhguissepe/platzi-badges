import React, {Component} from 'react'

class BadgeForm extends Component {
  //además de dejar un estado vacío, podemos darle un estado inicial.
  // state = {
  //   jobTitle: "Frontend Engineer"
  // }
  // handleChange = (e) => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value
    // })

    //Para establecer y cambiar el estado de un componente usamos la función 'setState'
    //de component. Esta recibe como parámetro un objeto que se agrega al estado. Dicha
    //información es almacenada en el estado durante el ciclo de vida del componente.

  //   this.setState({
  //     //Como estamos trabajando con diferentes elementos con el mismo evento, podemos
  //     //usar un template del lado izquierdo de los atributos del objeto para establecer
  //     //un nombre en concordancia con el nombre del target que se está utilizando.

  //     [e.target.name]: e.target.value
  //   })
  // }

  //cuando queremos levantar un estado ya no se hace como lo teníamos en la parte anterior.
  //ahora lo hacemos con la función setstate que dejamos en el elemento inmediatamente
  //superior.

  // handleClick = (e) => {
  //   console.log('clicked')
  //   e.preventDefault()
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(this.props.formValues)
  // }

  render() {
    // const {firstName, lastName, email, twitter, jobTitle} = this.props.formValues.
    return (
      <React.Fragment>

        {/* Podemos observar que en este form el evento onSubmit llama a la función
        referenciada en la propiedad 'onSubmit' que es pasada desde el componente
        padre 'BadgeNew'. */}

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>

              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="twitter"
                value={this.props.formValues.twitter}
              />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button type="submit" className="btn btn-primary btn-form">Save</button>
            {/* En el caso de que recibamos un error de parte del servidor o cualquier
            otro tipo de error. Para el formulario es ideal manejarlo dentro del mismo.
            Ya que así le da una oportunidad al usuario de volverlo a intentar o revisar
            sus elementos. */}
            {this.props.error &&
              <p className="text-danger m-0 ml-4">Error: {this.props.error.message}</p>
            }
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default BadgeForm

/*NOTA SOBRE BOTONES*/

/* Cuando teneemos un botón, el mismo por omisión es del tipo submit. Si queremos evitar
que el botón recargue la página o haga un submit a través del formulario. Podemos cambiar
directamente su tipo a "button". Otra forma es manejar el evento submit del form. Puede
hacerse con una función handleSubmit donde se prevenga la acción por defecto del submit
*/

/*NOTA SOBRE INPUTS*/

/* Cuando usamos inputs, cada input guarda las entradas que recibe de manera temporal hasta
que se abandone la página. Si decidimos guardar a su vez los elementos en el estado, estamos
creando dos lugares donde la información se está guardando. Para evitar esto tenemos que hacer
que los inputs lean los valores desde el estado y que a su vez permitan cambiar dichos estados
de manera dinámica. Para ello tenemos que agregar otro prop a los inputs que es el de value.
Value va a recibir como valor lo que se lea desde el estado. Esto cambiará el estado de los
inputs de no controlado a controlado. A su vez hay que inicializar el estado como objeto vacío*/
