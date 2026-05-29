const URL_BASE = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getCountries = () => {
    const response = fetch(URL_BASE)
    return response.then(res => {
        if(!res.ok) throw new Error('Error getting data')
            return res.json()
    })
}

export default { getCountries }