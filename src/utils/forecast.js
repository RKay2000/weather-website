const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f1d19e55e9f514365e22fe2b33d07686&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 
                'The local date and time in ' + body.location.name + ' is ' + body.location.localtime + '. Weather description: ' + body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out.')
        }
    })
}

module.exports = forecast