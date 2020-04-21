import fetch from 'unfetch'

export default {
  apiUrl: 'https://hmlmsb.queroquero.com.br/msb/doacaoCestaBasica',
  fetcher: (...args) => fetch(...args).then(res => res.json())
}