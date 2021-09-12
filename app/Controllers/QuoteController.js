import { ProxyState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js"

function _drawQuote() {

    document.getElementById('quote').innerHTML = ProxyState.quote.Template
}

export class QuoteController {

    constructor() {
        this.getQuote()
        ProxyState.on('quote', _drawQuote)
    }


    async getQuote() {

        await quoteService.getQuote()
    }

}