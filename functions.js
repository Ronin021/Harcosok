
/**
 * 
 */
function createFejlec(){

    const fejlec = ["Harc megnevezése", "Szembenálló felek", "Haderő"]

    const fejlecsor = document.createElement('tr')

    thead.appendChild(fejlecsor)


    for(let i = 0; i< fejlec.length; i++){
        const fejleccella = document.createElement('th')

        fejleccella.innerHTML = fejlec[i]

        fejlecsor.appendChild(fejleccella)
    }
}


/**
 * createForm - Egy űrlap dinamikus létrehozását végző függvény.
 * @param {Array} fields - Az űrlap mezőit leíró objektumok tömbje.
 */
function createForm(fields) {
    // Létrehoz egy form elemet és beállítja azonosítóját
    const formElement = document.createElement('form');
    formElement.id = 'form';
    document.body.appendChild(formElement); // Hozzáadja a dokumentum body eleméhez
    
    // Végigmegy a fields tömb mezőin és létrehozza a szükséges elemeket
    for (const field of fields) {
        // Létrehoz egy div-et a mező tárolására
        const fieldContainer = document.createElement('div');
        fieldContainer.classList.add('field'); // Hozzáad egy 'field' osztályt
        
        // Létrehoz egy label-t és beállítja a szövegét
        const fieldLabel = document.createElement('label');
        fieldLabel.innerText = field.label;
        fieldContainer.appendChild(fieldLabel); // Hozzáadja a div-hez
        
        // Létrehoz egy input mezőt, beállítja a típusát és azonosítóját
        const inputElement = document.createElement('input');
        inputElement.type = field.type;
        inputElement.id = field.id;
        fieldContainer.appendChild(inputElement); // Hozzáadja a div-hez
        
        // Létrehoz egy div-et a hibaüzenet megjelenítéséhez
        const errorContainer = document.createElement('div');
        errorContainer.classList = field.errorClass; // Beállítja az osztályát
        fieldContainer.appendChild(errorContainer); // Hozzáadja a div-hez
        
        // Az elkészült mezőt hozzáadja az űrlaphoz
        formElement.appendChild(fieldContainer);
    }
    
    // Létrehoz egy submit gombot, beállítja a típusát és a szövegét
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerText = 'Hozzáadás';
    formElement.appendChild(submitButton); // Hozzáadja az űrlaphoz
}


/**
 * 
 * @param {Array} array - A táblázathoz szükséges adatok tömbje.
 */
function Rendertable(array){//itt definiálom a renderTable függvényemet
    for(const currentElement of array){//itt a ciklusunk végigiterál az array tömbünk elemein és a currentElement lesz az aktuális elem

        //sor létrehozása
        const aktivsor = document.createElement('tr');//létrehozok egy tr elemet ami az első sor lesz a tablazatban
        tbody.appendChild(aktivsor);//hozzaadom a tbody-hoz  
        
        const harcMegnevezes = document.createElement('td');//letrehozok egy td elemet
        harcMegnevezes.innerHTML = currentElement.harcMegnevezese;//az aktuális elem (currentElement) harcMegnevezese tulajdonságának értéke lesz itt megjelenítve 
        aktivsor.appendChild(harcMegnevezes);//hozzáadja az első sorhoz
        
        const szembenalloFelek1 = document.createElement('td');//letrehozok egy td elemet
        szembenalloFelek1.innerHTML = currentElement.szembenalloFelek1;//az aktuális elem (currentElement) szembenalloFelek1 tulajdonságának értéke lesz itt megjelenítve 
        aktivsor.appendChild(szembenalloFelek1);//hozzáadjuk a cellát a sorhoz 
        
        const hadero1 = document.createElement('td');//letrehozok egy td elemet
        hadero1.innerHTML = currentElement.hadero1;//az aktuális elem (currentElement) hadero1 tulajdonságának értéke lesz itt megjelenítve 
        aktivsor.appendChild(hadero1);//hozzáadjuk a cellát a sorhoz 
        
        if(currentElement.szembenalloFelek2 !== undefined && currentElement.hadero2 !== undefined){//itt ellenőrizzük azt hogy az aktuális szembealloFelek2 és a hadero2 nem egyenlő-e undefineddel, és ha egyik sem az, csak akkor fut le tovább a kód
        
        //második sor létrehozása
        const aktivsor2 = document.createElement('tr');//létrehozok egy tr elemet ami az első sor lesz a tablazatban
        tbody.appendChild(aktivsor2);//hozzaadom a tbody-hoz  
        
        harcMegnevezes.rowSpan = "2"//Ha idáig lefutott a kódunk akkor biztosan szükség lesz soregyesítés és azt pedig itt adjuk meg
        
        const szembenalloFelek2 = document.createElement('td');//letrehozok egy td elemet
        szembenalloFelek2.innerHTML = currentElement.szembenalloFelek2;//az aktuális elem (currentElement) szembenalloFelek2 tulajdonságának értéke lesz itt megjelenítve 
        aktivsor2.appendChild(szembenalloFelek2);//hozzáadja a második sorhoz
        
        const hadero2 = document.createElement('td');//letrehozok egy td elemet
        hadero2.innerHTML = currentElement.hadero2;//az aktuális elem (currentElement) hadero2 tulajdonságának értéke lesz itt megjelenítve 
        aktivsor2.appendChild(hadero2);//hozzáadja a második sorhoz
        }
    }
}


