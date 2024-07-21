const chatsModel = require('../models/chatsModel');

const getAll = async (request, response) => {
  const queryParams = request.query;
  const chats = await chatsModel.getAll(queryParams);
  return response.status(200).json(chats);
};

const getChat = async (request, response) => {
    const { id } = request.params;
  
    const chat = await chatsModel.getChat(id);
    return response.status(200).json(chat);
  };

  const createChatMessage = async (request, response) => {
    const createdchatMessage = await chatsModel.createChatMessage(request.body);
    return response.status(201).json(createdchatMessage);
  };

module.exports = {
    getAll,
    getChat,
    createChatMessage
};