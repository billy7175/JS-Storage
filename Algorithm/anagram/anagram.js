function validAnagram(first, second) {
  // param.length를 비교
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    // 인덱스의 string이 이미 존재하면 1추가 없으면 1값 대입
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    console.log(lookup)
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    // 두 번쨰 인자값의 string을 lookup의 KEY값으로 넣어 존재하는지 확인
    if (!lookup[letter]) {
      console.log('lookup = ', lookup)
      return false;
    } else {
      console.log('lookup = ', lookup)
      lookup[letter] -= 1;

    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram('hello', 'eollh'))
// console.log(validAnagram('anagrams', 'nagaramm'))