<!--auteur: Almir Razic
titre: index.js
date:15.11.2019
version: 1-->

<!--le script ne fonctionne pas alors que le code me semble être just-->

function prenom_JS(){
  prenom = document.getElementById('prenom_HTLM').value.length /*=document.forms['nomduform'].elements['textarea'].value.length;*/
  if (prenom < 3){
    invalid = document.getElementById('invalid_1');
    invalid.style.backgroundColor = '#F08080';
    invalid.style.color = 'red';
    invalid.innerText = 'Invalide: trop court';
  }else {
    invalid.style.display = none;
  }
}

function nom_JS(){

  nom = document.getElementById('nom_HTLM').value.length /*=document.forms['nomduform'].elements['textarea'].value.length;*/
  if (nom < 3){
    invalid = document.getElementById('invalid_2');
    invalid.style.backgroundColor = '#F08080';
    invalid.style.color = 'red';
    invalid.innerText = 'Invalide: trop court';
  }else {
    invalid.style.display = none;
  }
}
function pass_JS(){
  pass = document.getElementById('pass_HTLM').value.length /*=document.forms['nomduform'].elements['textarea'].value.length;*/
  if (pass < 6){
    invalid = document.getElementById('invalid_3');
    invalid.style.backgroundColor = '#F08080';
    invalid.style.color = 'red';
    invalid.innerText = 'Invalide: minimum 6 caractères';
  }else {
    invalid.style.display = none;
  }
}
function confirm_JS(){
  confirmer = document.getElementById('confirm_HTLM').value /*=document.forms['nomduform'].elements['textarea'].value.length;*/
  verification = document.getElementById('pass_HTML').value
  if (confirmer !== verification){
    invalid = document.getElementById('invalid_4');
    invalid.style.backgroundColor = '#F08080';
    invalid.style.color = 'red';
    invalid.innerText = 'Invalide: différent';
  }else {
    invalid.style.display = none;
  }
}