/**
 * egyszeruvalid - Egy egyszerű validációs függvény HTML elemek ellenőrzésére.
 * @param {HTMLElement} HTMLElement - Az ellenőrizendő HTML elem.
 * @param {string} errormessage - A hibaüzenet, amely megjelenik, ha az érték üres.
 * @returns {boolean} - true, ha az ellenőrzés sikeres (nem üres), false, ha hibás.
 */
function egyszeruvalid(HTMLElement, errormessage) {
    let validate = true; // A validáció alapértelmezett állapota
    if (HTMLElement.value === "") { // Ha az érték üres
        const parent = HTMLElement.parentElement; // parentElement lekérdezése
        const place_of_error = parent.querySelector('.error'); // Hibaüzenet helyének keresése
        if (place_of_error !== undefined) { // Ha van hely a hibaüzenetnek
            place_of_error.innerHTML = errormessage; // Hibaüzenet beállítása
        }
        validate = false; // Validáció sikertelen
    }
    return validate; // Eredmény visszaadása
}


/**
 * Validációs függvény, amely ellenőrzi, hogy az egyik mező megfelelően van-e kitöltve a másikhoz képest.
 * 
 * @param {HTMLInputElement} szembealloFelek2Field - A második fél mezője (pl. "2. Harcoló fél").
 * @param {HTMLInputElement} hadero2Field - A második haderő mezője (pl. "2. Haderő").
 * @param {string} errormessage1 - Hibaüzenet, ha a második fél mezője üres.
 * @param {string} errormessage2 - Hibaüzenet, ha a második haderő mezője üres.
 * @returns {boolean} - `true`, ha a validáció sikeres, különben `false`.
 */
function osszetettvalidate(szembealloFelek2Field, hadero2Field, errormessage1, errormessage2) {
    let validate = true;

    // Ellenőrzés, ha a másik fél mezője üres, de a másik haderő értékkel rendelkezik
    if (szembealloFelek2Field.value === '' && hadero2Field.value !== '') {
        const parent = szembealloFelek2Field.parentElement; // parentElement lekérdezése
        const placeOfError = parent.querySelector('.error'); // Hibaüzenet helyének keresése

        if (placeOfError !== undefined) { // Ha van hely a hibaüzenetnek
            placeOfError.innerHTML = errormessage1; // Hibaüzenet beállítása
        }

        validate = false; // Validáció sikertelen
    }

    // Ellenőrzés, ha a másik haderő mezője üres, de a másik fél értékkel rendelkezik
    if (szembealloFelek2Field.value !== '' && hadero2Field.value === '') {
        const parent = hadero2Field.parentElement; // parentElement lekérdezése
        const placeOfError = parent.querySelector('.error'); // Hibaüzenet helyének keresése

        if (placeOfError !== undefined) { // Ha van hely a hibaüzenetnek
            placeOfError.innerHTML = errormessage2; // Hibaüzenet beállítása
        }

        validate = false; // Validáció sikertelen
    }

    return validate; // Eredmény visszaadása
}
