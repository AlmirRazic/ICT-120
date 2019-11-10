/*auteur: Almir Razic
titre: Tranport_JS
date:09.11.2019
version: 1*/




function changeBgColor(obj, colorName) {
  obj.style.backgroundColor = colorName;
}
function aficher(x) {
  x.style.height = "400px";
  x.style.width = "500px";
  x.style.zIndex = "20";
}
function normalImg(x) {
  x.style.height = "0px";
  x.style.width = "0px";
  x.style.zIndex = "-1";
}
function aider(){
  alert("Vous pouvez vous déplacer sans souris en utilisant la tab.             " +
    "       vous pouvez accéder aux différants onglets en clickant dessus.");
}

function condition1() {
  generale = document.getElementById("chk_generale");
  baggage = document.getElementById("chk_baggages");
  confirmer = document.getElementById("confirmer_regle");
  confirmer.disabled =true;
  if (generale.checked && baggage.checked)
  {
    confirmer.disabled = false;
    confirmer.style.backgroundColor = 'green';
    confirmer.style.color = 'white';
  }
}
function confirmer_bouton() {
  generale = document.getElementById("div_chk_generale");
  baggage = document.getElementById("div_chk_baggage");
  confirmer_ok =document.getElementById("comfirmer_OK1")
  generale.style.display = "none";
  baggage.style.display = "none";
  confirmer_ok.innerText = 'Confirmé';
  confirmer_ok.style.backgroundColor = 'lightgreen';
  confirmer_ok.style.color = 'green';
}

