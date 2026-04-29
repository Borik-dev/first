let fatherDiv  = document.createElement("div");

let sideInputStr = document.createElement("input");
let countInputStr = document.createElement("input");
let resStr = document.createElement("label");

let sideLabel = document.createElement("label");
sideLabel.textContent = "Введіть довжину сторони: ";
let countLabel = document.createElement("label");
countLabel.textContent = "Введіть кількість сторін: ";
document.body.append(fatherDiv);

sideInputStr.type="number";
countInputStr.type="number";

sideInputStr.addEventListener("keydown", returnValueSide);
countInputStr.addEventListener("keydown", returnValueCount);

let side,count;

function updateResult() {
    if (side !== undefined && count !== undefined) {
        let result = perimetr(side, count);
        resStr.textContent = "Периметр: " + result;
    }
}

function returnValueSide(event)
{
    if(event.key==="Enter")
    {
        let val = Number(this.value);
        side = val;
        console.log(side);
        updateResult();
        return;
    }
    return;
}

function returnValueCount(event)
{
    if(event.key==="Enter")
    {
        let val = Number(this.value);
        count = val;
        console.log(count);
        updateResult();
        return;
    }
    return;
}

fatherDiv.appendChild(sideLabel);
fatherDiv.appendChild(sideInputStr);
fatherDiv.appendChild(document.createElement("br"));
fatherDiv.appendChild(document.createElement("br"));
fatherDiv.appendChild(countLabel);
fatherDiv.appendChild(countInputStr);
fatherDiv.appendChild(document.createElement("br"));
fatherDiv.appendChild(document.createElement("br"));
fatherDiv.appendChild(resStr);

function perimetr (side, count)
{        
    console.log(side*count)
    return side*count;
}

if(side!=null && count!= null)
    {
        resStr.textContent=perimetr(side,count);
    }
