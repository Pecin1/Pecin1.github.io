function calc(){
    var number1 = parseInt(document.getElementById("cislo1").value);

    var number2 = parseInt(document.getElementById("cislo2").value);
    
    var operand = document.getElementById("operand").value;
    var result = 0;


    switch (operand) {
        case "+":
        {
            result = number1 + number2;
            break;
        }
        case "-":  
        {
            result = number1 - number2;
            break;
        }
        case "*":
        {
            result = number1 * number2;
            break;
        }
        case "/":
        {
            if(number2 != 0)
                result = number1 / number2;
            else console.log("Deleni 0");
            break;
        }
    }
    console.log(result);
    document.getElementById("result").textContent = result;
}