import React from 'react';
import Head from 'next/head';
import Saludo from '../Components/Saludo'
import Navigation from '../Components/Navigation'
const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navigation />
      <h1 className="titulo">About</h1>
      <Saludo />
    </>
  )
}

export default About;