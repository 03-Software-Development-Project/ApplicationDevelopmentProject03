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
function splitName(fullName) {
  const names = fullName.split(' ');
  const firstName = names[0];
  const lastName = names.slice(1).join(' ');

  return {
    firstName: firstName,
    lastName: lastName,
  };
}

function transformData(data) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return data.map(item => {
    const {id, question, answers, correct_answers, tags, category, difficulty} =
      item;

    const transformedAnswers = transformAnswers(answers);
    const correctAnswerId = getCorrectAnswerId(correct_answers);

    return {
      id,
      question,
      answers: transformedAnswers,
      correct_answer: correctAnswerId,
      tags: transformTags(tags),
      category,
      difficulty,
    };
  });
}

function transformAnswers(answers) {
  return Object.entries(answers)
    .filter(([key, value]) => value !== null)
    .map(([key, value]) => ({
      id: key.split('_')[1].toUpperCase(),
      text: value,
    }));
}

function getCorrectAnswerId(correct_answers) {
  const transformedCorrectAnswer = Object.entries(correct_answers).find(
    ([key, value]) => value === 'true',
  );

  return transformedCorrectAnswer
    ? transformedCorrectAnswer[0].split('_')[1].toUpperCase()
    : null;
}

function transformTags(tags) {
  return tags.map(tag => tag.name);
}

// function transformData(data) {
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//   return data.map(item => {
//     const {id, question, answers, correct_answers, tags, category, difficulty} =
//       item;

//     const transformedAnswers = Object.entries(answers)
//       .filter(([key, value]) => value !== null)
//       .map(([key, value]) => ({
//         id: key.split('_')[1].toUpperCase(),
//         text: value,
//       }));

//     const transformedCorrectAnswer = Object.entries(correct_answers).find(
//       ([key, value]) => value === 'true',
//     );

//     const correctAnswerId = transformedCorrectAnswer
//       ? transformedCorrectAnswer[0].split('_')[1].toUpperCase()
//       : null;

//     return {
//       id,
//       question,
//       answers: transformedAnswers,
//       correct_answer: correctAnswerId,
//       tags: tags.map(tag => tag.name),
//       category,
//       difficulty,
//     };
//   });
// }
module.exports = {
  saveDataAsJSON,
  transformData,
  splitName,
};
