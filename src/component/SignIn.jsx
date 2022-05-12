import React from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap'
import { auth } from '../config/firebaseConfig'
import firebase from "firebase"

const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())

const SignIn = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col style={{ top:'50%'}}
   className='text-center py-3'>
            <Button style={{  backgroundColor:'#F28B2D',
            boxShadow: '4px 4px 4px 4px #CACACA',
            color:'black',
            top:'50%'
            }} variant='primary' onClick={signInWithGoogle}>Sign with Google</Button>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default SignIn
