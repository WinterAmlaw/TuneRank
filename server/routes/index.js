const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

const userController = require('../controllers/userController');
const artistsController = require('../controllers/artistsController');
const albumsController = require('../controllers/albumsController');
const profileController = require('../controllers/profileController');
const artistRatingsController = require('../controllers/artistRatingsController');


// USER ROUTES
//login
router.post('/login', userController.login);
//signup
router.post('/signup', userController.signup);
//get all
router.get('/users', authMiddleware.authenticateUser, userController.getAllUsers);
//get by id
router.get('/users/:id', authMiddleware.authenticateUser, authMiddleware.authorizeUser, userController.getUserById);

// PROFILE ROUTES
// get all profiles
router.get('/profiles', profileController.getAllProfiles);
// get profile by id
router.get('/profile/:id', profileController.getProfileById, profileController.getProfileById);
// // create or update profile
// router.post('/profile', authMiddleware.authenticateUser, profileController.createOrUpdateProfile);
// // get profile by username
// router.get('/profile/:username', authMiddleware.authenticateUser, profileController.getProfileByUsername);

// ARTIST ROUTES
//post artist
router.post('/artists', authMiddleware.authorizeUser, artistsController.postNewArtist);
//get all
router.get('/artists', artistsController.getAllArtists);
//get by id
router.get('/artists/:id', artistsController.getArtistById);
//update by id 
router.put('/artists/:id', authMiddleware.authorizeUser, artistsController.updateArtistById);
//delete artist by id
router.delete('/artists/:id', authMiddleware.authorizeUser, artistsController.deleteArtistById);

// ALBUM ROUTES
//post album
router.post('/albums', authMiddleware.authorizeUser, albumsController.postNewAlbum);
//get all
router.get('/albums', albumsController.getAllAlbums);
//get all albums by artist
router.get('/albumsbyartist/:id', albumsController.getAllAlbumsByArtist);
//get by id
router.get('/albums/:id', albumsController.getAlbumById);
//update by id 
router.put('/albums/:id', authMiddleware.authorizeUser, albumsController.updateAlbumById);
//delete Albums by id
router.delete('/albums/:id', authMiddleware.authorizeUser, albumsController.deleteAlbumById);

//STATIC ROUTES

// ARTIST RATING ROUTES
// Post or update rating for an artist
router.post('/artists/:id/rate', authMiddleware.authenticateUser, artistRatingsController.rateArtist);

// Get the current user's rating for an artist
router.get('/artists/:id/rating', authMiddleware.authenticateUser, artistRatingsController.getUserRatingForArtist);

// Get the average rating for an artist
router.get('/artists/:id/average-rating', artistRatingsController.getAverageRatingForArtist);


module.exports = router;