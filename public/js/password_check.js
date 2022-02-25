const pw = document.getElementById('#password1')
const pwInput = document.querySelectorAll('#password1 > input')
// const pwCheck = document.getElementById('#password2').value
console.log(pwInput[0])
function passwordCheck() {
  pwInput[0].addEventListener('click',()=>console.log(pwInput[0]))
  // console.log(pw)
  // console.log(pwCheck)
}