"use strict";
let numberOfSeries;
function strartApp() {
  numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

  while (
    numberOfSeries == null ||
    numberOfSeries == "" ||
    isNaN(numberOfSeries)
  ) {
    numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
  }
}
strartApp();

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberOfSerias() {
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
}
rememberOfSerias();

function checkStatusUser() {
  if (seriesDB.count < 5) {
    console.log("siz kam serial ko'ribsiz");
  } else if (seriesDB.count > 5 && seriesDB.count < 10) {
    console.log("siz classik tomoshabin ekansiz");
  } else if (seriesDB.count > 10) {
    console.log("siz serialchi zvezda ekansiz");
  }
}
checkStatusUser();

function writeGenres() {
  for (let i = 0; i < 3; i++) {
    let gener = prompt(`yaxshi ko'rgan janringiz ${i+1} ?`,"")
    seriesDB.genres[i]=gener
  }
}

writeGenres()

function showDb() {
  if (seriesDB.private == false) {
    console.log(seriesDB);
  } else {
    console.log("error");
  }
}
showDb();


