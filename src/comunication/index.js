
import { TOOLBOX_API } from '../constantes'

export async function fetchService(method, url, body, contentType) {
    try {
        var _response = await fetch(url, {
            method: method || 'post',
            headers: { 'Content-Type': contentType || 'application/json' },
            body: body
        });
        var _res = await _response.json()
        return _res
    }
    catch (err) {
        return { error: err?.message }
    }
}

export async function invertirTexto(text) {
    return await fetchService(
        'get',
        TOOLBOX_API + `iecho?text=${text}`        
    )
}
