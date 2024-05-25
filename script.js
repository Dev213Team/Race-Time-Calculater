document.addEventListener("DOMContentLoaded", () => {

  const turZamanlari = [];

  document.getElementById("addTimeBtn").addEventListener("click",  () => {

    let turZamani;

    while (true) {

      turZamani = parseFloat(prompt("Yarış süresini saniye cinsinden girin...\nOrtalamayı hesaplamak ve çıkmak için '-1' girin:"));

      if (!isNaN(turZamani)) {
        if (turZamani === -1) {
          break;
        }
        turZamanlari.push(turZamani);

      } else {
        alert("Lütfen geçerli bir sayı giriniz !!!");
      }
    }

    const toplamZaman = turZamanlari.reduce((toplam, zaman) => toplam + zaman,0);

    // pesimist tester'larin '0' girme ihtimaline karsi ;)
    const ortalamaZaman = turZamanlari.length > 0 ? toplamZaman / turZamanlari.length : 0;

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>Ortalama tur süresi: ${ortalamaZaman.toFixed(2)} saniye</p>`;
  });
});