import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"

const quoteApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api'
})

class QuoteService {


    constructor() {

    }

    async getQuote() {
        let res = await quoteApi.get('quotes')

        ProxyState.quote = new Quote(res.data)

    }


}

export const quoteService = new QuoteService