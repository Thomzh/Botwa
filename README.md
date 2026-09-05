# Botwa - Bot WhatsApp Otomatis

Bot WhatsApp otomatis untuk pelayanan toko online dengan fitur pembelian barang, cek harga, dan broadcast pesan.

## 📁 Struktur Folder

```
Botwa/
├── index.js                 # Main bot aplikasi
├── .env                     # Konfigurasi token & nomor owner
├── package.json             # Dependencies
├── database/
│   ├── users.json          # Data pelanggan
│   └── orders.json         # Data order
├── fitur/
│   ├── menu.js             # Menu utama bot
│   ├── autoReply.js        # Balasan otomatis keyword
│   ├── cekResi.js          # Cek status resi
│   └── broadcast.js        # Kirim pesan massal
└── media/                  # Folder foto katalog
```

## 🚀 Fitur Utama

- 💎 **BUY DL** - Pesan paket DL
- 🔷 **BUY BGL** - Pesan paket BGL
- 💰 **CEK HARGA** - Lihat daftar harga produk
- 📦 **CEK RESI** - Cek status pengiriman
- 📢 **BROADCAST** - Kirim pesan ke semua user
- 🤖 **AUTO REPLY** - Balasan otomatis keyword
- 👨‍💼 **HUB ADMIN** - Hubungi admin

## 📦 Instalasi

```bash
npm install whatsapp-web.js qrcode-terminal dotenv
```

## ⚙️ Konfigurasi

Buat file `.env`:
```
OWNER_NUMBER=62812345678
BOT_NAME=Toko DL & BGL
SESSION_NAME=botwa-session
```

## 🎯 Cara Menggunakan

1. Clone repository:
```bash
git clone https://github.com/Thomzh/Botwa.git
cd Botwa
```

2. Install dependencies:
```bash
npm install
```

3. Setup .env:
```bash
cp .env.example .env
# Edit .env dengan konfigurasi Anda
```

4. Jalankan bot:
```bash
npm start
```

5. Scan QR Code dengan WhatsApp

## 📝 Menu Perintah

- `/menu` - Tampilkan menu utama
- `/harga_dl` - Lihat harga DL
- `/harga_bgl` - Lihat harga BGL
- `/resi [nomor]` - Cek status resi

## 💬 Contoh Interaksi

**User:** Halo
**Bot:** Halo juga! Ada yang bisa kami bantu?

**User:** Harga
**Bot:** Silakan pilih CEK HARGA untuk melihat daftar harga kami

## 📝 Lisensi

MIT License

## 👨‍💼 Author

Created by Thomzh
