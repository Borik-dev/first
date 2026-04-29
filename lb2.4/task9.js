let userInput = document.createElement("input");
userInput.type = "numbers";
document.body.append(userInput);
let buttonOK = document.createElement("button");
buttonOK.textContent="Ok";
document.body.append(document.createElement("br"));
document.body.append(buttonOK);

buttonOK.addEventListener('click', fooButton);


function fooButton()
{
    Foo(Number(userInput.value))
}

function Foo(number)
{ 
    let infoAboutNumber;
    infoAboutNumber = posOrNegNum(number);
    infoAboutNumber+=isProsteNumb(number);
    infoAboutNumber+=divNaNumbers(number);
    alert(infoAboutNumber);
}

function posOrNegNum(number)
{
    if(number>=0)
    {
        return "Введене число позитивне\n";
    }
    else
    {
        return "Введене число негативне\n";
    }    
}

function isProsteNumb(number)
{

    if (number < 2) return "Число не просте\n";
   
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return "Число не просте\n"; 
        }
    }

    return "Число просте\n";
}

function divNaNumbers(number)
{
    let divisors = [];
    [2, 5, 3, 6, 9].forEach(d => {
        if (number % d === 0) {
            divisors.push(d);
        }
    });
    return(`Ділиться без залишку на: ${divisors.length > 0 ? divisors.join(", ")+"\n" : "жодне з перелічених\n"}`);
}
    