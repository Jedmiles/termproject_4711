let messageModel = require('../models/messageModels');

exports.showMessagePage = (req,res,next)=>{
    let receiverId = req.body.userId;
    res.render('messagePage',{receiverId:receiverId});
};

exports.createConversation = (req,res,next)=>{
    // let receiverId = req.body.userId;
    let receiverId = '2';
    let subject = req.body.subject;
    let content = req.body.content;
    // let senderId = req.session.userId;
    let senderId = '1';
    messageModel.createConversation(senderId, receiverId, subject, content);
    res.redirect('messagePage');
};
