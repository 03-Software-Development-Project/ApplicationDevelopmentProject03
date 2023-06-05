const fs = require('fs');

async function saveDataAsJSON(data, filename) {
  const jsonData = JSON.stringify(data);
  try {
    await fs.promises.writeFile(filename, jsonData, 'utf8');
    console.log(`Data saved as ${filename}`);
  } catch (error) {
    console.error(`Error saving data as ${filename}:`, error);
  }
}

function transformData(data) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Mapping of letters

  return data.map(item => {
    const {id, question, answers, correct_answers, tags, category, difficulty} =
      item;
    const transformedAnswers = Object.entries(answers)
      .filter(([key, value]) => key.startsWith('answer_') && value !== null)
      .map(([key, value]) => ({
        id: alphabet[key.split('_')[1].charCodeAt(0) - 97], // Convert "answer_a" to "A"
        text: value,
      }));

    const transformedCorrectAnswer = Object.entries(correct_answers).find(
      ([key, value]) => key.startsWith('answer_') && value === 'true',
    );

    return {
      id,
      question,
      answers: transformedAnswers,
      correct_answer: transformedCorrectAnswer
        ? transformedCorrectAnswer[0]
        : null,
      tags: tags.map(tag => tag.name),
      category,
      difficulty,
    };
  });
}

module.exports = {
  saveDataAsJSON,
  transformData,
};
