
import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //Para definir la Categoria
  const [categoria, guardarCategoria] = useState('');
  //Para poder acceder y guardar las Noticias
  const [noticias, guardarNoticias] = useState([]);

  //Una vez definida la categoria debo hacer un llamado a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=72fd479338a646689be0e58d70694398`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      //Una vez obtenido el JSON con las noticias las guardo en su State
      guardarNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria])

  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        {/* Luego mostrare el listado de las noticias: */}
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;