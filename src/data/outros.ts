import type { Outro } from "../data/types.ts";
import chooseItem from "../utils/chooseItem";

const outros: Outro[] = [
  {
    quote: "If you really want a challenge, just deal with yourself.",
    origin: "Tori Amos"
  },
  { 
    quote: "I'm just here so I don't get fined.", 
    origin: "Marshawn Lynch" 
  },
  {
    quote: "Time is an illusion. Lunchtime doubly so.",
    origin: "The Hitchhiker's Guide to the Galaxy",
  },
  {
    quote: "The answer to the great question...of Life, the Universe and Everything...is...forty-two.",
    origin: "The Hitchhiker's Guide to the Galaxy",
  },
  {
    quote: "If there's anything more important than my ego around, I want it caught and whapped now.",
    origin: "The Hitchhiker's Guide to the Galaxy",
  },
  {
    quote: "Ask not what your kitty can do for you — ask what you can do for your kitty.",
    origin: "John F. Kennedy",
  },
  {
    quote: "I used to think I was indecisive. Now I'm not so sure.",
    origin: "Unknown classic",
  },
  { 
    quote: "I purr, therefore I am.", 
    origin: "René Descartes" 
  },
  {
    quote: "I never make the same mistake twice. I make it like five or six times, you know, just to be sure.",
    origin: "Darynda Jones",
  },
  {
    quote: "I don't suffer from insanity. I enjoy every minute of it.",
    origin: "Edgar Allen Poe",
  },
  {
    quote: "Everyone has a right to be stupid, but some abuse that privilege.",
    origin: "Leon Trotsky",
  },
  { 
    quote: "If you can't be kind, at least be vague.", 
    origin: "Judith Martin" 
  },
  {
    quote: "If two wrongs don't make a right, try three.",
    origin: "Laurence J. Peter",
  },
  {
    quote: "Everybody talks about the weather, but nobody does anything about it.",
    origin: "Charles Dudley Warner",
  },
  {
    quote: "I love deadlines. I like the whooshing sound they make as they fly by.",
    origin: "Douglas Adams",
  },
  {
    quote: "Laugh and the world laughs with you, snore and you sleep alone.",
    origin: "Anthony Burgess",
  },
  {
    quote: "I have a new philosophy. I'm only going to dread one day at a time.",
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
    quote: "A cat is more intelligent than people believe, and can be taught any crime.",
    origin: "Mark Twain",
  },
  {
    quote: "If man could be crossed with the cat it would improve the man, but it would deteriorate the cat.",
    origin: "Mark Twain",
  },
  {
    quote: "Cats were put into the world to disprove the dogma that all things were created to serve man.",
    origin: "Paul Gray",
  },
  {
    quote: "'Tis better to remain silent and be thought a fool than to bark and remove all doubt.",
    origin: "Maurice Switzer",
  },
  {
    quote: "I don't believe in the concept of hell, but if I did I would think of it as filled with people who were cruel to cats.",
    origin: "Gary Larson"
  },
  {
    quote: "You can get away with a lot as long as it has a silly edge to it.",
    origin: "Gary Larson"
  },

  // Film
  {
    quote: "Looks like I picked the wrong week to quit catnip.",
    origin: "Airplane",
  },
  {
    quote: "I love the smell of catnip in the morning.",
    origin: "Apocalypse Now",
  },
  {
    quote: "That rug really tied the room together, did it not?",
    origin: "The Big Lebowsky",
  },
  { 
    quote: "Nobody puts Kitty in a corner.", 
    origin: "Dirty Dancing" 
  },
  {
    quote: "My mama always said life was like a box. If I fits, I sits.",
    origin: "Forrest Gump",
  },
  { 
    quote: "Welcome to Costco, I love you.", 
    origin: "Idiocracy" 
  },
  { 
    quote: "Brawndo's got what plants crave.", 
    origin: "Idiocracy" 
  },
  {
    quote: "This little maneuver is going to cost us eight cat years.",
    origin: "Interstellar",
  },
  { 
    quote: "You had me at \"pspspsps\".", 
    origin: "Jerry Maguire" 
  },
  {
    quote: "Who is your daddy, and what does he do?",
    origin: "Kindergarten Cop",
  },
  { 
    quote: "Stop trying to make fetch happen.", 
    origin: "Mean Girls" 
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
    quote: "Your mother was a hamster, and your father smelt of elderberries.",
    origin: "Monty Python and the Holy Grail",
  },
  {
    quote: "I asked for a mai tai, and they brought me a piña colada, and I said no salt, NO salt for the margarita, but it had salt on it, big grains of salt, floating in the glass...",
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
    quote: "I did nothing. I did absolutely nothing, and it was everything I thought it could be.",
    origin: "Office Space"
  },
  {
    quote: "Why does it say \"Paper Jam\" when there is no paper jam?",
    origin: "Office Space",
  }, 
  { 
    quote: "May the Force be with you.", 
    origin: "Star Wars" 
  },
  {
    quote: "These aren't the voids you're looking for.",
    origin: "Star Wars: Episode IV — A New Hope"
  },
  {
    quote: "I don't like litter. It's coarse and rough and irritating and it gets everywhere.",
    origin: "Star Wars: Attack of the Clones",
  },
  { 
    quote: "I feel the need, the need for zoomies.", 
    origin: "Top Gun" 
  },

  // TV
  { 
    quote: "Thank you, drive through.", 
    origin: "Beavis and Butthead"
  },  
  { 
    quote: "Calibrate your enthusiasm.", 
    origin: "Andor" 
  },
  {
    quote: "There's a whole galaxy out there waiting to disgust you.",
    origin: "Andor",
  },
  { 
    quote: "Revolution is not for the sane.", 
    origin: "Andor" 
  },
  {
    quote: "The very worst thing you can do right now is bore me.",
    origin: "Andor",
  },
  { 
    quote: "I have friends everywhere.", 
    origin: "Andor" 
  },
  { quote: "I burn my life for a treat I'll never see.", 
    origin: "Andor" 
  },
  {
    quote: "Authority is brittle. Oppression is the mask of fear. Remember that.",
    origin: "Andor",
  },
  {
    quote: "The Imperial need for control is so desperate because it is so unnatural. Tyranny requires constant effort.",
    origin: "Andor",
  },
  {
    quote: "The distance between what is said and what is known to be true has become an abyss.",
    origin: "Andor",
  },
  {
    quote: "Sometimes, rock bottom is your trampoline.",
    origin: "Beef"
  },
  {
    quote: "Did you ever notice how it's only people who have money who think money isn't important?",
    origin: "Beef"
  },
  {
    quote: "I am not helping you unless you use nice words!",
    origin: "Beef"
  },
  {
    quote: "A kitten with strength and mobility is just a serial killer.",
    origin: "Beef"
  },
  {
    quote: "I guess, when you think about it, the ground is the original chair.",
    origin: "Beef"
  },
  {
    quote: "You think this is something? You think this is bad? This? This chicanery? I've done worse.",
    origin: "Better Call Saul"
  },
  {
    quote: "They walked into my house. They disrespected my kitty cat. They called her \"biznatch\"! And they just walk? Huh?",
    origin: "Better Call Saul"
  },
  {
    quote: "For a long time now, I thought I was just a survivor, but I'm not. I'm the winner. That's who I am. The Cat Lord Victorious.",
    origin: "Doctor Who",
  },
  {
    quote: "Great felines are forged in fire. It is the privilege of lesser cats to light the flame.",
    origin: "Doctor Who",
  },
  { 
    quote: "Now bring me one of those chickens.", 
    origin: "Game of Thrones" 
  },  {
    quote: "The night is dark and full of greebles.",
    origin: "Game of Thrones",
  },
  {
    quote: "I wish you good fortune in the wars to come.",
    origin: "Game of Thrones",
  },
  {
    quote: "I'm not questioning your honor, I'm denying its existence.",
    origin: "Game of Thrones",
  },
  {
    quote: "Power resides where men believe it resides. It's a trick. A shadow on the wall. And a very smol bean can cast a very large shadow.",
    origin: "Game of Thrones",
  },  
  { 
    quote: "My watch has ended.", 
    origin: "Game of Thrones" 
  },
  {
    quote: "The gods have yet to make a cat who lacks the patience for absolute power.",
    origin: "House of the Dragon"
  },
  {
    quote: "You desire not to be free, but to make a window in the wall of your prison.",
    origin: "House of the Dragon"
  },
  {
    quote: "You cannot live your life in fear, or you will forsake the best parts of it.",
    origin: "House of the Dragon"
  },
  {
    quote: "I sell propane and propane accessories.",
    origin: "King of the Hill",
  },
  { 
    quote: "This is the way.", 
    origin: "The Mandalorian" 
  },
  { 
    quote: "Do the chickens have large talons?", 
    origin: "Napoleon Dynamite" 
  },
  { 
    quote: "I caught you a delicious bass.", 
    origin: "Napoleon Dynamite" 
  },
  { 
    quote: "You gonna eat your tots?", 
    origin: "Napoleon Dynamite" 
  },
    {
    quote: "Why waste time say lot meow when few meow do trick?",
    origin: "The Office",
  },
  {
    quote: "I meow a lot, so I've learned to tune myself out.",
    origin: "The Office"
  },
  {
    quote: "I wanted to eat a pig in a blanket, in a blanket.",
    origin: "The Office"
  },
  {
    quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    origin: "The Office"
  }, 
  {
    quote: "I'm your best friend. You're my very good friend.",
    origin: "Severance",
  },
    {
    quote: "Marshmallows are for team players. They don't just hand them out.",
    origin: "Severance",
  },
  { quote: "The work is mysterious and important.", 
    origin: "Severance" 
  },
  {
    quote: "Every time you find yourself here, it's because you chose to come back.",
    origin: "Severance"
  },
  {
    quote: "Please try to enjoy each cat equally, and not show preference for any over the others.",
    origin: "Severance"
  },
  {
    quote: "Let's get this new group photo before the kibble bloat sets in.",
    origin: "Severance"
  },
  {
    quote: "Madam, you do not call a cat a fool on the transom of their own home",
    origin: "Silicon Valley"
  },  
  {
    quote: "Resistance is futile. You will be assimilated.",
    origin: "Star Trek: The Next Generation",
  },  
  {
    quote: "Flair is what marks the difference between artistry and mere competence.",
    origin: "Star Trek: The Next Generation",
  },
  {
    quote: "The road from legitimate suspicion to rampant paranoia is very much shorter than we think.",
    origin: "Star Trek: The Next Generation",
  },
  {
    quote:
    "I have been told that patience is sometimes a more effective weapon than the murder mitten.",
    origin: "Star Trek: The Next Generation",
  },
  {
    quote: "It is possible to commit no mistakes and still lose. That is not a weakness. That is life.",
    origin: "Star Trek: The Next Generation",
  },
  {
    quote: "You come at the Lion King, you best not miss.",
    origin: "The Wire"
  },  

  // Lyrics
  {
    quote: "I'm a driver, I'm a winner. Things are gonna change, I can feel it.",
    origin: "Beck",
  },
  {
    quote: "You know where you are? You're in the jungle, baby. You're gonna die!",
    origin: "Guns N' Roses",
  },  
  { 
    quote: "Real G's move in silence like lasagna.", 
    origin: "Lil Wayne" 
  },
  {
    quote: "The best you can is good enough.",
    origin: "Radiohead"
  },
  {
    quote: "If we don't take action now. We'll settle for nothing later. We'll settle for nothing now. And we'll settle for nothing later.",
    origin: "Rage Against the Machine"
  },
  {
    quote: "It has to start somewhere. It has to start sometime. What better place than here? What better time than now?",
    origin: "Rage Against the Machine"
  },
  {
    quote: "Despite all my rage, I am still just a cat in a cage.",
    origin: "The Smashing Pumpkins"
  },

  // Random
  {
    quote: "Am I not the cutest thing you've seen all day?",
    origin: "Me",
  },
  {
    quote: "Why can't we live in a cat-eat-dog world?",
    origin: "Me",
  },
  { quote: "Am I being detained, or am I free to go?", 
    origin: "The Internet" 
  },
  {
    quote: "When someone says they don't like cats, that means they've never given cats a fair chance.",
    origin: "The Internet",
  },
  {
    quote: "In ancient times cats were worshipped as gods; we have not forgotten this.",
    origin: "The Internet",
  },
  { 
    quote: "Sometimes it really do be like that.", 
    origin: "The Internet" 
  },
  {
    quote: "I've been trying to reach you about your car's extended warranty.",
    origin: "The Internet",
  },  
  {
    quote: "Fluff around and find out.",
    origin: "The Internet"
  },
  { 
    quote: "These paws are rated E for everyone.", 
    origin: "The Internet" 
  },
  { 
    quote: "Wu-Tang is for the kittens.", 
    origin: "Ol' Dirty Bastard" 
  },
  { 
    quote: "Look how cute I am!", 
    origin: "Me" 
  },
  { 
    quote: "No lowballers, I know what I got.", 
    origin: "The Internet" 
  },
  { 
    quote: "This has gone on long enough.", 
    origin: "Me" 
  },
  {
    quote: "Cats are a lesson in consent, and therefore I cannot trust people who hate cats.",
    origin: "The Internet",
  },
  {
    quote: "It should be a crime to serve coleslaw in a container the size of a thimble.",
    origin: "Me",
  },
  {
    quote: "Don't cry because it's over. Smile because I booped you.",
    origin: "The Internet",
  },
  { 
    quote: "Thank you for coming to my TED talk.", 
    origin: "The Internet" 
  },
  {
    quote: "Do you have a moment to talk about Bastet, our Lord and Savior?",
    origin: "The Internet",
  },
  { 
    quote: "I can has cheezburger?", 
    origin: "The Internet" 
  },
  { 
    quote: "This has gone on for far too long.", 
    origin: "Me" 
  },
  { 
    quote: "Hey, are you gonna eat that?", 
    origin: "Me" 
  },
  { 
    quote: "Who's a good baby? It me lol.", 
    origin: "Me" 
  },
  { 
    quote: "Ain't nobody got time for that.", 
    origin: "The Internet" 
  },
  { 
    quote: 'Anyway, here\'s "Wonderwall".', 
    origin: "The Internet" 
  },
  { 
    quote: "I can have a little salami, as a treat.", 
    origin: "The Internet" 
  },
  {
    quote: "Just waiting for my turn with the brain cell.",
    origin: "The Internet",
  },
  { 
    quote: "All my homies hate Criston Cole.", 
    origin: "The Internet" 
  },
  {
    quote: "If not for sits, why is it made of warm?", 
    origin: "The Internet" 
  },
  {
    quote: "The horrors persist, but so do I.", 
    origin: "The Internet" 
  },
];

export default function getOutro(): Outro {
  return chooseItem(outros);
}
