const sortArr = arr => arr.sort();

const test = sortArr([  
'Syrio',
'Tank',
'The Pounce That Was Promised',
'Thom',
'Tigger',
'Titus',
'Tolkien',
'Tommen',
'Troy',
'Tyrion',
'Tywin',
'Viserys',
'Vizzy T',
'Waldo', 'T-Bone', 'T-Dawg']);

for (let name of test) {
  console.log(`'${name}',`)
}