let number1 = document.createElement("input");
let number2 = document.createElement("input");
let number3 = document.createElement("input");

number1.type = "number";
number2.type = "number";
number3.type = "number";


number1.addEventListener("keydown", myFoo1);
number2.addEventListener("keydown", myFoo2);
number3.addEventListener("keydown", myFoo3);

let numb1, numb2, numb3;

function updateResult() {
    if (numb1 !== undefined && numb2 !== undefined && numb3!== undefined)
    {
        let result = calculate(numb1,numb2,numb3);
        resStr.textContent = "Serednye arif: " + result;
    }
}

function myFoo1(event)
{
    if(event.key==="Enter")
    {
        let val = Number(this.value);
        numb1 = val;
        console.log("numb1= "+numb1);
        updateResult();
        return;
    }
    return;
}

function myFoo2(event)
{
    if(event.key==="Enter")
    {
        let val = Number(this.value);
        numb2 = val;
        console.log("numb2= "+numb2);
        updateResult();
        return;
    }
    return;
}

function myFoo3(event)
{
    if(event.key==="Enter")
    {
        let val = Number(this.value);
        numb3 = val;
        console.log("numb3= "+numb3);
        updateResult();
        return;
    }
    return;
}

function calculate(num1, num2, num3)
{
    
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || !Number.isInteger(num3))
    {
        alert("Помилка: Усі аргументи мають бути цілими числами!"); 
        return;
    }

    alert(" Результат: " + (num1+num2+num3/3))
}

document.body.append(number1);
document.body.append(number2);
document.body.append(number3);