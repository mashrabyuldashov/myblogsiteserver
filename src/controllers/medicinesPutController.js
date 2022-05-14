const { read, write } = require('../utils/FS');

const MEDICINE_PUT = (req, res) => {
    const { medicineID } = req.params;
    const { name } = req.body;

    const medicines = read('medicines.json');

    const medicinesFound = medicines
    .find(e => e.id == medicineID);

    const index = medicines.findIndex(e => e.id == medicineID);

    name ? medicinesFound.name = name : medicinesFound.name;

    medicines.splice(index, 1, medicinesFound);

    write('medicines.json', medicines);
    
    res.render('dorixonaid');
}

module.exports = {
    MEDICINE_PUT
}