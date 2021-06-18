const mails = document.querySelectorAll(".picksafe-mail");
for (i = 0; i < mails.length; i++) {
    mails[i].addEventListener('click', (e) => {
        window.open(`mailto:${e.target.innerText}`)
    })

}
const numbers = document.querySelectorAll(".picksafe-num");
for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        window.open(`tel:${e.target.innerText}`)
    })

}
console.log(mails)