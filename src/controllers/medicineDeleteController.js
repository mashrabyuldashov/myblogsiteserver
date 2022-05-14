const { read, write } = require('../utils/FS');

const MEDICINE_DELETE = (req, res) => {
    const { medicineID } = req.params;

    const medicines = read('medicines.json')
    .filter(e => e.id != medicineID);

    write('medicines.json', medicines);

    res.json(medicines);
}

module.exports = {
    MEDICINE_DELETE
}