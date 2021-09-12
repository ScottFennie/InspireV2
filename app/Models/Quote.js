export class Quote {
    constructor(quoteData) {
        this.content = quoteData.content
        this.author = quoteData.author
    }

    get Template() {

        return /*html*/ `
        <p class="pt-4 myclass">"${this.content}"</p>
        <h6 class="hide">-${this.author}</h6>
        `
    }
}