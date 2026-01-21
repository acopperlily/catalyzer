type Outro = {
  quote: string;
  origin: string;
};

const outros: Outro[] = [
  {
    quote: "Am I not the cutest thing you've seen all day?",
    origin: "The Internet",
  },
  {
    quote: "Why can't we live in a cat-eat-dog world?",
    origin: "The Internet",
  },
  { quote: "Am I being detained, or am I free to go?", origin: "The Internet" },
  {
    quote:
      "When someone says they don't like cats, that means they've never given cats a fair chance.",
    origin: "The Internet",
  },
  { quote: "Sometimes it really do be like that.", origin: "The Internet" },
  {
    quote: "I've been trying to reach you about your car's extended warranty.",
    origin: "The Internet",
  },
  {
    quote: "Resistance is futile. You will be assimilated.",
    origin: "Star Trek: The Next Generation",
  },
  { quote: "Now bring me one of those chickens.", origin: "Game of Thrones" },
  { quote: "Thank you, drive through.", origin: "Beavis and Butthead" },
  {
    quote: 'Why does it say "Paper Jam" when there is no paper jam?',
    origin: "Office Space",
  },
  {
    quote: "Who is your daddy, and what does he do?",
    origin: "Kindergarten Cop",
  },
  {
    quote: "I fart in your general direction.",
    origin: "Monty Python and the Holy Grail",
  },
  {
    quote: "Are you suggesting coconuts migrate?",
    origin: "Monty Python and the Holy Grail",
  },
  {
    quote:
      "I don't like litter. It's coarse and rough and irritating and it gets everywhere.",
    origin: "Star Wars: Attack of the Clones",
  },
  { quote: "Look how cute I am!", origin: "The Internet" },
  { quote: "No lowballers, I know what I got.", origin: "The Internet" },
  { quote: "This has gone on long enough.", origin: "The Internet" },
  {
    quote:
      "I'm a driver, I'm a winner. Things are gonna change, I can feel it.",
    origin: "Beck",
  },
  {
    quote:
      "Cats are a lesson in consent, and therefore I cannot trust people who hate cats.",
    origin: "The Internet",
  },
  { quote: "Do the chickens have large talons?", origin: "Napoleon Dynamite" },
  { quote: "I caught you a delicious bass.", origin: "Napoleon Dynamite" },
  { quote: "You gonna eat your tots?", origin: "Napoleon Dynamite" },
  { quote: "This is the way.", origin: "The Mandalorian" },
  {
    quote:
      "It should be a crime to serve coleslaw in a container the size of a thimble.",
    origin: "The Internet",
  },
  {
    quote: "Don't cry because it's over. Smile because I booped you.",
    origin: "The Internet",
  },
  {
    quote:
      "I asked for a mai tai, and they brought me a piña colada, and I said no salt, NO salt for the margarita, but it had salt on it, big grains of salt, floating in the glass...",
    origin: "Office Space",
  },
  {
    quote: "Excuse me, I believe you have my stapler.",
    origin: "Office Space",
  },
  {
    quote: "The thing is, it's not that I'm lazy, it's that I just don't care.",
    origin: "Office Space",
  },
  {
    quote: "I sell propane and propane accessories.",
    origin: "King of the Hill",
  },
  { quote: "Welcome to Costco, I love you.", origin: "Idiocracy" },
  { quote: "Thank you for coming to my TED talk.", origin: "The Internet" },
  {
    quote: "Do you have a moment to talk about Bastet, our Lord and Savior?",
    origin: "The Internet",
  },
  { quote: "I can has cheezburger?", origin: "The Internet" },
  { quote: "This has gone on for far too long.", origin: "The Internet" },
  {
    quote:
      "You know where you are? You're in the jungle, baby. You're gonna die!",
    origin: "Axl Rose",
  },
  {
    quote: "Your mother was a hamster, and your father smelt of elderberries.",
    origin: "Monty Python and the Holy Grail",
  },
  {
    quote: "Why waste time say lot meow when few meow do trick?",
    origin: "The Office",
  },
  { quote: "Hey, are you gonna eat that?", origin: "The Internet" },
  { quote: "Who's a good baby? It me lol.", origin: "The Internet" },
  { quote: "Real G's move in silence like lasagna.", origin: "Lil Wayne" },
  { quote: "Ain't nobody got time for that.", origin: "The Internet" },
  { quote: 'Anyway, here\'s "Wonderwall".', origin: "The Internet" },
  { quote: "Brawndo's got what plants crave.", origin: "Idiocracy" },
  {
    quote:
      "Power resides where men believe it resides. It's a trick. A shadow on the wall. And a very smol bean can cast a very large shadow.",
    origin: "Game of Thrones",
  },
  { quote: "I'm just here so I don't get fined.", origin: "Marshawn Lynch" },
  {
    quote: "Just waiting for my turn with the brain cell.",
    origin: "The Internet",
  },
  {
    quote: "My mama always said life was like a box. If I fits, I sits.",
    origin: "Forrest Gump",
  },
  { quote: "All my homies hate Criston Cole.", origin: "The Internet" },
  {
    quote:
      "It is possible to commit no mistakes and still lose. That is not a weakness. That is life.",
    origin: "Star Trek: The Next Generation",
  },
  { quote: "Stop trying to make fetch happen.", origin: "Mean Girls" },
  { quote: "May the Force be with you.", origin: "Star Wars" },
  {
    quote: "Looks like I picked the wrong week to quit catnip.",
    origin: "Airplane",
  },
  {
    quote: "That rug really tied the room together, did it not?",
    origin: "The Big Lebowsky",
  },
  {
    quote:
      "For a long time now, I thought I was just a survivor, but I'm not. I'm the winner. That's who I am. The Cat Lord Victorious.",
    origin: "Doctor Who",
  },
  {
    quote:
      "Great felines are forged in fire. It is the privilege of lesser cats to light the flame.",
    origin: "Doctor Who",
  },
  {
    quote:
      "In ancient times cats were worshipped as gods; we have not forgotten this.",
    origin: "The Internet",
  },
  {
    quote: "Time is an illusion. Lunchtime doubly so.",
    origin: "The Hitchhiker's Guide to the Galaxy",
  },
  {
    quote:
      "The answer to the great question...of Life, the Universe and Everything...is...forty-two.",
    origin: "The Hitchhiker's Guide to the Galaxy",
  },
  {
    quote:
      "If there's anything more important than my ego around, I want it caught and whapped now.",
    origin: "The Hitchhiker's Guide to the Galaxy",
  },
  {
    quote:
      "Flair is what marks the difference between artistry and mere competence.",
    origin: "Star Trek: The Next Generation",
  },
  {
    quote:
      "The road from legitimate suspicion to rampant paranoia is very much shorter than we think.",
    origin: "Star Trek: The Next Generation",
  },
  {
    quote:
      "I have been told that patience is sometimes a more effective weapon than the murder mitten.",
    origin: "Star Trek: The Next Generation",
  },
  { quote: "My watch has ended.", origin: "Game of Thrones" },
  { quote: "If not for sits, why is it made of warm?", origin: "The Internet" },
  { quote: "The horrors persist, but so do I.", origin: "The Internet" },
  {
    quote:
      "Ask not what your kitty can do for you — ask what you can do for your kitty.",
    origin: "John F. Kennedy",
  },
  { quote: 'You had me at "pspspsps".', origin: "Jerry Maguire" },
  {
    quote: "I love the smell of catnip in the morning.",
    origin: "Apocalypse Now",
  },
  { quote: "Nobody puts Kitty in a corner.", origin: "Dirty Dancing" },
  { quote: "I purr, therefore I am.", origin: "René Descartes" },
  { quote: "I feel the need, the need for zoomies.", origin: "Top Gun" },
  { quote: "I can have a little salami, as a treat.", origin: "The Internet" },
  {
    quote:
      "I never make the same mistake twice. I make it like five or six times, you know, just to be sure.",
    origin: "Darynda Jones",
  },
  {
    quote: "I don't suffer from insanity. I enjoy every minute of it.",
    origin: "Edgar Allen Poe",
  },
  {
    quote: "I used to think I was indecisive. Now I'm not so sure.",
    origin: "The Internet",
  },
  {
    quote: "Everyone has a right to be stupid, but some abuse that privilege.",
    origin: "Leon Trotsky",
  },
  { quote: "If you can't be kind, at least be vague.", origin: "Judith Martin" },
  {
    quote: "If two wrongs don't make a right, try three.",
    origin: "Laurence J. Peter",
  },
  {
    quote:
      "Everybody talks about the weather, but nobody does anything about it.",
    origin: "Charles Dudley Warner",
  },
  {
    quote:
      "I love deadlines. I like the whooshing sound they make as they fly by.",
    origin: "Douglas Adams",
  },
  {
    quote: "Laugh and the world laughs with you, snore and you sleep alone.",
    origin: "Anthony Burgess",
  },
  {
    quote:
      "I have a new philosophy. I'm only going to dread one day at a time.",
    origin: "Charlie Brown",
  },
  {
    quote: "Housework can't kill you, but why take a chance?",
    origin: "Phyllis Diller",
  },
  {
    quote: "When we ask for advice, we are usually looking for an accomplice.",
    origin: "Saul Bellow",
  },
  {
    quote:
      "A cat is more intelligent than people believe, and can be taught any crime.",
    origin: "Mark Twain",
  },
  {
    quote:
      "If man could be crossed with the cat it would improve the man, but it would deteriorate the cat.",
    origin: "Mark Twain",
  },
  {
    quote:
      "Cats were put into the world to disprove the dogma that all things were created to serve man.",
    origin: "Paul Gray",
  },
  {
    quote: "Marshmallows are for team players. They don't just hand them out.",
    origin: "Severance",
  },
  { quote: "The work is mysterious and important.", origin: "Severance" },
  {
    quote: "The night is dark and full of greebles.",
    origin: "Game of Thrones",
  },
  {
    quote:
      "'Tis better to remain silent and be thought a fool than to bark and remove all doubt.",
    origin: "Maurice Switzer",
  },
  {
    quote: "I wish you good fortune in the wars to come.",
    origin: "Game of Thrones",
  },
  {
    quote: "I'm not questioning your honor, I'm denying its existence.",
    origin: "Game of Thrones",
  },
  { quote: "Calibrate your enthusiasm.", origin: "Andor" },
  {
    quote: "There's a whole galaxy out there waiting to disgust you.",
    origin: "Andor",
  },
  { quote: "Revolution is not for the sane.", origin: "Andor" },
  {
    quote: "The very worst thing you can do right now is bore me.",
    origin: "Andor",
  },
  { quote: "I have friends everywhere.", origin: "Andor" },
  { quote: "I burn my life for a treat I'll never see.", origin: "Andor" },
  {
    quote:
      "Authority is brittle. Oppression is the mask of fear. Remember that.",
    origin: "Andor",
  },
  {
    quote:
      "The Imperial need for control is so desperate because it is so unnatural. Tyranny requires constant effort.",
    origin: "Andor",
  },
  {
    quote:
      "The distance between what is said and what is known to be true has become an abyss.",
    origin: "Andor",
  },
  {
    quote: "I'm your best friend. You're my very good friend.",
    origin: "Severance",
  },
  { quote: "These paws are rated E for everyone.", origin: "The Internet" },
  { quote: "Wu-Tang is for the kittens.", origin: "Ol' Dirty Bastard" },
  {
    quote: "This little maneuver is going to cost us eight cat years.",
    origin: "Interstellar",
  },
];

export default outros;
