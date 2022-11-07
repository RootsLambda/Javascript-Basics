// funcbuiltin.js
// Introduce to the functions library standard Javascript

/*----------Note----------*/
// 1. Alert: show message box at the warning level
// 2. Console: display the console window
// 3. Confirm: show message box at an acceptable level
// 4. Prompt: show a dialog box where we can enter data
// 5. Set timeout: run the code after a period of time
// 6. Set interval: run the code after a period of time and repeat

var message="You cannot access this page";
alert(message);

console.log(123);

confirm("You are old enough");

prompt("Who are you");

setTimeout(function() {
    alert('Notice') 
}, 1000)

setInterval(function() {
    console.log('Notifications are repeated')
},1000)



