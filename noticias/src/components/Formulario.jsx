import React from 'react'
//De la siguiente manera "styles" tendra todas las clases incluidas dentro de "Formulario.module.css"
import styles from './Formulario.module.css'
import PropTypes from 'prop-types'
import useSelect from '../hooks/useSelect'

const Formulario = ({ guardarCategoria }) => {
  //Creo las opciones que pasaré en el Select
  const OPCIONES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' }
  ]

  //Utilizo el Hook personalizado (como State para que el usuario vea por primera vez la pagina le paso las noticias de tipo "general" )
  const [categoria, SelectNoticias] = useSelect('general', OPCIONES)

  //Cuando el usuario haga click en Submit pasaré la categoria seteada a "app.js"
  const buscarNoticias = e => {
    e.preventDefault()

    guardarCategoria(categoria)
  }

  return (
    <div className={`${styles.buscador} row`}>
      <div className='col s12 m8 offset-m2'>
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

          <SelectNoticias />

          <div className='input-field col s12'>
            <input
              type='submit'
              className={`${styles['btn-block']}  btn-large amber darken-2`}
              value='Buscar'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired
}

export default Formulario
