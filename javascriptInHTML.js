function generateStats(string, tag) {

    const charNumber = string.length;                                        // 1 - CONTA TUTTI CARATTERI DELLA STRINGA
    tag.innerHTML += "Il numero dei caratteri è: " + charNumber;

    const clearArrayFromString = cleanStringAndConvertInArray(string);       // 2 - RIPULISCE LA STRINGA DAI CARATTERI SPECIALI E LA TRASFORMA IN ARRAY

    const wordNumber = clearArrayFromString.length;                          // 3 - CONTA QUANTE PAROLE SONO PRESENTI NELLA STRINGA  
    tag.innerHTML += "Il numero delle parole è: " + wordNumber;

    const wordOccurrency = generateOccurrencyCount(clearArrayFromString);    // 4 - CONTA QUANTE VOLTE SI RIPETE UNA PAROLA
    
    for (const key in wordOccurrency) {
        if (Object.hasOwnProperty.call(wordOccurrency, key)) {
            const count = wordOccurrency[key];
            tag.innerHTML += "La parola " + key + " compare: " + count + (count === 1 ? " volta" : " volte");
        }
    }

    
    const charOccurrency = generateOccurrencyCount([... string]);            // 5 - CONTA QUANTE VOLTE SI RIPETE UN CARATTERE 
    tag.innerHTML += "<ul>"
    for (const key in charOccurrency) {
        if (Object.hasOwnProperty.call(charOccurrency, key)) {
            const count = charOccurrency[key];
            tag.innerHTML += "Il carattere " + key + " compare: " + count + (count === 1 ? " volta" : " volte");
        }
    }
    tag.innerHTML += "</ul>"
}




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




