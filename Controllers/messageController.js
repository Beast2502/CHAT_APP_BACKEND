const messageeModel = require("../Models/messageModel");

// creatingMessage
// gettingMessage

const createMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  console.log(text)
  const message = new messageeModel({
    chatId,
    senderId,
    text,
  });

  try {
    const response = await message.save();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getMessages = async(req,res)=>{
    const {chatId} = req.params;


    try{
        const messages = await messageeModel.find({chatId});
        res.status(200).json(messages);


    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}



module.exports = {
    createMessage,
    getMessages
}

