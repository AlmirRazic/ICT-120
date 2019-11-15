<!--auteur: Almir Razic
titre: motivation.js
date:15.11.2019
version: 1-->


<!--le script ne fonctionne pas alors que le code me semble être just-->








// cette fonction est appelée à chaque fois que l'on tape sur une touche (onkeypress,onkeyup), que l'on quite un champ(onblur).
// l'aiguillage se fait à l'intérieur.
// A savoir: si l'élément d'éclencheur de l'évenemment a un attibut nomé 'control_length' et qu'il est mis à 1, alors on traite l'évenement,
// sinon, on passe la main
function verif_textarea_length(e)
{
  var target = e.target || e.srcElement;  // récupération de la cible
  var is_something_wrong = false;         // initialisation variable

  if ((target.attributes) && (target.attributes['control_length']) && (target.attributes['control_length'].value = '1'))   // 'control_length'?
  {
    max = target.attributes['maxlength'].value;           //récupération de la valeur maxlength de la cible
    id_textarea = target.attributes['id'].value;          //récupération de la valeur id de la cible
    id_control_cell = target.attributes['id_control_cell'].value;      //récupération de la valeur id de la div pour le compteur

    textarea = document.getElementById(id_textarea);      //assignation du textarea dans un objet plus accessible
    if (textarea.value.length > max)                      //est-ce que la taille du texte est trop grande?
    {
      //oui, on affiche un message et on découpe ce qui traine après la limite
      alert('Vous ne pouvez rentrer que '+ max +' caractères maximum pour ce champs');
      textarea.value=textarea.value.substring(0,max);
      is_something_wrong = true;     // on prévient à la sortie que qque chose ne s'est pas bien passé
    }
    show_counter_value(id_control_cell,textarea.value.length);  //on affiche la taille du texte
  }
  return (!is_something_wrong);     //retour à l'envoyeur
}

// affiche le nombre de caractères du textarea
//rien de bien compliqué
function show_counter_value(id_control_cell,counter_value)
{
  control_cell_div = document.getElementById(id_control_cell);
  control_cell_div.innerHTML = counter_value ;    // on met à jour le champs de contrôle.
  return true;
}

//mise en place des gachettes (triggers en anglais)
function set_callback_events()
{
  if (document.addEventListener){
    //      alert('FF');
    document.addEventListener('keypress', verif_textarea_length, false);
    document.addEventListener('keyup', verif_textarea_length, false);
    document.addEventListener('blur', verif_textarea_length, false);
  } else if (document.attachEvent){
    //      alert('IE');
    document.attachEvent('onkeypress', verif_textarea_length);
    document.attachEvent('onkeyup', verif_textarea_length);
    document.attachEvent('onblur', verif_textarea_length);
  }
}
