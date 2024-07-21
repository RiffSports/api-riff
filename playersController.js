const playersModel = require('../models/playersModel');

const getAll = async (request, response) => {
  const queryParams = request.query;
  const players = await playersModel.getAll(queryParams);
  return response.status(200).json(players);
};

const getPlayer = async (request, response) => {
  const { id } = request.params;

  const player = await playersModel.getPlayer(id);
  return response.status(200).json(player);
};

const createPlayer = async (request, response) => {
  const createdplayer = await playersModel.createPlayer(request.body);
  return response.status(201).json(createdplayer);
};

const deletePlayer = async (request, response) => {
  const { id } = request.params;

  await playersModel.deletePlayer(id);
  return response.status(204).json();
};

const updatePlayer = async (request, response) => {
  const { id } = request.params;
  
  await playersModel.updatePlayer(id, request.body);
  return response.status(204).json();
};

const getPlayerEvents = async (request, response) => {
  const { id } = request.params;

  const playerEvents = await playersModel.getPlayerEvents(id);
  return response.status(200).json(playerEvents);
};

const getFavSports = async (request, response) => {
  const { id } = request.params;

  const favSports = await playersModel.getFavSports(id);
  return response.status(200).json(favSports);
};

const updatePlayerFavSports = async (request, response) => {
  const { id } = request.params;

  await playersModel.updatePlayerFavSports(id, request.body);
  return response.status(204).json();
};

const deletePlayerFavSports = async (request, response) => {
  const { id, sportCatId } = request.params;

  await playersModel.deletePlayerFavSports(id, sportCatId);
  return response.status(204).json();
};

const createFriendRequest = async (request, response) => {
  await playersModel.createFriendRequest(request.body);
  return response.status(204).json();
};

const updateFriendRequest = async (request, response) => {
  await playersModel.updateFriendRequest(request.body);
  return response.status(204).json();
};

const getFriendRequests = async (request, response) => {
  const queryParams = request.query;
  const friendRequests = await playersModel.getFriendRequests(queryParams);
  return response.status(200).json(friendRequests);
};

const getPlayerFriends = async (request, response) => {
  const { id } = request.params;

  const player = await playersModel.getPlayerFriends(id);
  return response.status(200).json(player);
};

const deletePlayerFriend = async (request, response) => {
  const { id, friendId } = request.params;
  
  await playersModel.deletePlayerFriend(id, friendId);
  return response.status(204).json();
};

const playerLogin = async (request, response) => {
  const result = await playersModel.playerLogin(request.body);
  console.log(result);
  if (result.message === "Usuário autenticado") {
    return response.status(200).json({ message: result.message });
  } else {
    return response.status(404).json({ message: result.message });
  }
}

module.exports = {
  getAll,
  createPlayer,
  deletePlayer,
  updatePlayer,
  getPlayer,
  getPlayerEvents,
  getFavSports,
  updatePlayerFavSports,
  deletePlayerFavSports,
  createFriendRequest,
  updateFriendRequest,
  getFriendRequests,
  getPlayerFriends,
  deletePlayerFriend,
  playerLogin
};
