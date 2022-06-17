// By representing words as a graph:

// Time complexity: O(mn�)
// Space complexity: O(mn�)

function difference(word1, word2){
  let counter = 0;
  for(int i = 0; i < word1.length; i++){
    if(word1[i] != word2[i]) counter++;
  }
  return counter;
}

function transformationSequenceLength(beginWord, endWord, wordList){
  if(wordList.length == 0 || !wordList.includes(endWord)) return 0;
  let adjList = {};
  for(let word of wordList) adjList[word] = new Set([]);
  for(let i = 0; i < wordList.length; i++){
    for(let j = i+1; j < wordList.length; j++){
      if(difference(wordList[i], wordList[j]) == 1){
        adjList[wordList[i]].add(wordList[j]);
        adjList[wordList[j]].add(wordList[i]);
      }
    }
  }
  let visited = new Set([]);
  let queue = [];
  let i = 0;
  for(let word of wordList){
    if(difference(beginWord, word) == 1){
      queue.push([word, 1]);
      visited.add(word);
    }
  }
  while(i < queue.length){
    let word = queue[i][0];
    let level = queue[i][1];
    i++;
    if(word == endWord){
      return level+1;
    }else{
      for(let transformation of adjList[word]){
        if(!visited.has(transformation)){
          queue.push([transformation, level+1]);
          visited.add(transformation);
        }
      }
    }
  }
  return 0;
}


