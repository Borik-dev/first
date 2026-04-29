let numberN = document.createElement("input");
let numberX = document.createElement("input");
let numberY = document.createElement("input");

numberN.type = "number";
numberX.type = "number";
numberY.type = "number";


numberN.addEventListener("keydown", myFoo1);
numberX.addEventListener("keydown", myFoo2);
numberY.addEventListener("keydown", myFoo3);

document.body.append(numberN);
document.body.append(numberX);
document.body.append(numberY);


let numbN, numbX, numbY;

function updateResult() {
    if (numbN !== undefined && numbX !== undefined && numbY!== undefined)
    {
        isDivisible3(numbN,numbX,numbY);
    }
}

function myFoo1(event)
{
    if(event.key==="Enter")
    {
        let val = Number(this.value);
        if(val<=0)
        {
            alert("Помилка! Число не повинно бути від'єдним або рівним нулю!!!");
            return;
        }
        numbN = val;
        console.log("numbN= "+numbN);        
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
        if(val<=0)
        {
            alert("Помилка! Число не повинно бути від'єдним або рівним нулю!!!");
            return;
        }
        numbX = val;
        console.log("numbX= "+numbX);        
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
        if(val<=0)
        {
            alert("Помилка! Число не повинно бути від'єдним або рівним нулю!!!");
            return;
        }
        numbY = val;
        console.log("numbY= "+numbY);        
        updateResult();
        return;
    }
    return;
}

function isDivisible1(n,x,y)
{
    if(n%x===0 && n%y===0)
    {
        alert("Дане число ділиться на X і на Y");
    }
    else if (n%x===0)
    {
        alert("Дане число ділиться на X");
    }
    else if(n%y===0)
    {
        alert("Дане число ділиться на Y");  
    }
    else
    {
        alert("Дане число не ділиться на X і на Y націло")   
    }
}

function isDivisible2(n,x,y)
{
    (n % x === 0 && n % y === 0) 
    ? alert("Дане число ділиться на X і на Y") 
    : (n % x === 0) 
        ? alert("Дане число ділиться на X") 
        : (n % y === 0) 
            ? alert("Дане число ділиться на Y") 
            : alert("Дане число не ділиться на X і на Y націло");
}   

function isDivisible3(n,x,y)
{
    let resNx = n%x;
    let resNy = n%y;
        
    switch (true) {
        case (resNx === 0 && resNy === 0):
            alert("Дане число ділиться на X і на Y");
            break;
        case (resNx === 0):
            alert("Дане число ділиться на X");
            break;
        case (resNy === 0):
            alert("Дане число ділиться на Y");
            break;
        default:
            alert("Дане число не ділиться на X і на Y націло");
    }
}    
