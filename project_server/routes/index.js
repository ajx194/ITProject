const express = require('express'); //import express

const router  = express.Router(); 

const quote = require('../controller/quote-submission'); 
const signup = require('../controller/signup');
const signin = require('../controller/signin');
const contactRouter = require('../controller/contact');

router.post('/quote-submission', quote.quoteSubmission); 
router.post('/signup', signup.signUp);
router.post('/signin', signin.signIn);
router.post('/contact', contactRouter.contactMessage);

router.get('/quote-list', quote.getQuotes); 
router.get('/contact-details', contactRouter.getContactDetails);
router.get('/signup-details', signup.getSignUpDetails);

module.exports = router; 