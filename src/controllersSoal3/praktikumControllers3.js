// Konversi dari Desimal
exports.decimalToOthers = (req, res) => {
    const { number, target } = req.body;

    if (typeof number !== 'number' || !target) {
        return res.status(400).json({ message: 'Mohon masukkan nilai bilangan desimal yang valid dan target konversi.' });
    }

    let result;
    switch(target.toLowerCase()) {
        case 'binary':
            result = number.toString(2);
            break;
        case 'octal':
            result = number.toString(8);
            break;
        case 'hexadecimal':
            result = number.toString(16).toUpperCase();
            break;
        default:
            return res.status(400).json({ message: 'Target konversi tidak valid.' });
    }

    res.json({ number: result, type: target });
};

// Konversi dari Biner
exports.binaryToOthers = (req, res) => {
    const { number, target } = req.body;

    if (!number || !/^[01]+$/.test(number) || !target) {
        return res.status(400).json({ message: 'Mohon masukkan nilai bilangan biner yang valid dan target konversi.' });
    }

    const decimal = parseInt(number, 2);
    let result;
    switch(target.toLowerCase()) {
        case 'decimal':
            result = decimal;
            break;
        case 'octal':
            result = decimal.toString(8);
            break;
        case 'hexadecimal':
            result = decimal.toString(16).toUpperCase();
            break;
        default:
            return res.status(400).json({ message: 'Target konversi tidak valid.' });
    }

    res.json({ number: result, type: target });
};

// Konversi dari Oktal
exports.octalToOthers = (req, res) => {
    const { number, target } = req.body;

    if (!number || !/^[0-7]+$/.test(number) || !target) {
        return res.status(400).json({ message: 'Mohon masukkan nilai bilangan oktal yang valid dan target konversi.' });
    }

    const decimal = parseInt(number, 8);
    let result;
    switch(target.toLowerCase()) {
        case 'decimal':
            result = decimal;
            break;
        case 'binary':
            result = decimal.toString(2);
            break;
        case 'hexadecimal':
            result = decimal.toString(16).toUpperCase();
            break;
        default:
            return res.status(400).json({ message: 'Target konversi tidak valid.' });
    }

    res.json({ number: result, type: target });
};

// Konversi dari Heksadesimal
exports.hexadecimalToOthers = (req, res) => {
    const { number, target } = req.body;

    if (!number || !/^[0-9a-fA-F]+$/.test(number) || !target) {
        return res.status(400).json({ message: 'Mohon masukkan nilai bilangan heksadesimal yang valid dan target konversi.' });
    }

    const decimal = parseInt(number, 16);
    let result;
    switch(target.toLowerCase()) {
        case 'decimal':
            result = decimal;
            break;
        case 'binary':
            result = decimal.toString(2);
            break;
        case 'octal':
            result = decimal.toString(8);
            break;
        default:
            return res.status(400).json({ message: 'Target konversi tidak valid.' });
    }

    res.json({ number: result, type: target });
};
