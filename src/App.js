import React, { useState } from 'react'
import './App.css'
import { Button, Navbar, Form, FormControl, Container, Col, Row, InputGroup, Spinner, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './estilos/index.css'
import { useInvertirTexto } from './hooks'

const App = () => {
  const [lista, setLista] = useState([])
  const [param, setParam] = useState({ texto: '', id: 0 })
  const [texto, setTexto] = useState('')
  const { estado } = useInvertirTexto(param, (res) => {
    setLista([res].concat(lista))
    setTexto('')
  })

  const invertir = () => {
    setParam({ texto: texto, id: param.id + 1 })
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" className="justify-content-center nav">
        <Form className="form">
          <Form.Row className="align-items-center form_row">
            <Col sm={12} lg={8} md={8} className="mx-1" space={2}>
              <FormControl type="text" placeholder="Insert text" space={2} value={texto} onChange={(e) => setTexto(e.target.value)} />
            </Col>
            <Col sm={12} lg={5} md={3}>
              <Button className="mx-3 boton" disabled={estado.showProgressBar} onClick={() => { invertir() }}>
                {estado.showProgressBar &&
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true" />
                }
                {estado.showProgressBar ? 'Loading...' : 'Send'}
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Navbar>
      <div>
        <Container className="row_container">
          <Row className="justify-content-md-center my-1">
            {estado.error &&
              <Alert variant={'danger'}>
                {estado.error}
              </Alert>
            }
            {lista.map((x, ix) => (
              <Col xs lg="12" key={ix}>
                <InputGroup className="mb-3">
                  <FormControl
                    defaultValue={x.text}
                    value={x.text}
                    aria-describedby="basic-addon2" />
                  {x.palindrome &&
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">Es Palindromo</InputGroup.Text>
                    </InputGroup.Append>
                  }
                </InputGroup>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
