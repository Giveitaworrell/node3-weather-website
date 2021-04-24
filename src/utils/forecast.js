const request = require('request')

const forecast = (Lat, Long, callback) => {
    const WeatherStackKey = 'access_key=0b40c37257f0b630883fa87b991654fd'
    const WeatherStackLocation = '&query=' + Lat + ',' +Long
    const Unit = '&units=' + 'f'
    const WeatherUrl = 'http://api.weatherstack.com/current?'+ WeatherStackKey + WeatherStackLocation + Unit

    request({ url: WeatherUrl, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        }   else if (body.error) {
            callback('Unable to find location', undefined)
        }   else {
            callback(undefined, 'It is ' + body.current.weather_descriptions[0] + ' and currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.'
            )}
    })

}
module.exports = forecast