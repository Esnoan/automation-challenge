const length: number = 12;
const timestamp = +new Date();

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateUUID() {
  const ts = timestamp.toString();
  const parts = ts.split('').reverse();
  let id = '';

  for (let i = 0; i < length; i += 1) {
    const index = getRandomInt(0, parts.length - 1);
    id += parts[index];
  }

  return id;
}
