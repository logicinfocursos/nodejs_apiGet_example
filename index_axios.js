// usando o axios no lugar do fetch para acessar o endpoint da API
import axios from 'axios'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

require('dotenv').config()

const api = axios.create({ baseURL: process.env.MAIN_API_URL })

const apiGET = async (table = '', searchID = '', searchField = 'id') => {

    if (table !== '') {

        try {
            let uri = searchID == '' ? `${table}` : `${table}?${searchField}=${searchID}`
            const response = await api.get(uri)
            return response.data

        } catch (error) {
            console.error('Erro:', error.message)
        }
    }
    return null
}

const getProducts = async () => {
    const products = await apiGET('products')
    console.log(products)
}

getProducts()
