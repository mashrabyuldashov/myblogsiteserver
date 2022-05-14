const { read, write } = require('../utils/FS');

const POST_PHARMACY = (req, res) => {
    const { name } = req.body;
    const pharmacys = read('pharmacys.json');

    pharmacys.push({ id: pharmacys.length + 1, name: name });

    write('pharmacys.json', pharmacys);

    res.redirect('/pharmacys');
};

module.exports = {
    POST_PHARMACY
}