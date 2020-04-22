import config from '../config'

export default {
  finish: (sessionId, clientId, data) => {
    return fetch(`${config.apiUrl}/checkout?s=${sessionId}&clientId=${clientId}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}