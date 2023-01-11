const ACTIVITY_ABOUT = 'about'

const mSelect1 = document.getElementById('mSelect1')
const switchWindow = document.getElementById('swWindow')

const aboutBtn = document.getElementById('aboutBtn')
const checkUpdateBtn = document.getElementById('checkUpdateBtn')

const msgBox = document.getElementById('msgBoxContent')
const msgT   = document.getElementById('tMsg')
const msgFT  = document.getElementById('tMsgF')
const msgContent = document.getElementById('contentMsg')
const msgConfirm = document.getElementById('msgConfirm')
const msgBoxBefore = document.getElementById('msgBox')

const bgFilter = document.getElementById('bgFilter')


function showMsg(title, content, ver) {
    msgBoxBefore.style.visibility = 'inherit'
    msgBox.classList.remove('showOut')
    msgBox.classList.add('showIn')
    msgT.innerHTML = title
    msgContent.innerHTML = content
    msgFT.innerHTML = ver
    bgFilter.classList.add('black')
    window.androidData.setNavColor(200, 200, 200)
    // if (version !== null) {
    // } else {
    //     msgFT.innerHTML = ''
    // }
}

function outMsg() {
    msgBox.classList.add('showOut')
    bgFilter.classList.remove('black')
    // msgBoxBefore.style.width = '0'
    setTimeout(() => {msgBoxBefore.style.visibility = 'hidden'}, 300)
    window.androidData.setNavColor(255, 255, 255)
    // msgBox.classList.remove('showIn')
}

window.onload = () => {
    mSelect1.onclick = () => {
        // alert('Jump!')
        window.open('../mainIndex/index.html', 'thisact')
        switchWindow.classList.remove('switch')
    }

    aboutBtn.onclick = () => {
        window.androidData.switchAct(ACTIVITY_ABOUT)
    }

    checkUpdateBtn.onclick = () => {
        getUpdateData()
    }

    msgConfirm.onclick = () => {
        outMsg()
    }

    setTimeout(() => {
        switchWindow.classList.add('switch')
    }, 100)
}