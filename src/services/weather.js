const URL_BASE = 'https://api.openweathermap.org/data/2.5/weather'

const getWeather = (country) => {
    const response = fetch(`${URL_BASE}?q=${country.capital}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
    return response.then(res => {
        if (!res.ok) throw new Error('Error getting data')
        return res.json()
    })
}

export default { getWeather }