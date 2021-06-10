import React from 'react'
import { InputGroup, Alert, FormControl, Col } from 'react-bootstrap'

export const AlertaError = props => {
    const { error } = props
    return (
        <>
            { error &&
                <InputGroup className='mb-3' data-testid='alerta'>
                    <Alert variant={'danger'}>
                        <b className={'mx-1'}>Error:</b>{error}
                    </Alert>
                </InputGroup>
            }
        </>
    )
}

export const Resultados = props => {
    const { text, textoOriginal, palindrome } = props
    return (
        <Col xs={12} lg={12} data-testid='columna'>
            <InputGroup className='mb-3'>
                <FormControl defaultValue={text} value={text} title={textoOriginal} aria-describedby='basic-addon2' />
                {palindrome &&
                    <InputGroup.Append data-testid='palindrome'>
                        <InputGroup.Text id='basic-addon2'>Es Palindromo</InputGroup.Text>
                    </InputGroup.Append>
                }
            </InputGroup>
        </Col>
    )
}