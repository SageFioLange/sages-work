export default function shuffle(array: any[]) {
  var l = array.length;

  while (l) {
    const i = Math.floor(Math.random() * l--);

    const t = array[l];
    array[l] = array[i];
    array[i] = t;
  }

  return array;
}
