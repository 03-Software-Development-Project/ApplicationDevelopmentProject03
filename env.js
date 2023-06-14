const PORT = '3001';
const IP = '192.168.6.222';
const API_LOGIN = `http://${IP}:${PORT}/api/data`;
const QUESTION_LIMIT = 5;
const API_QUESTION_TOKEN = '6Ds4vq9V7cZES7I3YTxl9KapdwFZa04X47fvIX4s';
const POINTS = {
  easy: 3,
  medium: 4,
  hard: 5,
};
const DESIREDDIFFICULTY = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
};
module.exports = {
  API_LOGIN,
  PORT,
  IP,
  API_QUESTION_TOKEN,
  QUESTION_LIMIT,
  POINTS,
  DESIREDDIFFICULTY,
  // Add more exported variables here
};
