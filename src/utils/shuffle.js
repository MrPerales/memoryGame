export default function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    // changed positions
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

// shuffle([1, 2, 3, 4, 5]);
