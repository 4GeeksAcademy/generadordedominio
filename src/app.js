let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let A = 0; A < pronoun.length; A++) {
  for (let B = 0; B < adj.length; B++) {
    for (let C = 0; C < noun.length; C++) {
      console.log(pronoun[A] + adj[B] + noun[C] + ".com");
    }
  }
}
