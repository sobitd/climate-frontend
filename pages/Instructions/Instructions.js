
import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import  'Instructions.scss'

const Instructions = () => {
  return (
    <Fragment>
    <Helmet><title>Instructions</title></Helmet>
    <div className='instructions container'>
    <h1>How to play the game </h1>
    <p> Ensure you read this guide from start to finish</p>
    <ul className='browser-default' id='main'>
      <li>Step 1</li>
      <li>Step 2</li>
      <li>Step 3</li>
    </ul>
    </div>
    </Fragment>
  )
}

export default Instructions