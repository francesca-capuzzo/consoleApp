const text = "L'Ateniese Milziade, figlio di Cimone, spiccava fra tutti sia per l'antichità della stirpe, sia per la gloria degli antenati, sia per la propria saggezza ed aveva un'età tale che i suoi concittadini potevano non più solo concepire buone speranze su di lui, ma anche confidare che sarebbe stato quale ebbero poi modo, alla prova, di riscontrare, quando gli Ateniesi decisero di inviare dei coloni nel Chersoneso. Ce n'era un grande numero e molti chiedevano di partecipare alla spedizione, tra loro ne furono scelti alcuni e inviati a Delfi per consultare l'oracolo di Apollo su chi dovessero preferire come comandante. Quelle regioni infatti le occupavano allora i Traci e con loro bisognava combattere. La Pizia in risposta a chi la interrogava, ordinò espressamente che si prendessero come capo Milziade: se lo avessero fatto, l'impresa avrebbe avuto buon esito. In seguito al responso dell'oracolo, Milziade con truppe scelte parti con la flotta per il Chersoneso e, approdato a Lemno voleva ridurre gli abitanti dell'isola sotto il dominio degli Ateniesi e chiese ai Lemnii di arrendersi spontaneamente; quelli, schernendolo, risposero che lo avrebbero fatto quando lui, salpato con la flotta da casa sua, avesse raggiunto Lemno con il vento di tramontana. Questo vento infatti sorgendo da settentrione tiene la direzione contraria per chi parte da Atene. Milziade, non avendo tempo di trattenersi, indirizzò la rotta verso la sua meta e arrivò nel Chersoneso."
//quante lettere
//quante parole ha
//quanti caratteri

//quante volte una parola è ripetuta
//quante volte un carattere è ripetuto
//quante volte la parola è nel testo e a quale indice lo posso trovare

//creare bottone sul prompt, in cui scrivi la parola da cercare e ti da quante volte la parola è presente 




function character(string) {                                         //trova quanti caratteri sono presenti nella stringa da analizzare (inclusi spazi e caratteri speciali) ---> ritorna il numero totale dei caratteri
    return string.length;  
}

console.log("quanti caratteri ha la stringa: ", character(text));





