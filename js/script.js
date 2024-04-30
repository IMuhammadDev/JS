"use strict";
const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

let i = 0;
while (i < 2) {
  const a = prompt("Oxirgi ko'rgan serialingizni kiriting", "");
  const b = prompt("Necha baxo berasiz", "");
  if (a != null && b != null && a != "" && b != "") {
    seriesDB.series[a] = b;
    console.log("done");
    i++;
  } else {
    console.log(error);
    i--;
  }
}

if (seriesDB.count < 5) {
  console.log("siz kam serial ko'ribsiz");
} else if (seriesDB.count > 5 && seriesDB.count < 10) {
  console.log("siz classik tomoshabin ekansiz");
} else if (seriesDB.count > 10) {
  console.log("siz serialchi zvezda ekansiz");
}

console.log(seriesDB);
