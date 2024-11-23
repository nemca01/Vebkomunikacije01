function updateTime() {
    var now = new Date();
   //  var dateElement = document.getElementById('date');
    var timeElement = document.getElementById('time');
   //  dateElement.innerHTML = now.toDateString();
    timeElement.innerHTML = now.toLocaleTimeString();
  }
  setInterval(updateTime, 1000);

  let proizvodi = [
    { ime: "THE WITCHER 3: WILD HUNT", cena: 3000 },
    { ime: "ASSASSIN'S CREED II", cena: 1200 },
    { ime: "GRAND THEFT AUTO IV", cena: 2300 },
    { ime: "FIFA 22", cena: 7000 },
    { ime: "STRONGHOLD 2 DELUXE", cena: 1800 },
];
proizvodi.push({ ime: "TOMB RAIDER: THE ANGEL OF DARKNESS", cena: 1000 })

function generisiListuProizvoda(proizvodi) {
    let listaHtml = "<ul>";
    proizvodi.forEach(proizvod => {
        listaHtml += `<li>${proizvod.ime} - Cena: ${proizvod.cena} dinara</li>`;
    });
    listaHtml += "</ul>";
    return listaHtml;
}

document.getElementById("prikazi-proizvode").addEventListener("mouseover", function() {
    document.getElementById("proizvodi-lista").innerHTML = generisiListuProizvoda(proizvodi);
    document.getElementById("proizvodi-lista").style.display = "block";
});

function kupovina(){
    alert('Uspešno ste ubacili u korpu ovu igricu!');
}
