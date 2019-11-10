function blue() {
    el = document.getElementById("div01");
    el.style.backgroundColor = "blue";
}

function strikethrough() {
    el = document.getElementById("div02");
    el.style.textDecoration = "line-through";
}

function arial() {
    el = document.getElementById("div03");
    el.style.fontFamily = "Arial";
}

function normal() {
    el = document.getElementById("div03");
    el.style.fontFamily = "";
}

function testcheck() {
    el1 = document.getElementById("chk01");
    el2 = document.getElementById("chk02");
    if (el1.checked && el2.checked)
    {
        el1.style.display = 'none';
        el2.style.display = 'none';
        el = document.getElementById("div04");
        el.innerText = 'YES';
        el.style.backgroundColor = 'green';
        el.style.color = 'white';
    }
}


function destroy() {
    el = document.getElementById("div05");
    el.removeChild(el.childNodes[1]);
}
