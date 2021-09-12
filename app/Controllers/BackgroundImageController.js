import { ProxyState } from "../AppState.js";
import { backgroundService } from "../Services/backgroundService.js";

function _drawBgImage() {

    document.getElementById("bgImage").style.backgroundImage = `url(${ProxyState.bgimages.largeImgUrl})`
    document.getElementById('imagedata').innerHTML = ProxyState.bgimages.Template




}

export class BackgroundImageController {




    constructor() {
        backgroundService.getBackgroundImage()
        ProxyState.on('bgimages', _drawBgImage)
    }


    async getBackgroundImage() {

        await backgroundService.getBackgroundImage()
    }
}