// JAVASCRIPT

let collectionGrid = document.getElementById("collectionGrid");

let jsonDatabase = [
  {
    "art" : "art/klint2.jpeg",
    "title": "Group IV, The Ten Largest, No. 7, Adulthood",
    "artist": "Hilma af Klint",
    "info": ["1907", "Tempera on paper", "Spiritual, meditative"]
  },
  {
    "art" : "art/kandinsky.jpeg",
    "title": "Yellow-Red-Blue",
    "artist": "Wassily Kandinsky",
    "info": ["1925", "Oil on canvas", "Geometric abstraction"]
  },
  {
    "art" : "art/kunz2.jpeg",
    "title": "Work No. 013",
    "artist": "Emma Kunz",
    "info": ["1938-1953", "Drawn on graph paper", "Healing, kaleidoscope-like"]
  },
  {
    "art" : "art/jean1.jpeg",
    "title": "Schrodinger's Kitten Rescue",
    "artist": "James Jean",
    "info": ["2018", "Acrylic on canvas", "Imaginative, contemporary"]
  },
  {
    "art" : "art/thiebaud.jpeg",
    "title": "Boston Cremes",
    "artist": "Wayne Thiebaud",
    "info": ["1962", "Oil on canvas", "Thick, vibrant impasto"]
  },
  {
    "art" : "art/miho6.jpeg",
    "title": "A Gift from the Ancient - Yoshino Cherry Tree",
    "artist": "Miho Hirano",
    "info": ["2017", "Oil on canvas", "Detailed, nature"]
  },
];

// create all elements in JSON database
for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]); // all items from database
}

function createElement(incomingJSON) {

  // item div + class
  let element = document.createElement("div"); // create div
  element.classList.add('collectionItem'); // add div class

  // art images
  let image = document.createElement("img"); // create img
  image.classList.add("topImage"); // add img class
  image.src = incomingJSON["art"]; // from database
  element.appendChild(image); // add to element

  // titles
  let title = document.createElement("h2"); // create h2
  title.classList.add("artTitle"); // add h2 class
  title.innerText = incomingJSON["title"]; // from database
  element.appendChild(title); // add to element

  // artists
  let artist = document.createElement("h3"); // create h3
  artist.classList.add("artist"); // add h3 class
  artist.innerText = incomingJSON["artist"]; // from database
  element.appendChild(artist); // add to element

  // facts/info list
  let info = document.createElement("ul"); // create ul
  info.classList.add("info"); // add class to ul
  element.appendChild(info); // add to element

  // list items
  for (var i = 0; i < incomingJSON["info"].length; i++) { // all items in array
    var infoString = incomingJSON["info"][i]; // create variable
    var infoItem = document.createElement("li"); // create li
    infoItem.innerText = infoString; // from database
    info.appendChild(infoItem); // add to info ul in element
  }

// adding all items to the grid in the page
  collectionGrid.appendChild(element);
}
