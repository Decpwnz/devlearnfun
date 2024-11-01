// All of the animals are having a feast! Each animal is bringing one dish.
// There is just one rule: the dish must start and end with the same letters as the animal's name.
// For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and
// returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings,
// and that each has at least two letters. beast and dish may contain hyphens and spaces,
// but these will not appear at the beginning or end of the string. They will not contain numerals.

// function feast(beast, dish) {
//   if (beast.length < 2 || dish.length < 2)
//     return 'String has to be longer than 2 letters';
//   if (typeof beast === 'number' || typeof dish === 'number')
//     return 'Cannot be number';

//   const arr1 = beast.toLowerCase().split('');
//   const arr2 = dish.toLowerCase().split('');

//   return arr1[arr1.length - 1] === arr2[arr2.length - 1] && arr1[0] === arr2[0];
// }

// console.log(feast('1', 'Brooovat abibosinatt'));

function feast(beast, dish) {
  console.log(beast[0]);

  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

console.log(feast('hihi', 'helloi'));