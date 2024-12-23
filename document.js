let num = document.getElementById('number');
console.log(num.innerText);

let button = document.getElementById('sendto');
button.addEventListener('click', () => {
    let input = document.getElementById('input');

    // Update the number after deducting the value from the input
    num.innerHTML = num.innerText - input.value;

    let amountValue = input.value;
    console.log(amountValue);

    let username = document.getElementById('user');
    let userValue = username.value;
    console.log(userValue);

    let numValue = num.innerText;
    localStorage.setItem('amount', amountValue);
    localStorage.setItem('user', userValue);

    // Clear the input fields
    input.value = '';
    let user = document.getElementById('user');
    user.value = '';

    // Add a 5-second delay before opening the new page
    setTimeout(() => {
        window.open("paymentdone.html");
    }, 5000); // 5000 milliseconds = 5 seconds
});
