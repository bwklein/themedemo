import {browser} from '$app/env'

export function browserGet(key) {
    if (browser) {
        const item = localStorage.getItem(key)
        if (item) {
            return JSON.parse(item)
        }
    }
    return null
}

export function browserSet(key, value) {
    if (browser) {
        localStorage.setItem(key, value)
    }
    return null
}

export async function post(fetch, url, body) {
    let customError = false
    try {
        let headers = {}
        if (!(body instanceof FormData)) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(body)
        }
        const token = browserGet('token')
        if(token) {
          headers['X-UltraCart-Api-Version'] = '2017-03-01'
          headers[Accept] = 'application/json'
          headers['x-ultracart-simple-key'] = token
        }
        const res = await fetch(url, {
            method: 'POST',
            body,
            headers
        })
        if(!res.ok) {
            try{
                const data = await res.json()
                const error = data.message[0].messages[0]
                customError = true
                throw {id: error.id, message: error.message}
            } catch(err) {
                console.log(err)
                throw err
            }
        }
        try {
            const json = await res.json()
            return json
        } catch(err) {
            console.log(err)
            throw{id:'',message:'An unknown error has occured.'}
        }
    } catch(err) {
        console.log(err)
        throw customError ? err : { id: '', message: 'An unknown error has occured'}
    }

}