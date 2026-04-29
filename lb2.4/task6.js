let userLabel = document.createElement("label");
userLabel.textContent = 'Введіть розмір масиву ';
document.body.append(userLabel);
let userInput = document.createElement("input");
userInput.type="number";
userInput.style.width=50;
document.body.append(userInput);
let neparZnachArr = document.createElement("p");
document.body.append(neparZnachArr);

userInput.addEventListener("keydown",myFoo);

const arr = [];


function myFoo(event)
{
    if(event.key==="Enter")
    {
        neparZnachArr.textContent="";
        pushArr(arr);
        console.log("maxEl: " + maxArrEl(arr));
        console.log("minEl: " + minArrEl(arr));
        console.log("sumElArr: " + sumElArr(arr));
        console.log("srArifArr: " + srArifArr(arr));
        printNeparZnach(arr);
        clearArr(arr);

    }
}

function clearArr(arr)
{
    arr.length=0;
}

function pushArr(arr)
{
    if(userInput.value.trim() !== "" && Number(userInput.value)>0)
    {
        for (let i=0; i < Number(userInput.value); i++)
        {
            arr.push(Math.floor(Math.random()*100));
        }

    console.log(arr);
    }
    else
    {
        alert("Розмір масиву не може бути відйємним");
    }
}

function maxArrEl(arr) 
{
    let maxArrEl=arr[0];
    for( let i=1; i<arr.length; i++)
    {
        if(arr[i]>maxArrEl)
        {
            maxArrEl=arr[i];
        }
    }
    return maxArrEl;
}

function minArrEl(arr) 
{
    let minArrEl=arr[0];
    for( let i=1; i<arr.length; i++)
    {
        if(arr[i]<minArrEl)
        {
            minArrEl=arr[i];
        }
    }
    return minArrEl;
}

function sumElArr(arr)
{
    let sumElArr=0;

    for( let i=0; i<arr.length; i++)
    {
        sumElArr+=arr[i];
    }

    return sumElArr;    
}

function srArifArr(arr)
{
    return sumElArr(arr)/arr.length;
}

function printNeparZnach(arr)
{
    for( let i=0; i<arr.length; i++)
    {
        if(arr[i]%2!=0)
        {
            neparZnachArr.textContent+=arr[i] + "\n";
        }
    }
}