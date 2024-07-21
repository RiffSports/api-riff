const notificationsModel = require("../models/notificationsModel");

const getNotification = async (request, response) => {
  const { playerId } = request.params;

  const notification = await notificationsModel.getNotification(playerId);
  return response.status(200).json(notification);
};

const createNotification = async (request, response) => {
  const creatednotification = await notificationsModel.createNotification(
    request.body
  );
  return response.status(201).json(creatednotification);
};

const updateReadingNotification = async (request, response) => {
  const { messageId } = request.params;
  await notificationsModel.updateReadingNotification(messageId);
  return response.status(204).send();
}

module.exports = {
  getNotification,
  createNotification,
  updateReadingNotification
};
