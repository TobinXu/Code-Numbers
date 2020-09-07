let temp = [];
  let flag = true;
  if (arr.length === 1) return false;
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '(' :
      case '[' :
      case '{' :
        temp.push(arr[i]); flag = fasle;
        break;
      case ')' :
      case ']' :
      case '}' :
        topEle = temp.pop();
        if (topEle === '{' && arr[i] === '}' || topEle === '(' && arr[i] === ')' || topEle === '[' && arr[i] === ']') {
          flag = true;
          continue;
        } else {
          flag = false;
        }
    }
  }
  return flag;