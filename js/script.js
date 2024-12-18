function generateSubsets(arr) {
  let subsets = [];
  function findAllSubsets(index, subset) {
    console.log(index, subset)
    debugger;
    if (index == arr.lengh) {
      subsets.push(subset);
      return;
    }
    findAllSubsets(index + 1, [...subset, arr[index]]);
    findAllSubsets(index + 1, subset);
  }
  findAllSubsets(0, []);
  return subsets.map((sub) => `[${sub.join()}]`);
}
console.log(generateSubsets([1, 2, 3, 4, 5]).join("\n"));
