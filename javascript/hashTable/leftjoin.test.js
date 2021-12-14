const Hashtable = require("./hashTable");
const leftJoin = require(".//hashmap-left-join");
test(" a simplified LEFT JOIN for 2 Hashmaps.  ", () => {
  expect(
    leftJoin(
      {
        fond: "enamored",
        wrath: "anger",
        diligent: "employed",
        outfit: "garb",
        guide: "usher",
      },
      {
        fond: "averse",
        wrath: "delight",
        diligent: "idle",
        guide: "follow",
        flow: "jam",
      }
    )
  ).toStrictEqual({
    diligent: ["employed", "idle"],
    flow: [null, "jam"],
    fond: ["enamored", "averse"],
    guide: ["usher", "follow"],
    outfit: ["garb"],
    wrath: ["anger", "delight"],
  });
});
