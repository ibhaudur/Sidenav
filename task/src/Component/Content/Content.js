import React from 'react'
import './Content.css'
import { Container } from 'react-bootstrap'

function Content(props) {
  return (
    <Container className='content'>
            <h1 className='welcome'>Welcome</h1>
            <h1 className='pro'>{props.val}</h1>
    </Container>
  )
}

export default Content