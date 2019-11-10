/**
 * Created by Xavier on 11.09.17.
 */

function dire(unePhrase){
    alert(unePhrase);
}

function controlerEtDire(){
    var monInput = document.getElementById('qqch');
    if(monInput.value == ""){
        alert('Veuillez entrer qqch dans le champ texte');
        monInput.focus();
        return false;
    }
    else{
        alert(monInput.value);
        return true;
    }
}

function transfert(){
    if(document.getElementById('text1Id').value == ""){
        alert('Veuillez entrer qqch dans le champ texte');
        document.getElementById('text1Id').focus();
    }
    else{
        //Transfert de valeur du premier au second champ
        document.getElementById('text2Id').value = document.getElementById('text1Id').value;
        //On vide le premier champ
        document.getElementById('text1Id').value = "";
    }
}

function changeImage(idImage, srcImage){
    // On change la propri�t� 'src' de l'image
    document.getElementById(idImage).src = srcImage;
    // Autre solution, par le tableau des objets Image:
    // document.images[0].src = srcImage;

    // Modifie l'option s�lectionn�e dans la liste en cons�quence
    var select = document.forms['selectImgForm'].elements['selectImg'];
    for(var i=0; i<select.options.length; i++){
        if(select.options[i].value == srcImage.substr(srcImage.lastIndexOf('/')+1)){
            select.options[i].selected = 'selected';
        }
    }
}

function generate()
{
    txt = document.getElementById('content');
    txt.value = '';
    min = parseInt(document.getElementById('min').value);
    max = parseInt(document.getElementById('max').value);
    for (i = min; i < max; i++)
        txt.value += (i + ', ');
    txt.value += (i);
}

function initializeSelect()
{
    max = document.getElementById("max");
    for (i = 11; i < 100; i++)
    {
        option = document.createElement("option");
        option.text = i;
        option.value = i;
        max.add(option);
    }
}

function insertFormattedText(e)
{
    txt = prompt('Texte à insérer');
    switch(e.target.id)
    {
        case 'bold' :
            txt = '[<b>'+txt+'</b>]';
            break;
        case 'italic' :
            txt = '[<i>'+txt+'</i>]';
            break;
        case 'underline' :
            txt = '[<u>'+txt+'</u>]';
            break;
    }
    document.getElementById('txt').value += txt;
    document.getElementById('txt').focus();
}

function checkall() {
    document.getElementById('course').checked = true;
    document.getElementById('events').checked = true;
    document.getElementById('schedule').checked = true;
}
function none() {
    document.getElementById('course').checked = false;
    document.getElementById('events').checked = false;
    document.getElementById('schedule').checked = false;
}
function invert() {
    document.getElementById('course').checked = !document.getElementById('course').checked;
    document.getElementById('events').checked = !document.getElementById('events').checked;
    document.getElementById('schedule').checked = !document.getElementById('schedule').checked;
}

function changeCheckBoxes(action)
{
    var inputs = document.getElementsByTagName("input");
    for (i = 0; i < inputs.length; i++)
    {
        if (inputs[i].type == "checkbox")
        {
            switch (action)
            {
                case 'check': inputs[i].checked = true; break;
                case 'uncheck': inputs[i].checked = false; break;
                case 'invert': inputs[i].checked = !inputs[i].checked; break;
            }
        }
    }
}
