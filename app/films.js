export const titles = [
  { name: 'Gone With The Wind', status: 'pending' },
  { name: 'The Theory of Everything', status: 'submitted' },
  { name: 'Interstellar', status: 'fail' },
  { name: 'Fight Club', status: 'pass' },
];

export const films = (films) => {
  return films.forEach(({ name, status }, i) => {
    console.log(`${i + 1}: ${name} - ${status.toUpperCase()}`);
  });
};
