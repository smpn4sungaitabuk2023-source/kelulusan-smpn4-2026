
let siswa=[];
fetch('data.json').then(r=>r.json()).then(d=>siswa=d);

function cek(){
 const u=document.getElementById('username').value.trim().toLowerCase();
 const p=document.getElementById('password').value.trim();
 const s=siswa.find(x=>x.username.toLowerCase()===u && x.password===p);

 const h=document.getElementById('hasil');

 if(!s){
   h.innerHTML='<div class="result"><h3>Data tidak ditemukan</h3></div>';
   return;
 }

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
