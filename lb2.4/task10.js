let userInput = document.createElement("input");
document.body.append(userInput);
let buttonOK = document.createElement("button");
buttonOK.textContent="Ok";
document.body.append(document.createElement("br"));
document.body.append(buttonOK);
let buttonForFoo = document.createElement("button");
buttonForFoo.textContent="StartFoo";
buttonForFoo.style.marginLeft="10px";
document.body.append(buttonForFoo);

buttonOK.addEventListener("click",Foo);
buttonForFoo.addEventListener("click",()=>Foo2(arr));

let arr=[];
function Foo()
{
    arr.push(userInput.value);
    console.log("Масив після натискання кнопки ок:" + arr);
    userInput.value="";
}

function Foo2(arr)
{
    alert("Відповідь в консолі");
    arr = arr.reverse();
    console.log("Перевернутий масив:  " + arr);

    for(let i=0; i<arr.length; i++)
    {
        if(!isNaN(arr[i]))
        {            
            arr[i]=Math.pow(arr[i],2);            
        }
    }
    console.log("Масив після піднесення чисел до квадрату: " + arr)
}


