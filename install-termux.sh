#!/bin/bash

echo "🚀 Instalasi Botwa untuk Termux..."
echo ""

# Update package manager
echo "📦 Update package manager..."
pkg update -y
pkg upgrade -y

# Install dependencies
echo "📦 Installing dependencies..."
pkg install -y nodejs
pkg install -y build-essential
pkg install -y python3
pkg install -y git

# Install npm packages
echo "📦 Installing npm packages..."
npm install whatsapp-web.js@latest
npm install qrcode-terminal
npm install dotenv
npm install puppeteer

echo ""
echo "✅ Instalasi selesai!"
echo ""
echo "📝 Setup konfigurasi:"
echo "1. Buat file .env dari .env.example"
echo "2. Edit .env dan masukkan nomor WhatsApp Anda"
echo "3. Jalankan: npm start"
echo ""
