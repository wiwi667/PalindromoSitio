import { useState, useEffect } from 'react'
import { invertirTexto } from '../comunication'
import { INIT_STATE } from '../constantes'

export const useInvertirTexto = (obj, onSucces) => {
    const [estado, setEstado] = useState({ ...INIT_STATE })
    const { texto, id } = obj
    const fetchData = async () => {
        if (texto && id) {
            setEstado({ ...INIT_STATE, showProgressBar: true })
            try {
                const _res = await invertirTexto(texto)
                setEstado({ ...INIT_STATE, ..._res })
                if (_res.text) {
                    if (onSucces)
                        onSucces({ ..._res, textoOriginal: texto })
                }
            }
            catch (error) {
                setEstado({ ...INIT_STATE, error: error.message })
            }
        }
    }
    useEffect(() => {
        fetchData()
    }, [id])
    return { estado }
}