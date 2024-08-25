//balok
exports.hitungVolumeBalok = (req, res) => {
    const { panjang, lebar, tinggi } = req.body;
    if (!panjang || !lebar || !tinggi) {
        return res.status(400).json({ message: 'masukkan panjang, lebar, dan tinggi balok.'});
    }

    const volume = panjang * lebar * tinggi;
    res.json({ volume });
};

exports.hitungLuasPermukaanBalok = (req, res) => {
    const { panjang, lebar, tinggi } = req.body;
    if (!panjang || !lebar || !tinggi) {
        return res.status(400).json({message: 'masukkan panjang, lebar, dan tinggi balok'});
    }
    const hitungLuasPermukaan = 2 * (panjang*lebar+panjang*tinggi+lebar*tinggi);
    res.json({ hitungLuasPermukaan });
}

//kubus
exports.hitungVolumeKubus = (req, res) => {
    const { sisi } = req.body;
    if (!sisi) {
        return res.status(400).json({ message: 'Mohon masukkan panjang sisi kubus.' });
    }
    const volume = Math.pow(sisi, 3);
    res.json({ volume });
};

exports.hitungLuasPermukaanKubus = (req, res) => {
    const { sisi } = req.body;
    if (!sisi) {
        return res.status(400).json({ message: 'Mohon masukkan panjang sisi kubus.' });
    }
    const luasPermukaan = 6 * Math.pow(sisi, 2);
    res.json({ luasPermukaan });
};

//tabung
exports.hitungVolumeTabung = (req, res) => {
    const { jariJari, tinggi } = req.body;
    if (!jariJari || !tinggi) {
        return res.status(400).json({ message: 'Mohon masukkan jari-jari dan tinggi tabung.' });
    }
    const volume = Math.PI * Math.pow(jariJari, 2) * tinggi;
    res.json({ volume });
};

exports.hitungLuasPermukaanTabung = (req, res) => {
    const { jariJari, tinggi } = req.body;
    if (!jariJari || !tinggi) {
        return res.status(400).json({ message: 'Mohon masukkan jari-jari dan tinggi tabung.' });
    }
    const luasPermukaan = 2 * Math.PI * jariJari * (jariJari + tinggi);
    res.json({ luasPermukaan });
};

//bola
exports.hitungVolumeBola = (req, res) => {
    const { jariJari } = req.body;
    if (!jariJari) {
        return res.status(400).json({ message: 'Mohon masukkan jari-jari bola.' });
    }
    const volume = (4/3) * Math.PI * Math.pow(jariJari, 3);
    res.json({ volume });
};

exports.hitungLuasPermukaanBola = (req, res) => {
    const { jariJari } = req.body;
    if (!jariJari) {
        return res.status(400).json({ message: 'Mohon masukkan jari-jari bola.' });
    }
    const luasPermukaan = 4 * Math.PI * Math.pow(jariJari, 2);
    res.json({ luasPermukaan });
};
