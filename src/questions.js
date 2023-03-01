const questions = [
  {
    text: "What is ReactJS?",
    options: [
      { id: 0, text: "Server-side framework", isCorrect: false },
      { id: 1, text: "User interface framework", isCorrect: true },
      { id: 2, text: "Both 1 and 2", isCorrect: false },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },

  {
    text: "React.js is written in which of the following language?",
    options: [
      { id: 0, text: "JavaScript", isCorrect: true },
      { id: 1, text: "Java", isCorrect: false },
      { id: 2, text: "C", isCorrect: false },
      { id: 3, text: "C++", isCorrect: false },
    ],
  },
  {
    text: "What is a state in React?",
    options: [
      { id: 0, text: "A permanent storage.", isCorrect: true },
      { id: 1, text: "Internal storage of the component.", isCorrect: false },
      { id: 2, text: "External storage of the component.", isCorrect: false },
      { id: 3, text: "None of the above.", isCorrect: false },
    ],
  },

  {
    text: "What is the return value of the useState hook?",
    options: [
      {
        id: 0,
        text: " Pair of current state and function updating it",
        isCorrect: false,
      },
      { id: 1, text: "Current State", isCorrect: true },
      { id: 2, text: "Function updating the current state", isCorrect: false },
      { id: 3, text: "UseState returns nothing", isCorrect: false },
    ],
  },
  {
    text: "How many elements can a valid react component return?",
    options: [
      { id: 0, text: "1", isCorrect: true },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "3", isCorrect: false },
      { id: 3, text: "4", isCorrect: false },
    ],
  },
];

export default questions;
