const habits = [
  { name: "Workout", done: true },
  { name: "Read", done: false },
];

const x = habits.filter((v) => v.done === true);

console.log(x);
