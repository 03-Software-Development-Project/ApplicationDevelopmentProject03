const PORT = '3001';
const IP = '192.168.6.222';
const API_LOGIN = `http://${IP}:${PORT}/api/data`;
const QUESTION_LIMIT = 10;
const API_QUESTION_TOKEN = '6Ds4vq9V7cZES7I3YTxl9KapdwFZa04X47fvIX4s';

const DESIRED_DIFFICULTY = {
  easy: {
    difficulty: 'easy',
    point: 3,
  },
  medium: {
    difficulty: 'medium',
    point: 4,
  },
  hard: {
    difficulty: 'hard',
    point: 5,
  },
};
const SELECTED_QUESTION_POINTS = DESIRED_DIFFICULTY.easy;
const PASS_THRESHOLD = 7;
module.exports = {
  API_LOGIN,
  PORT,
  IP,
  API_QUESTION_TOKEN,
  QUESTION_LIMIT,
  DESIRED_DIFFICULTY,
  PASS_THRESHOLD,
  SELECTED_QUESTION_POINTS,
  // Add more exported variables here
};
