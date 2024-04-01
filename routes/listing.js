const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js')
const Listing = require("../models/listing.js")
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js")
const multer = require('multer');
const { storage } = require('../cloudConfig.js')
const upload = multer({ storage })
//Create New Route...
router.get('/new', isLoggedIn, (req, res) => {
    res.render('listing/newentry.ejs');
})
router.post('/', isLoggedIn, upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.postList))

//Get Result
router.get("/", wrapAsync(listingController.index))
//Show route
router.get('/:id', wrapAsync(
    listingController.renderList
));

// update
router.get('/:id/edit', isLoggedIn,
    isOwner, validateListing, wrapAsync(listingController.editRender))

router.put('/:id', isOwner,upload.single('listing[image]'), wrapAsync(listingController.updateRender))

// Delete
router.delete('/:id', isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))
module.exports = router;