const express = require('express');
const router = express.Router();

//Controllers Pharmacy
const pharmacyGetController = require('../controllers/pharmacyGetController');
const pharmacyPostController = require('../controllers/pharmacyPostController');
const pharmacyPutController = require('../controllers/pharmacyPutController');
const pharmacyDeleteController = require('../controllers/pharmacyDeleteController');

//Controllers Medicine
const medicinesPostController = require('../controllers/medicinePostController');
const medicinePutController = require('../controllers/medicinesPutController');
const medicineDeleteController = require('../controllers/medicineDeleteController');

router
    .get('/', pharmacyGetController.GET_PHARMACY)
    .get('/:id', pharmacyGetController.GET_PHARMACY_ID)
    .post('/', pharmacyPostController.POST_PHARMACY)
    .put('/:id', pharmacyPutController.PHARMACY_UPDATE_ID)
    .delete('/:id', pharmacyDeleteController.PHARMACY_DELETE)
    .post('/medicines/:pharmacyID', medicinesPostController.MEDICINE_POST)
    .put('/medicines/:medicineID', medicinePutController.MEDICINE_PUT)
    .delete('/medicines/:medicineID', medicineDeleteController.MEDICINE_DELETE)


module.exports = router;