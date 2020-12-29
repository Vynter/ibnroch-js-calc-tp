var resultat = document.querySelector("#resultat");

function addN(n) {
  //afin d'éviter une saisi de ce type 012345
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
