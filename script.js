function tulostaLomake() {
  let nimi = document.getElementById("nimi").value;
  let sposti = document.getElementById("sposti").value;
  if (sposti == "") {
    sposti = " -";
  }
  let viesti = document.getElementById("viesti").value;
  if (viesti == "") {
    viesti = " -";
  }
  let taso = document.getElementsByName("lahtotaso");
  let valitutTasot = "<br>Lähtötaso:<br>";
  for (let i = 0; i < taso.length; i++) {
    if (taso[i].checked) {
      valitutTasot += taso[i].value + "<br>";
    }
  }
  let muoto = document.getElementsByName("kurssiMatka");
  let valittuMuoto = "";
  for (let i = 0; i < muoto.length; i++) {
    if (muoto[i].checked) {
      valittuMuoto = muoto[i].value;
      break;
    }
  }

  let valinta = "<br>";
  if (valittuMuoto == "kurssille") {
    valinta += "Kurssivalinta: "
  }
  else if (valittuMuoto == "matkalle") {
    valinta += "Kohdevalinta: "
  }
  let x = document.getElementById("valikko").selectedIndex;
  let y = document.getElementById("valikko").options;
  valinta += y[x].text;

  let kuu = document.getElementsByName("kuukausi");
  let valitutKuut = "<br>Sopivat ajankohdat:<br>";
  for (let i = 0; i < kuu.length; i++) {
    if (kuu[i].checked) {
      valitutKuut += kuu[i].value + "<br>";
    }
  }

  let vastaus =
    "<h3>Kiitos ilmoittautimisesta!</h3>" +
    "<p>Lähettämäsi viesti oli seuraava:<br><br>Nimi: " +
    nimi +
    "<br>Sähköposti: " +
    sposti +
    "<br>Viesti: " +
    viesti +
    valitutTasot +
    "Haluan ilmoittautua: " +
    valittuMuoto +
    valinta +
    valitutKuut;
  document.getElementById("vastaus").innerHTML = vastaus;
}

function teeValikko(versio) {
  let otsikko = "Valitse";
  let vaihtoehto1 = "";
  let vaihtoehto2 = "";
  let vaihtoehto3 = "";
  let vaihtoehto4 = "";
  let value4 = "";
  if (versio == "kurssi") {
    otsikko = "Valitse kurssi";
    vaihtoehto1 = "Peruskurssi";
    vaihtoehto2 = "Jatkokurssi";
    vaihtoehto3 = "Rikasetettu ilma kurssi";
    vaihtoehto4 = "Kertauskurssi";
  } else if (versio == "matka") {
    otsikko = "Valitse kohde";
    vaihtoehto1 = "Raja Ampat, Indonesia";
    vaihtoehto2 = "Great Barrier Reef, Australia";
    vaihtoehto3 = "Blue Hole, Belize";
    vaihtoehto4 = "Silfra-rako, Islanti";
  }
  document.getElementById("valikkoOtsikko").innerHTML = otsikko;
  document.getElementById("v1").innerHTML = vaihtoehto1;
  document.getElementById("v2").innerHTML = vaihtoehto2;
  document.getElementById("v3").innerHTML = vaihtoehto3;
  document.getElementById("v4").innerHTML = vaihtoehto4;
}
