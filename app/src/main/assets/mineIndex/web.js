const UPDATE_ID = 89920176
const APP_VERSION = 'v2.0.4.122922-alpha'

const GET_UPDATE_API_URL = 'https://api.github.com/repos/hanrabbit/eqtong2/releases'

const Http = new XMLHttpRequest()

let updateDataJson = null
let needUpdate = false;
let newVersion = null
let curVersion = null

function getUpdateData() {
    Http.open('GET', GET_UPDATE_API_URL)
    Http.send()

    Http.onload = (e) => {
        parseJson()
        newVersion = updateDataJson[0].tag_name
        needUpdate = updateDataJson[0].assets[0].id !== UPDATE_ID

        if (needUpdate) {
            showMsg('检查更新', '有新版本<br/><span style="color: #2A82E4">'+ newVersion +'</span>', APP_VERSION + '<span style="color: #383838"> -> </span> ' + '<span style="color: #2A82E4">' + newVersion +'</span>')
        } else {
            showMsg('检查更新', '已是最新版本', APP_VERSION)
        }
    }
}

function parseJson() {
    updateDataJson = JSON.parse(Http.responseText)
}

window.onload = () => {
    getUpdateData()
}
