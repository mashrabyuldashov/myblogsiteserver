const { read, write } = require('../utils/FS');

const PHARMACY_UPDATE_ID = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const pharmacys = read('pharmacys.json');
    const pharmacysUpdate = pharmacys
    .find(e => e.id == id)
    const index = pharmacys.findIndex(e => e.id == id);

    name ? pharmacysUpdate.name = name : pharmacysUpdate.name;

    pharmacys.splice(index, 1, pharmacysUpdate);

    write('pharmacys.json', pharmacys);

    res.json({
        status: "OK",
        message: "Updated Pharmacys"
    });
};

module.exports = {
    PHARMACY_UPDATE_ID
}