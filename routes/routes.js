const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const searchController = require('../controllers/searchController');
const userController = require('../controllers/userController');

// Property routes
router.post('/properties', propertyController.addProperty);
router.put('/properties/updateStatus', propertyController.updatePropertyStatus);
router.get('/properties/getUserProperties/:userId', propertyController.getUserProperties);



//// user route
router.post('/addUser', userController.createUser);

// Search routes
router.get('/properties/search', searchController.searchProperties);

///shortlist routes
router.post('/properties/shortlist', searchController.shortlistProperty);
router.get('/properties/getshortlisted/:userId', searchController.getShortlistedProperties);

module.exports = router;
