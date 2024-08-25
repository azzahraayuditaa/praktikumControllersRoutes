//soal1controller.js
exports.profil = (req, res) => {
    let nama = req.params.nama
    let umur = req.params.umur
    let response = {
        nama: nama,
        umur: umur
    }
    return res.json(response)
}

// ini
exports.bujurSangkar = (req, res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    return res.json(response)
}
