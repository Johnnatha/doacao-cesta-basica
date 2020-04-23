import fetch from 'unfetch'

export default {
  apiUrl: 'https://msb.queroquero.com.br/msb/doacaoCestaBasica/v1',
  fetcher: (...args) => fetch(...args).then(res => res.json())
}
