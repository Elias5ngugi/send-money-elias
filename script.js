// script.js
function showAmount() {
    let phone = document.getElementById('phone').value;
    if (phone.length > 0) {
        document.getElementById('amount').style.display = 'block';
    } else {
        document.getElementById('amount').style.display = 'none';
        document.getElementById('pin').style.display = 'none';
        document.getElementById('sendButton').style.display = 'none';
    }
}

function showPin() {
    let amount = document.getElementById('amount').value;
    if (amount > 0) {
        document.getElementById('pin').style.display = 'block';
    } else {
        document.getElementById('pin').style.display = 'none';
        document.getElementById('sendButton').style.display = 'none';
    }
}

function showButton() {
    let pin = document.getElementById('pin').value;
    if (pin.length > 0) {
        document.getElementById('sendButton').style.display = 'block';
    } else {
        document.getElementById('sendButton').style.display = 'none';
    }
}

function sendMoney() {
    let phone = document.getElementById('phone').value;
    let amount = document.getElementById('amount').value;
    let pin = document.getElementById('pin').value;
    
    if (!phone || !amount || !pin) {
        alert('Please fill all fields');
        return;
    }
    
    let balance = (Math.random() * 10000).toFixed(2);
    let date = new Date().toLocaleString();
    
    let message = `CONFIRMED: KES ${amount} has been sent to ${phone} New Mpesa balance: KES ${balance} Date: ${date}`;
    
    document.getElementById('confirmation').innerText = message;
    document.getElementById('confirmation').style.display = 'block';
}
