let labelForUserInput = document.createElement("label");
labelForUserInput.textContent = "Введіть число для обраховування його квадрату:";
document.body.append(labelForUserInput);
let userInput= document.createElement("input");
userInput.type="number";
document.body.append(userInput);
document.body.append(document.createElement("br"));
let labelBeforeRes = document.createElement("label");
labelBeforeRes.textContent="Результат з серверу:  ";
document.body.append(labelBeforeRes);
let resFromServer = document.createElement("label");
document.body.append(resFromServer);
let userButton = document.createElement("button");
userButton.textContent="Відправити число на сервер!";
document.body.append(document.createElement("br"));
document.body.append(userButton);

userButton.addEventListener("click", ()=>myFoo())
const xhr = new XMLHttpRequest();
userInput.addEventListener("keydown", myFoo1);

function myFoo1()
{
    resFromServer.textContent="";
}

xhr.onload = function()
{
    if (xhr.readyState === 4 && xhr.status === 200) 
    {
        console.log(xhr.responseText);   
        let resObj = JSON.parse(xhr.responseText);
        resFromServer.textContent = resObj.message;            
    }
}

xhr.onerror = function() 
{
    console.log('Error!');
}

function myFoo()
{
    if (userInput.value==="") 
    {
        alert("Введіть число!");
        return;
    }
    xhr.open('GET', `http://192.168.1.111:3000/data?num=${Number(userInput.value)}`, true);
    xhr.send();
}
