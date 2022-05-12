import React, { useState } from 'react'
import { Row, Container, Col, Button, Form } from 'react-bootstrap'
import { auth, firestore } from '../config/firebaseConfig'
import firebase from 'firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'



const ToDo = () => {
  const [toDo, setToDO] = useState('')

  const todoRef = firestore.collection(`users/${auth.currentUser.uid}/todoList`)

  const [toDoList] = useCollectionData(todoRef, { idField: 'id' })

  const signOut = () => auth.signOut()

  const onSubmitToDo = (event) => {
    event.preventDefault()

    setToDO('')

    todoRef.add({
      text: toDo,
      complete: false,
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }

  return (
    <>
      <Container>
        <Row>
          <Col className='py-3'>
            <Button variant='warning' onClick={signOut}>
              Sign Out
            </Button>
          </Col>
        </Row>

        <Form onSubmit={onSubmitToDo}>
          <Form.Group controlId='password'>
            <Form.Label className='text-center py-3'>
              To-Do List with Firebase{' '}
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='What Next'
              value={toDo}
              onChange={(e) => setToDO(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Add
          </Button>
        </Form>
        {toDoList && toDoList.map((toDo) => <ToDoAction {...toDo} />)}
      </Container>
    </>
  )
}
// this is the to do List view with design and functions
const ToDoAction = ({ id, complete, text }) => {
  const todoRef = firestore.collection(`users/${auth.currentUser.uid}/todoList`)

  const onCompleteToDo = (id, complete) =>
    todoRef.doc(id).set({ complete: !complete }, { merge: true })

  const onDeleteToDo = (id) => todoRef.doc(id).delete()

  return (
    <Row key={id} className='todo'>
      <Col className='text-center py-3'>
      <Button
        variant={`${complete ? 'success' : 'info'}`}
        onClick={() => onCompleteToDo(id, complete)}
      >
        {text}
      </Button>
    
      <Button variant='danger' onClick={() => onDeleteToDo(id)}>X</Button>
      </Col>
    </Row>
  )
}

export default ToDo
