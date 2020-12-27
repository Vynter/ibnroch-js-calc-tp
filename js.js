var resultat = document.querySelector("#resultat");
var operator = ["*", "-", "/", "+", "(", ")"];
var length = resultat.value.length;

function addNbr(n) {
  //vérification avant la saisi pour éviter des erreurs qui peuvent étre provoqué par l'utilisateur
  if (resultat.value[length - 1] != ")") {
    if (resultat.value[0] == "0") {
      resultat.value = n;
    } else {
      resultat.value += n;
    }
  } else {
    alert("Veuillez choisir un opérator !");
  }
}

function addOpe(n) {
  if (resultat.value[0] == "0") {
    resultat.value = n;
  } else {
    resultat.value += n;
  }
}

function eql() {
  resultat.value = eval(resultat.value);
}

function del() {
  var tab = resultat.value.split("");
  tab.pop();
  resultat.value = tab.join("");
}

function res() {
  resultat.value = 0;
}
