const sort = require("./inserstionSort");

it('inserstionSort', () => {
    let array = [8, 4, 23, 42, 16, 15];
    sort(array)
    expect(array).toStrictEqual([ 4, 8, 15, 16, 23, 42 ]);
   
});
it("Few uniques", () => {
  let array = [5, 12, 7, 5, 5, 7];
  sort(array);
  expect(array).toStrictEqual([5, 5, 5, 7, 7, 12]);
});
it("Nearly-sorted", () => {
  let array = [2, 3, 5, 7, 13, 11];
  sort(array);
  expect(array).toStrictEqual([2, 3, 5, 7, 11, 13]);
});
it("Reverse-sorted", () => {
  let array = [20, 18, 12, 8, 5, -2];
  sort(array);
  expect(array).toStrictEqual([-2, 5, 8, 12, 18, 20]);
});
