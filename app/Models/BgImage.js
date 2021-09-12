export class BgImage {
    constructor(imageData) {
        this.largeImgUrl = imageData.largeImgUrl
        this.tags = imageData.tags
    }

    get Template() {

        return /*html*/ `
        <p class = "ps-5 text-white text-center" >${this.tags}</p>
        `
    }
}