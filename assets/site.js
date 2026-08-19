const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const menu=$('.menu'), links=$('.links'); if(menu&&links){menu.addEventListener('click',()=>links.classList.toggle('open'));$$('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')))}
function track(name,params={}){try{if(typeof gtag==='function')gtag('event',name,params);if(typeof fbq==='function')fbq('trackCustom',name,params)}catch(e){}}
$$('[data-wa]').forEach(a=>a.addEventListener('click',()=>track('WhatsAppClick',{source:a.dataset.wa||'website'})));
const form=$('#wpcCalc');
if(form){
  form.addEventListener('submit',e=>{e.preventDefault();const w=parseFloat($('#width').value),h=parseFloat($('#height').value),areaName=$('#areaName').value.trim()||'Area pemasangan';if(!w||!h||w<=0||h<=0)return;
    const strips=Math.ceil(w/.16);let pieces;if(h<=3){const perPiece=Math.max(1,Math.floor(3/h));pieces=Math.ceil(strips/perPiece)}else{pieces=strips*Math.ceil(h/3)}pieces=Math.ceil(pieces*1.05);const area=(w*h).toFixed(2);const material=pieces*70000;const jasa=Math.round(w*h*60000);$('#calcResult').innerHTML=`<strong>± ${pieces} keping WPC</strong><div>Luas area ${area} m² • estimasi material mulai <b>${rupiah(material)}</b></div><small>Estimasi awal dengan lebar efektif 16 cm, panjang WPC 3 m, dan buffer ±5%. Potongan dapat dioptimalkan saat final quotation.</small>`;$('#sendCalc').hidden=false;$('#sendCalc').dataset.text=`Halo Gudang WPC & PVC Palembang, saya mau konsultasi WPC.\n\nArea: ${areaName}\nUkuran: ${w} m × ${h} m (${area} m²)\nEstimasi website: ±${pieces} keping WPC.\n\nMohon dicek kebutuhan final dan motif yang ready.`;track('WPC_Calculator',{area:parseFloat(area),pieces})
  });
  $('#sendCalc')?.addEventListener('click',e=>{const text=e.currentTarget.dataset.text||'';e.currentTarget.href='https://wa.me/6285117624402?text='+encodeURIComponent(text);track('WhatsAppClick',{source:'calculator'})})
}
function rupiah(n){return new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n)}
