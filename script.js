function tulostaLomake() {
  let nimi = document.getElementById("nimi").value;
  let sposti = document.getElementById("sposti").value;
  if (sposti == "") {
    sposti = " -";
  }
  let teksti = document.getElementById("teksti").value;
  if (teksti == "") {
    teksti = " -";
  }
  let yksivalinta = document.getElementsByName("yksivalinta");
  let yksivalittu = "";
  for (let i = 0; i < yksivalinta.length; i++) {
    if (yksivalinta[i].checked) {
      console.log("yksivalinta havaittu");
      yksivalittu = "<br>Yksivalinta: " + yksivalinta[i].value + "<br>";
    }
  }
  let monivalinta = document.getElementsByName("monivalinta");
  let monivalittu = "<br>Monivalinta: ";
  for (let i = 0; i < monivalinta.length; i++) {
    if (monivalinta[i].checked) {
      console.log("monivalinta havaittu");
      monivalittu += monivalinta[i].value + "<br>";
    }
  }

  let vastaus =
    "<p>Nimi: " +
    nimi +
    "<br>Sähköposti:" +
    sposti +
    "<br>Viesti: " +
    teksti +
    yksivalittu +
    monivalittu;
  document.getElementById("vastaus").innerHTML = vastaus;
}
