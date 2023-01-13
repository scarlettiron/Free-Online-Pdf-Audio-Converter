import GetCookie from './GetCookie'

const BasicFetch = async (url, fetchConfig = {}, contentTypeOverRide = null) => {

    const csrfToken = GetCookie('csrftoken')
    
    if(!fetchConfig['headers']){
        fetchConfig['headers'] = {}
    }

    if(csrfToken){
        fetchConfig['headers']['X-CSRFToken'] = csrfToken
        
    }

    if(!fetchConfig['headers']['Content-Type'] && !contentTypeOverRide){
        fetchConfig['headers']['Content-Type'] =  'application/json'
    }
    if(!fetchConfig['method']){
        fetchConfig['method'] = 'GET'
    }


    const response = await fetch(url, fetchConfig)
    const data = await response.json()
    return {response, data}
}

export default BasicFetch;