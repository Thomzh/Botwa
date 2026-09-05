const menuUtama = (pushname) => {
return `
Halo kak ${pushname} 👋
Selamat datang di Toko DL & BGL

Silakan pilih menu dibawah ini:
`
}

const buttonMenu = [
    {buttonId: 'btn_buy_dl', buttonText: {displayText: 'BUY DL 💎'}, type: 1},
    {buttonId: 'btn_buy_bgl', buttonText: {displayText: 'BUY BGL 🔷'}, type: 1},
    {buttonId: 'btn_sell', buttonText: {displayText: 'JUAL DL/BGL'}, type: 1},
    {buttonId: 'btn_harga', buttonText: {displayText: 'CEK HARGA'}, type: 1},
    {buttonId: 'btn_admin', buttonText: {displayText: 'HUB ADMIN'}, type: 1},
]

const listProdukDL = {
    title: "LIST HARGA DL",
    sections: [
        {
            title: "Paket DL",
            rows: [
                {title: "1000 DL", rowId: "order_dl_1k", description: "Rp 90.000"},
                {title: "5000 DL", rowId: "order_dl_5k", description: "Rp 450.000"},
                {title: "10000 DL", rowId: "order_dl_10k", description: "Rp 900.000"},
            ]
        }
    ]
}

const listProdukBGL = {
    title: "LIST HARGA BGL",
    sections: [
        {
            title: "Paket BGL",
            rows: [
                {title: "100 BGL", rowId: "order_bgl_100", description: "Rp 85.000"},
                {title: "500 BGL", rowId: "order_bgl_500", description: "Rp 425.000"},
                {title: "1000 BGL", rowId: "order_bgl_1k", description: "Rp 850.000"},
            ]
        }
    ]
}

module.exports = { menuUtama, buttonMenu, listProdukDL, listProdukBGL }
