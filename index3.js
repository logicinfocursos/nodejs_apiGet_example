// usando axios ou fetch para fazer requisições GET em um mesmo arquivo
import axios from "axios"  // se for usar o fetch essa linha não é necessária
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
require('dotenv').config()

const api = axios.create({ baseURL: process.env.MAIN_API_URL }) // se for usar o fetch essa linha não é necessária
//const baseURL = process.env.MAIN_API_URL // se for usar o axios essa linha não é necessária

const apiGET = async (table = '', searchID = '', searchField = 'id') => {
    if (table !== '') {
        try {
            let uri = searchID == '' ? `${table}` : `${table}?${searchField}=${searchID}`

            // usando fetch (nativo do JS)
            /* const response = await fetch(`${baseURL}${uri}`)
               const data = await response.json()
               return data */

            // usando axios
            const response = await api.get(uri)
            return response

        } catch (error) {
            console.error('Erro:', error)
        }
    }
    return null
}

const products = apiGET('products')
products.then(data => console.log(data))
