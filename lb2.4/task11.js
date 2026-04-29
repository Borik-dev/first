let userInput = document.createElement("input");
userInput.type='number';
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

    let count=0;
    for(let i=0; i<arr.length; i++)
    {
        for(let j=0; j<arr.length;j++)
        {
            if(arr[i]===arr[j] && i!==j)
            {
                delete arr[j];
                arr.splice(j, 1);
                j--;                         
            }
        }
    }
    
    console.log("Масив після видалення дубілкатів: " + arr)
}