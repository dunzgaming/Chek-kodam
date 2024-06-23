const kodamNames = [
  "Pocong", "Kuntilanak", "Genderuwo", "Tuyul", "Wewe Gombel",
  "Sundel Bolong", "Leak", "Palasik", "Banaspati", "Begu Ganjang",
  "Jelangkung", "Si Manis Jembatan Ancol", "Nyi Roro Kidul", "Siluman Ular", "Babi Ngepet",
  "Mbak Yul", "Suster Ngesot", "Kolor Ijo", "Hantu Jeruk Purut", "Jin Tomang",
  "Hantu Ambulance", "Hantu Laut", "Hantu Pohon Beringin", "Hantu Kuburan", "Hantu Rumah Kosong",
  "Hantu Jembatan", "Hantu Sumur", "Hantu Sekolah", "Hantu Penjara", "Hantu Pabrik",
  "Hantu Panggung", "Hantu Pesawat", "Hantu Kereta", "Hantu Kamar Mandi", "Hantu Pintu",
  "Hantu TV", "Hantu Mobil", "Hantu Motor", "Hantu Tempat Tidur", "Hantu Kasur",
  "Hantu Baju", "Hantu Boneka", "Hantu Bayi", "Hantu Anak Kecil", "Hantu Ibu-Ibu",
  "Hantu Ayah", "Hantu Kakek", "Hantu Nenek", "Hantu Kucing", "Hantu Anjing"
];

document.getElementById('kodamForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const personName = document.getElementById('personName').value;
  
  if (personName.trim() !== "") {
    const randomKodamName = kodamNames[Math.floor(Math.random() * kodamNames.length)];
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('kodamName').innerText = randomKodamName;
  } else {
    document.getElementById('result').classList.add('hidden');
    alert('Please enter a valid name.');
  }
});