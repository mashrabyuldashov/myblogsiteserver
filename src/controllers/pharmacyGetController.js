const { read, write } = require('../utils/FS');

const GET_PHARMACY = (_, res) => {
    const pharmacys = read('pharmacys.json');

    pharmacys.map(m => {
            m.medicines = read('medicines.json')
                .filter(e => m.id == e.pharmacyID)
                .filter(e => delete e.pharmacyID);
        });

    res.render('index', { pharmacys: pharmacys });
};

const GET_PHARMACY_ID = (req, res) => {
    const { id } = req.params;
    const pharmacys = read('pharmacys.json');

    const pharmacysFound = read('pharmacys.json')
    .find(e => e.id == id);

    pharmacysFound.medicines = read('medicines.json')
    .filter(e => pharmacysFound.id == e.pharmacyID)
    .filter(e => delete e.pharmacyID);
    
    res.render('dorixonaid', { pharmacysFound: pharmacysFound, pharmacys: pharmacys });
};

module.exports = {
    GET_PHARMACY,
    GET_PHARMACY_ID
};