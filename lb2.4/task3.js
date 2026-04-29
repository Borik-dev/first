let userInput = document.createElement("input");
let userInputLabel = document.createElement("label");
userInput.type="number";
userInputLabel.textContent = "Введіть кількість цифр для виводу в консоль: ";

userInput.addEventListener("keydown", myFoo);

function myFoo(event)
{
    if(event.key === "Enter")
    {
        let n = Number(this.value); 
        if (!isNaN(n)) 
        {
            digitInCons(n);
        }
    };
}

function digitInCons(n)
{
    console.clear();
    for(let i=1; i <= n; i++)
    {
        if(i%3===0 && i%5===0)
        {
            console.log("fizzbuzz")
        }
        else if(i%3===0)
        {
            console.log("fizz");
        }
        else if(i%5===0)
        {
            console.log("buzz");
        }
        else
        {
            console.log(i)
        }
        
    }
}

document.body.append(userInputLabel);
document.body.append(userInput);

