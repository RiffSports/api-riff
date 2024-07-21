const eventsModel = require('../models/eventsModel');

const getAll = async (request, response) => {
  const queryParams = request.query;
  const events = await eventsModel.getAll(queryParams);
  return response.status(200).json(events);
};

const getEvent = async (request, response) => {
  const { id } = request.params;

  const event = await eventsModel.getEvent(id);
  return response.status(200).json(event);
};

const createEvent = async (request, response) => {
  const createdevent = await eventsModel.createEvent(request.body);
  return response.status(201).json(createdevent);
};

const updateEvent = async (request, response) => {
  const { id } = request.params;

  await eventsModel.updateEvent(id, request.body);
  return response.status(204).json();
};

const deleteEvent = async (request, response) => {
  const { id } = request.params;

  await eventsModel.deleteEvent(id);
  return response.status(204).json();
};

const getEventPlayers = async (request, response) => {
  const { id } = request.params;

  const eventPlayers = await eventsModel.getEventPlayers(id);
  return response.status(200).json(eventPlayers);
};

const deleteEventPlayer = async (request, response) => {
  const { id, playerId } = request.params;
  
  await eventsModel.deleteEventPlayer(id, playerId);
  return response.status(204).json();
};

const updateEventPlayers = async (request, response) => {
  const { id, playerId } = request.params;

  await eventsModel.updateEventPlayers(id, playerId);
  return response.status(204).json();
};

module.exports = {
  getAll,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventPlayers,
  deleteEventPlayer,
  updateEventPlayers
};
