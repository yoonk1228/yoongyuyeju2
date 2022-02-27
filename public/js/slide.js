let imgPos = 0
let position = 0
// img-area 크기
const imgWidth = 500
const images = document.querySelector('.album')

function plusposition() {
    console.log('plus호출')
    imgPos = imgPos + 1
    console.log('이미지 번호 = ' + imgPos)
    position -= imgWidth
    images.style.transform = `translateX(${position}px)`
}

function minusposition() {
    console.log('minus호출')
    imgPos = imgPos - 4
    position += imgWidth * 4
    images.style.transform = `translateX(${position}px)`
}

function loop() {
    setTimeout(loop, 2000)
    if (imgPos >= 0 && imgPos < 4) {
        plusposition()
    } else if (imgPos === 4) {
        minusposition()
    }
}

function init() {
    setTimeout(loop,2000)
}
init()