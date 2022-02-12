function scriptTest()
{
    alert("My script is running");
}

function firstScript()
{
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let welcome = "Hello " + name + ", thank you for visiting the site, imagine feeling " + feeling + " kinda lame.";
    document.getElementById("output").innerHTML = welcome;
}

function tax()
{
    var subTotal = document.getElementById("subtotal").value;
    var subTotalDouble = parseFloat(subTotal);
    var tax = document.getElementById("tax").value;
    var taxDouble = parseFloat(tax);
    var taxAmount = subTotalDouble * taxDouble;
    var total = subTotalDouble + taxAmount;
    let response = "With a subtotal of " + subTotal + ", and a tax rate of " + tax + " your total is: " + total;
    document.getElementById("output1").innerHTML = response;
}

function tax()
{
    var subTotal = document.getElementById("subtotal").value;
    var subTotalDouble = parseFloat(subTotal);
    var tax = document.getElementById("tax").value;
    var taxDouble = parseFloat(tax);
    var taxAmount = subTotalDouble * taxDouble;
    var total = subTotalDouble + taxAmount;
    let response = "With a subtotal of " + subTotal + ", and a tax rate of " + tax + " your total is: " + total;
    document.getElementById("output1").innerHTML = response;
}

function product()
{
    var num1 = document.getElementById("num1").value;
    var num1Double = parseFloat(num1);
    var num2 = document.getElementById("num2").value;
    var num2Double = parseFloat(num2);
    var product = num1Double * num2Double;
    alert(num1 + " * " + num2 + " = " + product);
}

function randomNumberGenerator()
{
    var min = Math.ceil(0);
    var max = Math.floor(1000000);
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("output2").innerHTML = randomNumber;
}

function leapYear() {

    var year = document.getElementById("year").value;
    var yearInt = parseFloat(year); 
    if ((0 == yearInt % 4) && (0 != yearInt % 100) || (0 == yearInt % 400)) {
        alert(year + ' is a leap year');
    } else {
        alert(year + ' is not a leap year');
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("output3").innerHTML = color;
  }