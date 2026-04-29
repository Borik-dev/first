let inputA=document.createElement("input");
let inputB=document.createElement("input");
inputA.type="number";
inputB.type="number";
let labelA = document.createElement("label");
let labelB = document.createElement("label");
let labelProbil = document.createElement("label");
labelProbil.textContent="\u00A0 \u00A0 \u00A0";
labelA.textContent="A= ";
labelB.textContent="B= ";
document.body.append(labelA);
document.body.append(inputA);
document.body.append(labelProbil);
document.body.append(labelB);
document.body.append(inputB);
let buttonAdd = document.createElement("button");
let buttonSub = document.createElement("button");
let buttonMul = document.createElement("button");
let buttonDiv = document.createElement("button");
buttonAdd.textContent="Add";
buttonSub.textContent="Sub";
buttonMul.textContent="Mul";
buttonDiv.textContent="Div";
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

let divForButtons = document.createElement("div");
divForButtons.style.display="grid";
divForButtons.style.gridTemplateAreas='"Add Sub" "Mul Div"';
divForButtons.style.gap="5px";
document.body.append(divForButtons);

let arrButtons = [];
arrButtons.push(buttonAdd);
arrButtons.push(buttonSub);
arrButtons.push(buttonMul);
arrButtons.push(buttonDiv);

buttonAdd.style.gridArea="Add";
buttonSub.style.gridArea="Sub";
buttonMul.style.gridArea="Mul";
buttonDiv.style.gridArea="Div";
divForButtons.append(buttonAdd);
divForButtons.append(buttonSub);
divForButtons.append(buttonMul);
divForButtons.append(buttonDiv);

for (let btn of arrButtons)
{
    btn.addEventListener("click", myFoo);
}

function myFoo()
{
    switch(this.textContent)
    {
        case("Add"):
            alert(add(Number(inputA.value),Number(inputB.value)));
        break;
        
        case("Sub"):
            alert(sub(Number(inputA.value),Number(inputB.value)));
        break;
        
        case("Mul"):
            alert(mul(Number(inputA.value),Number(inputB.value)));
        break;
        
        case("Div"):
            alert(div(Number(inputA.value),Number(inputB.value)));
        break;
        

    }
}

function add(a,b)
{
    return a+b;
}

function sub(a,b)
{
    return a-b;
}

function mul(a,b)
{
    return a*b;
}

function div(a,b)
{
    if(b===0)
    {
        return "ERROR. На нуль ділити не можна";        
    }
    else
    {
        return a/b;
    }
}