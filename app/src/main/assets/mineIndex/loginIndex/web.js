const pb = document.getElementById('Pb')
const userDataForm = document.getElementById('userDataForm')

const Http = new XMLHttpRequest()

loginBtn.onclick = () => {
    let name = inputName.value
    pb.classList.add('run')
    loginBtn.classList.add('switch-to-pb')

    setTimeout(() => {
        hPwd.value = hex_sha1(inputPwd.value)
        // alert(hPwd.value)
        userDataForm.submit()
        setTimeout(() => {
            window.open('./index.html')
        }, 2400)
    }, 2000)

    // if (name !== '' && pwd !== '') {
    //     const url = 'http://192.168.1.8:3000/login?name=' + name + '&password=' + pwd
    //     // Http.open('post', url)
    //     // Http.send()
    //     // Http.onreadystatechange = (e) => {
    //     //     // alert(this.status)
    //     //     if (this.status === 200) {
    //     //         alert(Http.responseText)
    //     //     }
    //     // }
    //     // alert()
    // }
}