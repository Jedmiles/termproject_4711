let db = require('../util/database');
let today = new Date();
today = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

function createConversation(senderId, receiverId, subject, content){
    let sql = "Insert into CONVERSATIONS (USER_ID_1, USER_ID_2, DATE, SUBJECT) values ('" + senderId+ "','" + receiverId + "','" + today + "','" + subject + "')";
    db.execute(sql, function(err,result) {
        if (err) throw new Erro
        let conversationId = result.insertId;
        createMessage(senderId, conversationId, content);
    });
}

function createMessage(senderId, conversationId, content){
    let sql = "Insert into MESSAGES (CONVERSATION_ID, USER_ID, DATE_TIME, MSG_BODY) values ('" + conversationId+ "','" + senderId + "','" + today + "','" + content + "')";
    db.execute(sql);
}

module.exports = {
    createConversation:createConversation
}