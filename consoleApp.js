const text = "L'Ateniese Milziade, figlio di Cimone, spiccava fra tutti sia per l'antichità della stirpe, sia per la gloria degli antenati, sia per la propria saggezza ed aveva un'età tale che i suoi concittadini potevano non più solo concepire buone speranze su di lui, ma anche confidare che sarebbe stato quale ebbero poi modo, alla prova, di riscontrare, quando gli Ateniesi decisero di inviare dei coloni nel Chersoneso. Ce n'era un grande numero e molti chiedevano di partecipare alla spedizione, tra loro ne furono scelti alcuni e inviati a Delfi per consultare l'oracolo di Apollo su chi dovessero preferire come comandante. Quelle regioni infatti le occupavano allora i Traci e con loro bisognava combattere. La Pizia in risposta a chi la interrogava, ordinò espressamente che si prendessero come capo Milziade: se lo avessero fatto, l'impresa avrebbe avuto buon esito. In seguito al responso dell'oracolo, Milziade con truppe scelte parti con la flotta per il Chersoneso e, approdato a Lemno voleva ridurre gli abitanti dell'isola sotto il dominio degli Ateniesi e chiese ai Lemnii di arrendersi spontaneamente; quelli, schernendolo, risposero che lo avrebbero fatto quando lui, salpato con la flotta da casa sua, avesse raggiunto Lemno con il vento di tramontana. Questo vento infatti sorgendo da settentrione tiene la direzione contraria per chi parte da Atene. Milziade, non avendo tempo di trattenersi, indirizzò la rotta verso la sua meta e arrivò nel Chersoneso."
//quante lettere
//quante parole ha
//quanti caratteri

//quante volte una parola è ripetuta
//quante volte un carattere è ripetuto
//quante volte la parola è nel testo e a quale indice lo posso trovare

//creare bottone sul prompt, in cui scrivi la parola da cercare e ti da quante volte la parola è presente 


//lunghezza stringa non pulita:

function character(string) {
    return string.length;
}

console.log("quanti caratteri ha la stringa: ", character(text));



//pulisce dalla punteggiatura lasciando tutti gli spazi:

function replacePunctuation(string) {
    let replacedString = string.replace(/[,;.:]/g , '');
    let replacedString2 = replacedString.replace(/'/g, " ");
    return replacedString2;
}

console.log(replacePunctuation(text));



//toglie gli spazi e lascia solo le lettere.

let allLetters = replacePunctuation(text).replace(/ /g, "");

console.log("quante lettere punteggiatura e spazi esclusi: ", allLetters.length);



//crea array di parole separate da uno spazio:

function stringOnlyWords(string) {
    return string.split(" ");
}


console.log("quante parole contiene la stringa: ",stringOnlyWords(text).length);


//conto di tutte le parole ripetute:

let words = stringOnlyWords(replacePunctuation(text).toLowerCase());
let report = {};

for (let i = 0; i < words.length; i++) {
  if (report[words[i]] === undefined) {
    report[words[i]] = 1;
  } else {
    report[words[i]]++;
  }
}

console.log(report);


//conto di tutti i caratteri ripetuti (sporca):


let characters = [...text.toLowerCase()];
let reportChar = {};

for (let i = 0; i < characters.length; i++) {
  if (reportChar[characters[i]] === undefined) {
    reportChar[characters[i]] = 1;
  } else {
    reportChar[characters[i]]++;
  }
}

console.log(reportChar);





function findAllIndexes(string, word){
    let result = [];
    let dif = 0;
    while(true){
      let index = string.indexOf(word);
      if(index === -1) break;
      else{
        result.push(index + dif);
        let cur = string.length;
        string = string.substring(index + word.length);
        dif += cur - string.length;
      }
    }
    return result;
  }
  console.log(findAllIndexes(text," che "));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function generateStats(string) {
    const charNumber = string.length;

    const clearArrayFromString = cleanStringAndConvertInArray(string);

    const wordNumber = clearArrayFromString.length;

    const wordOccurrency = generateOccurrencyCount(clearArrayFromString);

    const charOccurrency = generateOccurrencyCount([... string]);

    console.log("Il numero dei caratteri è: " + charNumber);
    for (const key in charOccurrency) {
        if (Object.hasOwnProperty.call(charOccurrency, key)) {
            const count = charOccurrency[key];
            console.log("Il carattere " + key + " compare: " + count + (count === 1 ? " volta" : " volte"));
        }
    }

    console.log("--------------------------------------------------------------------------------");


    console.log("Il numero delle parole è: " + wordNumber);
    for (const key in wordOccurrency) {
        if (Object.hasOwnProperty.call(wordOccurrency, key)) {
            const count = wordOccurrency[key];
            console.log("La parola " + key + " compare: " + count + (count === 1 ? " volta" : " volte"));
        }
    }
}


function cleanStringAndConvertInArray(string) {
    const cleanedString = string.replace(/'/g, " ")
                                .replace(/\./g, " ")
                                .replace(/;/g, " ")
                                .replace(/:/g, " ")
                                .replace(/,/g, " ");

    const stringArray = cleanedString.split(" ");

    return stringArray;
}



function generateOccurrencyCount(stringArray) {
    const occurrencyCount = {};

    for (const word of stringArray) {
        if (occurrencyCount[word]) {
            occurrencyCount[word]++;
        } else {
            occurrencyCount[word] = 1;
        }
    }
    return occurrencyCount;

}

console.log(generateStats(text));



function searchWord(text, wordToSearch) {
    const arrayOfIndex = [];
    let index = 0;
    let textToSearch = text;

    while(true){
        index = textToSearch.toLowerCase().indexOf(wordToSearch.toLowerCase());                  //risulta indice oppure -1
        if (index === -1) {
            break;
        } else {
            arrayOfIndex.push(index);
            textToSearch = textToSearch.substring(index + wordToSearch.length); 
        }
    } 
    return arrayOfIndex;
}

console.log(searchWord(text, "che"));

function startSearch() {
    const wordToSearch = prompt("inserisci la parola da cercare:");
    const arrayOfIndex = searchWord(text, wordToSearch);
    alert("le occorrenze sono " + arrayOfIndex.length);
}


// let par = document.getElementById("stats-paragraph");
// par.innerHTML += "ciao";

function addTextNode(text) {
    let newtext = document.createTextNode(text);
    let p1 = document.getElementById("stats-paragraph");
  
    p1.appendChild(newtext);
}
  



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//creare un text note e mettere le statistiche dentro lo stats-paragraph
//fare in modo che il text sia editabile