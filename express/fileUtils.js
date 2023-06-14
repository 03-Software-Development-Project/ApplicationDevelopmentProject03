const fs = require('fs');

/**
 * This function saves data as a JSON file with a specified filename.
 * @param data - The data parameter is the data that needs to be saved as a JSON file. It can be any
 * JavaScript object or array that can be converted to JSON format.
 * @param filename - The name of the file where the data will be saved as a JSON string.
 */
async function saveDataAsJSON(data, filename) {
  const jsonData = JSON.stringify(data);
  try {
    await fs.promises.writeFile(filename, jsonData, 'utf8');
    console.log(`Data saved as ${filename}`);
  } catch (error) {
    console.error(`Error saving data as ${filename}:`, error);
  }
}

/**
 * The function transforms data by mapping through each item and returning a new object with modified
 * properties.
 * @param data - The `data` parameter is an array of objects, where each object represents a quiz
 * question and contains properties such as `id`, `question`, `answers`, `correct_answers`, `tags`,
 * `category`, and `difficulty`.
 * @returns The function `transformData` is returning a new array of objects with transformed data.
 * Each object in the new array has the following properties: `id`, `question`, `answers`,
 * `correct_answer`, `tags`, `category`, and `difficulty`. The `answers` property is an array of
 * transformed answer objects, and the `correct_answer` property is the ID of the correct answer. The
 */

function transformData(data) {
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
/**
 * The function transforms an object of answers into an array of objects with specific properties.
 * @param answers - The `answers` parameter is an object containing key-value pairs where the key is a
 * string and the value can be null or a string.
 * @returns The `transformAnswers` function is returning an array of objects with `id` and `text`
 * properties. The `id` property is derived from the key of each entry in the `answers` object by
 * splitting it at the underscore character and taking the second part, which is then converted to
 * uppercase. The `text` property is simply the value of each entry in the `answers` object.
 */

function transformAnswers(answers) {
  return Object.entries(answers)
    .filter(([key, value]) => value !== null)
    .map(([key, value]) => ({
      id: key.split('_')[1].toUpperCase(),
      text: value,
    }));
}
/**
 * This function returns the ID of the correct answer from a set of answers.
 * @param correct_answers - The `correct_answers` parameter is an object that contains keys and values
 * representing the correct answers to a quiz or test. The keys are strings that identify the
 * questions, and the values are strings that indicate whether the answer is true or false.
 * @returns The function `getCorrectAnswerId` returns the uppercase letter of the correct answer from
 * the `correct_answers` object. If there is no correct answer, it returns `null`.
 */

function getCorrectAnswerId(correct_answers) {
  const transformedCorrectAnswer = Object.entries(correct_answers).find(
    ([key, value]) => value === 'true',
  );

  return transformedCorrectAnswer
    ? transformedCorrectAnswer[0].split('_')[1].toUpperCase()
    : null;
}

/**
 * The function transforms an array of objects containing a "name" property into an array of strings
 * containing only the "name" values.
 * @param tags - An array of objects representing tags, where each object has a "name" property.
 * @returns The function `transformTags` is returning an array of tag names extracted from an array of
 * tag objects.
 */
function transformTags(tags) {
  return tags.map(tag => tag.name);
}

module.exports = {
  saveDataAsJSON,
  transformData,
};
