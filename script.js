let siswa=[];

fetch('https://script.google.com/macros/s/AKfycbyhzhKJRQ4S4aYpuhOpc2rOMOu2tSymOmGW50ID1Dag0TTA7iyqUOO7nPXb5i_BXx6iuQ/exec')
.then(response => response.json())
.then(data => {
    console.log("DATA BERHASIL:", data);
    siswa = data;
})
.catch(error => {
    console.error("ERROR:", error);
});

function cek(){

    const u = document.getElementById('username').value.trim().toLowerCase();
    const p = document.getElementById('password').value.trim();

    const s = siswa.find(x =>
        String(x.USERNAME).trim().toLowerCase() === u &&
        String(x.PASSWORD).trim() === p
    );

    const h = document.getElementById('hasil');

    if(!s){
        h.innerHTML = `
        <div class="result">
            <h3>Data tidak ditemukan</h3>
        </div>`;
        return;
    }

    h.innerHTML = `
    <div class="result">
        <h1>🎓 SELAMAT</h1>
        <h2>ANDA DINYATAKAN ${s.STATUS_KELULUSAN}</h2>
        <p><b>Nama:</b> ${s.NAMA}</p>
        <p><b>TTL:</b> ${s.TTL}</p>
        <a class="btn" href="${s.LINK_SKL}" target="_blank">UNDUH SKL</a>
        <a class="btn" href="${s.LINK_SKHTKA}" target="_blank">UNDUH SKHTA</a>
    </div>`;
}