function presences() {
  chk_1 = document.getElementById("chk1")
  chk_2 = document.getElementById("chk2")
  chk_3 = document.getElementById("chk3")
  chk_4 = document.getElementById("chk4")
  chk_5 = document.getElementById("chk5")
  chk_6 = document.getElementById("chk6")
  chk_7 = document.getElementById("chk7")
  chk_8 = document.getElementById("chk8")
  chk_9 = document.getElementById("chk9")
  chk_10 = document.getElementById("chk10")
  chk_11 = document.getElementById("chk11")
  chk_12 = document.getElementById("chk12")
  chk_13 = document.getElementById("chk13")
  chk_14 = document.getElementById("chk14")
  chk_15 = document.getElementById("chk15")
  chk_16 = document.getElementById("chk16")
  chk_17 = document.getElementById("chk17")
  div1 = document.getElementById("div_1")
  div2 = document.getElementById("div_2")
  div3 = document.getElementById("div_3")
  div4 = document.getElementById("div_4")
  div5 = document.getElementById("div_5")
  div6 = document.getElementById("div_6")
  div7 = document.getElementById("div_7")
  div8 = document.getElementById("div_8")
  div9 = document.getElementById("div_9")
  div10 = document.getElementById("div_10")
  div11 = document.getElementById("div_11")
  div12 = document.getElementById("div_12")
  div13 = document.getElementById("div_13")
  div14 = document.getElementById("div_14")
  div15 = document.getElementById("div_15")
  div16 = document.getElementById("div_16")
  div17 = document.getElementById("div_17")
  if (chk_1.checked){
    div1.style.backgroundColor = 'lightgreen';
    div1.style.color = 'green';
    div1.innerText = '/ BASSI Luca';
  }else{
    div1.style.backgroundColor = '#F08080';
    div1.style.color = 'red';
    div1.innerText = '/ BASSI Luca';
  }
  if (chk_2.checked){
    div2.style.backgroundColor = 'lightgreen';
    div2.style.color = 'green';
    div2.innerText = '/ BERNEY Dylan';
  }else{
    div2.style.backgroundColor = '#F08080';
    div2.style.color = 'red';
    div2.innerText = '/ BERNEY Dylan';
  }
  if (chk_3.checked){
    div3.style.backgroundColor = 'lightgreen';
    div3.style.color = 'green';
    div3.innerText = '/ BLATTER Jan';
  }else{
    div3.style.backgroundColor = '#F08080';
    div3.style.color = 'red';
    div3.innerText = '/ BLATTER Jan';
  }
  if (chk_4.checked){
    div4.style.backgroundColor = 'lightgreen';
    div4.style.color = 'green';
    div4.innerText = '/ BORCARD Jessy';
  }else{
    div4.style.backgroundColor = '#F08080';
    div4.style.color = 'red';
    div4.innerText = '/ BORCARD Jessy';
  }
  if (chk_5.checked){
    div5.style.backgroundColor = 'lightgreen';
    div5.style.color = 'green';
    div5.innerText = '/ BOURGUE Arthur';
  }else{
    div5.style.backgroundColor = '#F08080';
    div5.style.color = 'red';
    div5.innerText = '/ BOURGUE Arthur';
  }
  if (chk_6.checked){
    div6.style.backgroundColor = 'lightgreen';
    div6.style.color = 'green';
    div6.innerText = '/ CUNHA-ROCHA Dylan-David';
  }else{
    div6.style.backgroundColor = '#F08080';
    div6.style.color = 'red';
    div6.innerText = '/ CUNHA-ROCHA Dylan-David';
  }
  if (chk_7.checked){
    div7.style.backgroundColor = 'lightgreen';
    div7.style.color = 'green';
    div7.innerText = '/ GACON Kevin';
  }else{
    div7.style.backgroundColor = '#F08080';
    div7.style.color = 'red';
    div7.innerText = '/ GACON Kevin';
  }
  if (chk_8.checked){
    div8.style.backgroundColor = 'lightgreen';
    div8.style.color = 'green';
    div8.innerText = '/ GIORGIS Esteban';
  }else{
    div8.style.backgroundColor = '#F08080';
    div8.style.color = 'red';
    div8.innerText = '/ GIORGIS Esteban';
  }
  if (chk_9.checked){
    div9.style.backgroundColor = 'lightgreen';
    div9.style.color = 'green';
    div9.innerText = '/ KIALA-BINGA Christnovie';
  }else{
    div9.style.backgroundColor = '#F08080';
    div9.style.color = 'red';
    div9.innerText = '/ KIALA-BINGA Christnovie';
  }
  if (chk_10.checked){
    div10.style.backgroundColor = 'lightgreen';
    div10.style.color = 'green';
    div10.innerText = '/ RAZIC Almir';
  }else{
    div10.style.backgroundColor = '#F08080';
    div10.style.color = 'red';
    div10.innerText = '/ RAZIC Almir';
  }
  if (chk_11.checked){
    div11.style.backgroundColor = 'lightgreen';
    div11.style.color = 'green';
    div11.innerText = '/ VAROSO-GOMES David-Manuel';
  }else{
    div11.style.backgroundColor = '#F08080';
    div11.style.color = 'red';
    div11.innerText = '/ VAROSO-GOMES David-Manuel';
  }
  if (chk_12.checked){
    div12.style.backgroundColor = 'lightgreen';
    div12.style.color = 'green';
    div12.innerText = '/ WEST Gwenael';
  }else{
    div12.style.backgroundColor = '#F08080';
    div12.style.color = 'red';
    div12.innerText = '/ WEST Gwenael';
  }
  if (chk_13.checked){
    div13.style.backgroundColor = 'lightgreen';
    div13.style.color = 'green';
    div13.innerText = '/ ZINGG Valentin';
  }else{
    div13.style.backgroundColor = '#F08080';
    div13.style.color = 'red';
    div13.innerText = '/ ZINGG Valentin';
  }
  if (chk_14.checked){
    div14.style.backgroundColor = 'lightgreen';
    div14.style.color = 'green';
    div14.innerText = '/ EAASWARALINGAM Kaarththigan';
  }else{
    div14.style.backgroundColor = '#F08080';
    div14.style.color = 'red';
    div14.innerText = '/ EAASWARALINGAM Kaarththigan';
  }
  if (chk_15.checked){
    div15.style.backgroundColor = 'lightgreen';
    div15.style.color = 'green';
    div15.innerText = '/ FARDEL Bastien';
  }else{
    div15.style.backgroundColor = '#F08080';
    div15.style.color = 'red';
    div15.innerText = '/ FARDEL Bastien';
  }
  if (chk_16.checked){
    div16.style.backgroundColor = 'lightgreen';
    div16.style.color = 'green';
    div16.innerText = '/ GRUBER Adam';
  }else{
    div16.style.backgroundColor = '#F08080';
    div16.style.color = 'red';
    div16.innerText = '/ GRUBER Adam';
  }
  if (chk_17.checked){
    div17.style.backgroundColor = 'lightgreen';
    div17.style.color = 'green';
    div17.innerText = '/ URIEL-GLARIA Ander';
  }else{
    div17.style.backgroundColor = '#F08080';
    div17.style.color = 'red';
    div17.innerText = '/ URIEL-GLARIA Ander';
  }

}
