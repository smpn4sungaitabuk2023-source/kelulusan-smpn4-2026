let siswa=[];

fetch('https://script.google.com/macros/s/AKfycbyhzhKJRQ4S4aYpuhOpc2rOMOu2tSymOmGW50ID1Dag0TTA7iyqUOO7nPXb5i_BXx6iuQ/exec')
.then(response => {
    console.log("Response:", response);
    return response.json();
})
.then(data => {
    console.log("DATA BERHASIL:", data);
    siswa = data;
})
.catch(error => {
    console.error("ERROR:", error);
});

 h.innerHTML=`
 <div class="result">
 <h1>🎓 SELAMAT</h1>
 <h2>ANDA DINYATAKAN ${s.status}</h2>
 <p><b>Nama:</b> ${s.nama}</p>
 <p><b>TTL:</b> ${s.ttl}</p>
 <a class="btn" href="${s.link_skl}" target="_blank">UNDUH SKL</a>
 <a class="btn" href="${s.link_skhta}" target="_blank">UNDUH SKHTA</a>
 </div>`;
}
