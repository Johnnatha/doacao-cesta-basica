import config from '../config'

export default {
  finish: (sessionId, clientId, data) => {
    return new Promise((resolve) => {
      fetch(`${config.apiUrl}/checkout?s=${sessionId}&clientId=${clientId}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response && response.json) {
          response.json().then((data) => {
            resolve(data)
          });
        }
      })
      .catch((response) => {
        if (response && response.json) {
          response.json().then((data) => {
            resolve(data)
          });
        }
      })
    })
  },
  initWebApp: (sessionId, clientId) => {
    return new Promise(resolve => {
      fetch(`${config.apiUrl}/initWebApp?s=${sessionId}&clientId=${clientId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response && response.json) {
          response.json().then((data) => {
            resolve(data)
          });
        }
      })
      .catch((response) => {
        if (response && response.json) {
          response.json().then((data) => {
            resolve(data)
          });
        }
      })
    })
  },
  listCities: (sessionId, clientId) => {
    return new Promise(resolve => {
      fetch(`${config.apiUrl}/listCidades?s=${sessionId}&clientId=${clientId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response && response.json) {
          response.json().then((data) => {
            resolve(data)
          });
        }
      })
      .catch((response) => {
        if (response && response.json) {
          response.json().then((data) => {
            resolve(data)
          });
        }
      })
    })
  }
}