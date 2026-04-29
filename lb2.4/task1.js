let label1 = document.createElement("label");
label1.textContent = "Введіть значенння total для функції seconds: ";
let inputStr = document.createElement("input");
inputStr.type="number";
inputStr.style.width="220px";
document.body.append(label1);
document.body.append(inputStr);


inputStr.addEventListener("keydown", myFoo);

function myFoo(event)
{
    if (event.key === "Enter")
    {
        let value = Number(this.value);
        seconds(value);
    }

}

function seconds(total)
{
    console.log("Res=" + total%60);
    return total%60;
}
