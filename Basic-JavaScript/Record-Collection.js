// Setup
var recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === "") delete records[id][prop];
  else if (prop === "tracks") {
    records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
console.log(recordCollection); // artist should be the string ABBA
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
console.log(recordCollection); // tracks should have the string Take a Chance on Me as the last element.
updateRecords(recordCollection, 2548, "artist", "");
console.log(recordCollection); // artist should not be set
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
console.log(recordCollection); // tracks should have the string Addicted to Love as the last element.
updateRecords(recordCollection, 2468, "tracks", "Free");
console.log(recordCollection); // tracks should have the string 1999 as the first element.
updateRecords(recordCollection, 2548, "tracks", "");
console.log(recordCollection); // tracks should not be set
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
console.log(recordCollection); // albumTitle should be the string Riptide
