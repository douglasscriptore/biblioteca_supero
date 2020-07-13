import axios from 'axios'

class Axios {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://biblioteca.supero.com.br/api',
    })
  }
}

export default new Axios().api
