import React from 'react';
import Layout from '../Components/Layout';
import Rickmorty from '../Components/Rickmorty';
const Ejercicio = () => {
  return (
    <Layout>
      <h1 className="titulo">Morty</h1>
      <Rickmorty />
    </Layout>
  )
}


export default Ejercicio;