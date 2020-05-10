import React from 'react';
import Head from 'next/head';
import Navigation from '../../Components/Navigation';

const Notas = () => {
  return (
    <>
      <Head>
        <title>Notas Blog</title>
      </Head>

      <Navigation />
      <h1 className="titulo">Notas</h1>
    </>
  )
}
export default Notas;