function replacePunctuation(string) {                                //pulisce dalla punteggiatura (e caratteri speciali) lasciando tutti gli spazi ---> ritorna una stringa pulita 
    let replacedString = string.replace(/[,;.:]/g , '');
    let replacedString2 = replacedString.replace(/'/g, " ");
    return replacedString2;
}

console.log(replacePunctuation(text));





let allLetters = replacePunctuation(text).replace(/ /g, "");          //toglie gli spazi e lascia solo le lettere ---> ritorna il numero totale di lettere (caratteri) presenti nella string.

console.log("quante lettere punteggiatura e spazi esclusi: ", allLetters.length);




function stringOnlyWords(string) {                                    //crea array di parole separate da uno spazio ---> ritorna il testo come array.

    return string.split(" ");
}

console.log("quante parole contiene la stringa: ",stringOnlyWords(text).length);




let words = stringOnlyWords(replacePunctuation(text).toLowerCase());  //fa il conto di tutte le parole ripetute ---> ritorna ogni parola come KEY e il VALUE associato indica quante volte si ripete nella frase.
let report = {};

for (let i = 0; i < words.length; i++) {
  if (report[words[i]] === undefined) {
    report[words[i]] = 1;
  } else {
    report[words[i]]++;
  }
}

console.log(report);





let characters = [...text.toLowerCase()];                              //fa il conto di tutti i caratteri (compresa punteggiatura e spazi) ---> ritorna ogni carattere come KEY e il VALUE associato indica quante volte si ripete.
let reportChar = {};

for (let i = 0; i < characters.length; i++) {
  if (reportChar[characters[i]] === undefined) {
    reportChar[characters[i]] = 1;
  } else {
    reportChar[characters[i]]++;
  }
}

console.log(reportChar);




function findAllIndexes(string, word){                               //data una parola, trova l'indice alla quale è associata ---> ritorna un array di numeri che indicano l'indice al quale la parola si trova (se ripetuta verranno viasualizzati tutti gli indici)
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




//////////// CORREZIONE IN CLASSE E IMPLEMENTAZIONE //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function generateStats() {                                                  //tolgo (string) dall'imput della funzione.

    let par = document.getElementById("stats-paragraph");                   //HTML --> creo un collegamento tra il file js e la porzione di html che mi interessa
    let textArea = document.getElementById("text-to-analyse");              //HTML
    let string = textArea.value;                                            //HTML
    par.innerHTML = '';


    const charNumber = string.length;                                        // 1 - CONTA TUTTI CARATTERI DELLA STRINGA
    //console.log("Il numero dei caratteri è: " + charNumber);
    let node = document.createTextNode("Il numero dei caratteri è: " + charNumber);    //creo oggetto text node in cui inserisco il testo da riportare nell'HTML
    par.appendChild(node);                                                              //elemento figlio da infilare dentro al padre (node)
    let br4 = document.createElement("br");
    par.appendChild(br4);


    const clearArrayFromString = cleanStringAndConvertInArray(string);       // 2 - RIPULISCE LA STRINGA DAI CARATTERI SPECIALI E LA TRASFORMA IN ARRAY


    const wordNumber = clearArrayFromString.length;                          // 3 - CONTA QUANTE PAROLE SONO PRESENTI NELLA STRINGA  
    //console.log("Il numero delle parole è: " + wordNumber);
    let node2 = document.createTextNode("Il numero delle parole è: " + wordNumber);
    par.appendChild(node2);
    let br2 = document.createElement("br");
    par.appendChild(br2);
    

    const wordOccurrency = generateOccurrencyCount(clearArrayFromString);    // 4 - CONTA QUANTE VOLTE SI RIPETE UNA PAROLA
    
    for (const key in wordOccurrency) {
        if (Object.hasOwnProperty.call(wordOccurrency, key)) {
            const count = wordOccurrency[key];
            //console.log("La parola " + key + " compare: " + count + (count === 1 ? " volta" : " volte"));
            let node = document.createTextNode("La parola " + key + " compare: " + count + (count === 1 ? " volta" : " volte"));
            par.appendChild(node);
            let br = document.createElement("br");
            par.appendChild(br);
        }
    }
    
    //console.log("--------------------------------------------------------------------------------");


    const charOccurrency = generateOccurrencyCount([... string]);            // 5 - CONTA QUANTE VOLTE SI RIPETE UN CARATTERE 
    
    for (const key in charOccurrency) {
        if (Object.hasOwnProperty.call(charOccurrency, key)) {
            const count = charOccurrency[key];
            //console.log("Il carattere " + key + " compare: " + count + (count === 1 ? " volta" : " volte"));
            let node = document.createTextNode("Il carattere " + key + " compare: " + count + (count === 1 ? " volta\n" : " volte\n"));
            par.appendChild(node);
            let br = document.createElement("br");
            par.appendChild(br);
        }
    }
}

// console.log(generateStats(text));                                         //verrà invocato nel file HTML 



function cleanStringAndConvertInArray(string) {                  // 2 
    const cleanedString = string.replace(/'/g, " ")
                                .replace(/\./g, " ")
                                .replace(/;/g, " ")
                                .replace(/:/g, " ")
                                .replace(/,/g, " ");

    const stringArray = cleanedString.split(" ");

    return stringArray;
}



function generateOccurrencyCount(stringArray) {                  // 4
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




function searchWord(text, wordToSearch) {                           // 6 - RICERCA UNA PAROLA E NE RIPORTA L'INDICE (O GLI INDICI SE SI RIPETE) ALL'INTERNO DI UN ARRAY
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



//////// INCLUSIONE IN HTML /////////////////////////////////////////////////////////////////////////////////////////////////////////


function startSearch() {                                                // BOTTONE SEARCH - apre un prompt (dal bottone html) dove inserire la parola da cercare nel testo ---> ritorna quante volte la parola è presente
    const wordToSearch = prompt("inserisci la parola da cercare:");
    const arrayOfIndex = searchWord(text, wordToSearch);
    alert("le occorrenze di " + wordToSearch + " sono " + arrayOfIndex.length);
}
