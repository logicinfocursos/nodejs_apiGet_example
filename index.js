import { createRequire } from 'module'
const require = createRequire(import.meta.url)

require('dotenv').config()

const baseURL = process.env.MAIN_API_URL

const apiGET = async (table = '', searchID = '', searchField = 'id') => {

    if (table !== '') {
        
        try {

            let uri = searchID == '' ? `${table}` : `${table}?${searchField}=${searchID}`
            const response = await fetch(`${baseURL}${uri}`)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()

            return data

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
