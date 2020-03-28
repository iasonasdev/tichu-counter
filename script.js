/* ASSOS */
var textassos = document.getElementById("assoscount"),
  countassos = 4,
  assosplus = document.getElementById("assosplus"),
  assosminus = document.getElementById("assosminus");
assosplus.onclick = function () {
  if (countassos < 4) countassos += 1;
  textassos.innerHTML = countassos;
};
assosminus.onclick = function () {
  if (countassos > 0) countassos -= 1;
  textassos.innerHTML = countassos;
};

/* RIGAS */
var textrigas = document.getElementById("rigascount"),
  countrigas = 4,
  rigasplus = document.getElementById("rigasplus"),
  rigasminus = document.getElementById("rigasminus");
rigasplus.onclick = function () {
  if (countrigas < 4) countrigas += 1;
  textrigas.innerHTML = countrigas;
};
rigasminus.onclick = function () {
  if (countrigas > 0) countrigas -= 1;
  textrigas.innerHTML = countrigas;
};

/* NTAMA */
var textntama = document.getElementById("ntamacount"),
  countntama = 4,
  ntamaplus = document.getElementById("ntamaplus"),
  ntamaminus = document.getElementById("ntamaminus");
ntamaplus.onclick = function () {
  if (countntama < 4) countntama += 1;
  textntama.innerHTML = countntama;
};
ntamaminus.onclick = function () {
  if (countntama > 0) countntama -= 1;
  textntama.innerHTML = countntama;
};

/* DRAKOS */
var buttondrakos = document.getElementById("drakosswitch"),
  textdrakos = document.getElementById("drakosinplay"),
  drakosinplay = true;
buttondrakos.onclick = function () {
  if (drakosinplay) {
    drakosinplay = false;
    textdrakos.innerHTML = "ΕΞΩ";
  } else {
    drakosinplay = true;
    textdrakos.innerHTML = "ΜΕΣΑ";
  }
};

/* FOINIKAS */
var buttonfoinikas = document.getElementById("foinikasswitch"),
  textfoinikas = document.getElementById("foinikasinplay"),
  foinikasinplay = true;
buttonfoinikas.onclick = function () {
  if (foinikasinplay) {
    foinikasinplay = false;
    textfoinikas.innerHTML = "ΕΞΩ";
  } else {
    foinikasinplay = true;
    textfoinikas.innerHTML = "ΜΕΣΑ";
  }
};

/* SKYLIA */
var buttonskylia = document.getElementById("skyliaswitch"),
  textskylia = document.getElementById("skyliainplay"),
  skyliainplay = true;
buttonskylia.onclick = function () {
  if (skyliainplay) {
    skyliainplay = false;
    textskylia.innerHTML = "ΕΞΩ";
  } else {
    skyliainplay = true;
    textskylia.innerHTML = "ΜΕΣΑ";
  }
};