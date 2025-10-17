function bukaLink(url) {
  window.open(url, '_blank');
}

function kirimPesan(event) {
  event.preventDefault();

  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const pesan = document.getElementById('pesan').value;

  const status = document.getElementById('status');
  status.textContent = "Mengirim pesan...";

  // Simulasi pengiriman (tidak ada backend)
  setTimeout(() => {
    status.textContent = `Terima kasih, ${nama}! Pesan kamu telah dikirim.`;
    document.querySelector('form').reset();
  }, 1000);
}
