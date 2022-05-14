const { read, write } = require('../utils/FS');

const MEDICINE_POST = (req, res) => {
    const { pharmacyID } = req.params;
    const { name } = req.body;

    const medicines = read('medicines.json')

    medicines.push({ id: medicines.length + 1, name: name, pharmacyID: Number(pharmacyID) });

    write('medicines.json', medicines);

    res.redirect(`/pharmacys/medicines/${pharmacyID}`)
}   

module.exports = {
    MEDICINE_POST
}