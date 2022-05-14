const { read, write } = require('../utils/FS');

const PHARMACY_DELETE = (req, res) => {
    const { id } = req.params;

    const pharmacys = read('pharmacys.json')
    .filter(e => e.id != id);

    write('pharmacys.json', pharmacys);

    res.render('index');
}

module.exports = {
    PHARMACY_DELETE
}