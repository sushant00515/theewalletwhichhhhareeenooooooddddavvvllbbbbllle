let num = document.getElementById('number')
console.log(num.innerText)
let button = document.getElementById('sendto')
button.addEventListener('click',()=>{
    let input= document.getElementById('input')
    
    num.innerHTML= num.innerText-input.value;

    let amountValue= input.value;
    console.log(amountValue);
    let username = document.getElementById('user');
    let userValue= username.value;
     console.log(userValue);
     let numValue = num.innerText;
     localStorage.setItem('amount',amountValue);
     localStorage.setItem('user',userValue);
    input.value='';
    let user = document.getElementById('user')
    user.value='';
    window.open("paymentdone.html");
})