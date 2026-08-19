# Website Gudang WPC & PVC Palembang

Website statis siap deploy ke Vercel / Netlify / GitHub Pages.

## Yang sudah dibuat
- Homepage sales-oriented
- Landing SEO: WPC Palembang, Plafon PVC Palembang, Wallboard Palembang, UV Marble Palembang
- Landing jasa pemasangan
- 6 artikel SEO awal
- Kalkulator estimasi WPC + kirim hasil ke WhatsApp
- Sitemap.xml, robots.txt, canonical, Open Graph, JSON-LD Store/Service/Article/Breadcrumb
- Tracking hook untuk `gtag` dan `fbq` bila nanti ID dipasang
- Mobile responsive

## WA utama
0851 1762 4402 / 6285117624402

## Instagram
@gudang.interior_

## Penting sebelum deploy
1. Project Vercel sebaiknya memakai nama `gudangwpcpalembang` agar canonical bawaan cocok: `https://gudangwpcpalembang.vercel.app`.
2. Kalau URL/domain berbeda, Find & Replace semua `https://gudangwpcpalembang.vercel.app` di folder ini dengan domain final.
3. Ganti logo SVG di `assets/logo.svg` dengan logo asli bila sudah ada file PNG/SVG transparan.
4. Tambahkan foto proyek asli di website setelah deploy. Foto proyek nyata akan meningkatkan trust dan membantu image SEO; gunakan nama file seperti `wpc-backdrop-tv-palembang.jpg`, `plafon-pvc-palembang.jpg`, dan alt text yang deskriptif.
5. Harga di kalkulator WPC memakai acuan Rp70.000/keping dan jasa Rp60.000/m² untuk estimasi awal. Ubah angka di `assets/site.js` jika harga berubah.
6. Jangan mengaktifkan schema Review/Rating sebelum benar-benar ada review customer yang tampil di halaman.

## Setelah deploy untuk SEO lokal
- Daftarkan domain ke Google Search Console.
- Submit `/sitemap.xml`.
- Buat/optimalkan Google Business Profile dengan nama bisnis, nomor WA, kategori, jam buka dan alamat yang benar.
- Pastikan website dicantumkan di profil Instagram dan Google Business Profile.
- Upload minimal 2-4 artikel/bulan yang menjawab pencarian lokal dan pertanyaan customer.
- Tambahkan foto proyek asli secara berkala.
- Jangan membuat puluhan halaman keyword tipis/duplikat; utamakan konten yang benar-benar membantu calon customer.

## Tracking iklan
`assets/site.js` otomatis memanggil event `WhatsAppClick` dan `WPC_Calculator` bila Meta Pixel / GA4 sudah dipasang. Tambahkan snippet resmi Pixel/GA4 di `<head>` semua halaman saat ID sudah ada.
