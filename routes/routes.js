const express = require('express');
const router = express.Router();
const authorizationController = require('../controllers/authorizationController');
const messageController = require('../controllers/messageController');

/** Landing Page Routes **/
router.get('/', authorizationController.loginPage);
// router.post('/signUp', authorizationController.signUp);
// router.post('/login', authorizationController.login);
// router.get('/registerPage', authorizationController.registerPage);
// router.post('/register', authorizationController.register);

// /**Home Page routes **/
// router.get('/homePage', homeController.homePage);
// router.get('/homePage/:id', homeController.homePageForUser);
// router.post('/logout', logout);
// router.get('/search', searchController.searchWithString);
// router.post('/searchByTopic', searchController.searchWithTopic);

// /**Profile **/
// router.get('/profile/:id', profileController.serveProfile);
// router.get('/profile/:id/edit', profileController.editProfile);
// router.post('/edit', homeController.sendEdit);
// router.post('/profile/:id', profileController.increaseAndServeProfile);

// /**Post and Discussion Routes **/
// router.get('/getPostsForDiscussion', disccussionController.getPostsForDiscussion);
// router.post('/createDiscussion', disccussionController.createDiscussion);
// router.post('/createPost', disccussionController.createPost);
// router.get('/discussionAndPostView', disccussionController.reloadDiscussions);

// /** Live messaging  **/
// router.get('/messagePage', messageController.messagePage);
// router.post('/conversation/start', messageController.startConversation);
// router.get('/conversationPage', redirectLogin, messageController.conversationPage);
// router.get('/messages/get', redirectLogin, messageController.getMessages);
// router.post('/message/send', messageController.sendMessage);
router.get('/messagePage', messageController.showMessagePage);
router.post('/createConversation', messageController.createConversation);


module.exports = router;