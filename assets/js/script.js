
  let vid = document.getElementById('myVideo');
  
  
  let clickCount = 33;
  let infoElem = document.getElementById('info-info');
  function playvid() { 
    vid.play();
    if(clickCount == 0 ) {
      clickCount = 100;
    }
  } 
  function pauseVid() {
    clickCount--;
    let maxClick = 0; 
  
    if (clickCount >= maxClick) {
      infoElem.innerHTML = " klik  :" + (clickCount - maxClick) + "kali";
      let test = document.getElementById('test');
      test.style.backgroundColor = 'red';
  }else if (clickCount < maxClick){
     infoElem.innerHTML = "habis ";
    vid.pause();

    buttonElem.disable = true ;
  }
}


// registrasi
// JavaScript
const formRegistrasi = document.getElementById('form-registrasi');

formRegistrasi.addEventListener('submit', function(event) {
  event.preventDefault();

  // Ambil data dari form registrasi
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Buat objek baru dengan data registrasi
  const data = {
    nama: nama,
    email: email,
    password: password
  };
  console.log(JSON.stringify(data));

  // Buka file JSON menggunakan XMLHttpRequest
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'assets/data/member.json', true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      // Ambil data JSON dari file
      const json = JSON.parse(xhr.responseText);

      // Tambahkan data baru ke dalam array
      json.push(data);

      // Simpan data kembali ke dalam file JSON
      const xhr2 = new XMLHttpRequest();
      xhr2.open('POST', 'assets/data/member.json', true);
      xhr2.setRequestHeader('Content-Type', 'application/json');
      xhr2.send(JSON.stringify(json));

      // Tampilkan pesan keberhasilan
      const successMessage = document.getElementById('success-message');
      successMessage.style.display = 'block';
    }
  };

  // Kirim permintaan untuk membuka file JSON
  xhr.send();
});
