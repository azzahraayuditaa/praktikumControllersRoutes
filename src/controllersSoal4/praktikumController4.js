exports.calculateBMI = (req, res) => {
    const { weight, height } = req.body;

    if (typeof weight !== 'number' || typeof height !== 'number') {
        return res.status(400).json({ message: 'Mohon masukkan nilai berat dan tinggi yang valid.' });
    }

    const bmi = weight / (height * height);
    let category;

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    res.json({ bmi: bmi.toFixed(2), category });
};
