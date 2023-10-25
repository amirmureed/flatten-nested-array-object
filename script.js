// Recursive Function to Flatten Nested Array

function flatArr(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  let newArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      let tempArr = flatarrandObj(item);
      newArr = [...newArr, ...tempArr];
    } else {
      newArr.push(item);
    }
  });
  return newArr;
}

// Recursive Function to Flatten Nested Object

function flatObj(Obj) {
  let newObj = {};
  for (const key in Obj) {
    if (typeof Obj[key] === "object") {
      let tempObj = flatarrandObj(Obj[key]);
      newObj = { ...newObj, ...tempObj };
    } else {
      newObj[key] = Obj[key];
    }
  }
  return newObj;
}
