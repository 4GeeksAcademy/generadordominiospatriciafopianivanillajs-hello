let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io" ];
for (let index = 0; index < pronoun.length; index++) {
    for (let g = 0; g < adj.length; g++) {
        for (let j = 0; j < noun.length; j++) {
            for (let e= 0; e < extensions.length; e++)
            console.log(pronoun[index]+adj[g]+noun[j]+extensions[e]);
            
        }
    }
    
}