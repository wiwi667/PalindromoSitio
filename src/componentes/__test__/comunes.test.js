import { render, screen } from '@testing-library/react'
import { AlertaError, Resultados } from '../comunes'
import { invertirTexto } from '../../comunication'

test('Debe renderizar la alerta', () => {
    render(<AlertaError error={'mensaje'} />)
    const div = screen.getByTestId('alerta')
    expect(div).toBeInTheDocument()
})

test('Debe renderizar el resultado', () => {
    render(<Resultados text={'abc123'} textoOriginal={'321cba'} />)
    const div = screen.getByTestId('columna')
    expect(div).toBeInTheDocument()
})

test('Debe presentar el mesaje', () => {
    render(<AlertaError error={'mensaje'} />)
    const div = screen.getByTestId('alerta')
    expect(div).toHaveTextContent('mensaje')
})

test('Debe renderizar el palindromo', () => {
    render(<Resultados text={'abc123'} textoOriginal={'321cba'} palindrome />)
    const div = screen.getByTestId('palindrome')
    expect(div).toBeInTheDocument()
})

test('Debe llamar al API', async () => {
    expect.assertions(1)
    const data = await invertirTexto('qaz')
    expect(data.text).toBe('zaq')
})

test('Debe validar que sea un palindromo', async () => {
    expect.assertions(1)
    const data = await invertirTexto('qazaq')
    expect(data.palindrome).toBe(true)
})