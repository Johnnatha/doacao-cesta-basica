import config from '../config'

export default {
  finish: (sessionId, clientId, data) => {
    return new Promise((resolve, reject) => {
      fetch(`${config.apiUrl}/checkout?s=${sessionId}&clientId=${clientId}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        response.json().then((data) => {
          resolve(data)
        });
      })
      .catch((response) => {
        response.json().then((data) => {
          reject(data)
        });
      })
    })
  }
}