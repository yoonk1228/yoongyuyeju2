let imgPos = 0;
let position = 0;
// img-area 크기
const imgWidth = 500;
const prevBtn = document.querySelector(".btn-prev")
const nextBtn = document.querySelector('.btn-next')
const images = document.querySelector('.album')

function prev() {
    if (imgPos > 0) {
        nextBtn.removeAttribute('disabled')
        imgPos = imgPos - 1;
        console.log('이미지 번호 = ' + imgPos)
        position += imgWidth;
        images.style.transform = `translateX(${position}px)`;
    }
    if (imgPos === 0 ) {
        prevBtn.setAttribute('disabled', 'true')
    }
}

function next() {
    if (imgPos < 3) {
        prevBtn.removeAttribute('disabled')
        imgPos = imgPos + 1;
        console.log('이미지 번호 = ' + imgPos)
        position -= imgWidth;
        images.style.transform = `translateX(${position}px)`
    }
    if (imgPos === 3) {
        nextBtn.setAttribute('disabled', 'true')
    }
}

/* 데이터 초기화, 초기설정, 즉시적용. */
function init() {
    prevBtn.setAttribute('disabled', 'true')
    prevBtn.addEventListener('click',prev)
    nextBtn.addEventListener('click',next)
}
init()