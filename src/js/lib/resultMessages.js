const confident = [
  'This definitely seems like something #P0# would say.',
  'I\'m pretty sure these is #P0#\'s words',
  'This has to be #P0#, I\'m sure of it!',
];

const unsure = [
  'Hmmm... This is a hard one. Maybe it\'s, #P0#?',
  'Umm... this could be #P0#, but I\'m not sure.',
];

const unsure2 = [
  'This is a tricky one, it might be either #P0# or #P1#',
  'Hmmmm... I\'m not sure, it could be either #P0# or #P1#',
];


const indifferent = [
  'I think it\'s #P0#.',
  'I think it might be #P0#.',
  'This sounds like it could be #P0#.',
  'This sounds like something #P0# might say.',
];

const indifferent2 = [
  'I think its either #P0# or #P1#.',
  'This must be either #P0# or #P1#.',
];


export const msgIndex = {
  confident,
  unsure,
  unsure2,
  indifferent,
  indifferent2,
};

export function selectRandom(type) {
  const typeArray = msgIndex[type];
  // msgIndex[type] ?
  if (typeArray) {
    return typeArray[Math.floor(Math.random() * typeArray.length)];
  }
  return 'Hmm... Something\'s not right, can you try again?';
}

