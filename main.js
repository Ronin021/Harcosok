const array = [ // Tömb a csaták adataival
    { // Első csata adatai
        harcMegnevezese: "Rákóczi szabadságharc", // A harc megnevezése
        szembenalloFelek1: "Kuruc", // Az első szembenálló fél
        hadero1: "70.000", // Az első szembenálló fél haderője
        szembenalloFelek2: "Labanc", // A második szembenálló fél
        hadero2: "60.000" // A második szembenálló fél haderője
    },
    { // Második csata adatai
        harcMegnevezese: "48-as szabadságharc", // A harc megnevezése
        szembenalloFelek1: "Osztrák császárság (+ Orosz birodalom)", // Az első szembenálló fél
        hadero1: "170.000 (+ 200.000)", // Az első szembenálló fél haderője
        szembenalloFelek2: "Magyar királyság", // A második szembenálló fél
        hadero2: "170.000" // A második szembenálló fél haderője
    },
    { // Harmadik csata adatai
        harcMegnevezese: "I. világháború", // A harc megnevezése
        szembenalloFelek1: "Antant", // Az első szembenálló fél
        hadero1: "43 millió", // Az első szembenálló fél haderője
        szembenalloFelek2: "Központi hatalmak", // A második szembenálló fél
        hadero2: "25 millió" // A második szembenálló fél haderője
    },
    { // Negyedik csata adatai
        harcMegnevezese: "Bosworthi csata", // A harc megnevezése
        szembenalloFelek1: "Angolok (York + Lancester)", // Az első szembenálló fél
        hadero1: "15.000" // Az első szembenálló fél haderője
    }
];

const fejlec = { // Objektum a táblázat fejlécéhez
    harcMegnevezese: "Harc megnevezése", // Fejléc mezője a harc megnevezésére
    szembenalloFelek: "Szembenálló felek", // Fejléc mezője a szembenálló felekhez
    hadero: "Haderő" // Fejléc mezője a haderőhöz
};

const table = document.createElement('table') // Létrehozunk egy táblázat elemet
document.body.appendChild(table) // A táblázatot hozzáadjuk a dokumentum body-jához

const colgroup = document.createElement('colgroup') // Létrehozunk egy colgroup elemet
table.appendChild(colgroup); // Hozzáadjuk a colgroup-ot a táblázathoz

const col1 = document.createElement('col') // Első oszlop (szembenálló felek)
col1.className = "oszlop" // Kiosztunk egy osztályt az oszlopnak
colgroup.appendChild(col1) // Hozzáadjuk az oszlopot a colgroup-hoz

const col2 = document.createElement('col') // Második oszlop (szembenálló felek)
colgroup.appendChild(col2) // Hozzáadjuk a második oszlopot a colgroup-hoz

const col3 = document.createElement('col') // Harmadik oszlop (haderő)
col3.className = "oszlop" // Kiosztunk egy osztályt az oszlopnak
colgroup.appendChild(col3) // Hozzáadjuk a harmadik oszlopot a colgroup-hoz

const thead = document.createElement('thead') // Létrehozunk egy thead elemet (fejléc)
table.appendChild(thead) // Hozzáadjuk a thead-t a táblázathoz

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
createFejlec()


const tbody = document.createElement('tbody') // Létrehozunk egy tbody elemet
table.appendChild(tbody) // Hozzáadjuk a tbody-t a táblázathoz

/**
 * fields - Az űrlap mezőit leíró objektumok tömbje.
 * id: Az input azonosítója.
 * label: A mező címkéje.
 * type: Az input mező típusa.
 * errorClass: A hibaüzenet megjelenítéséhez használt osztály.
 */
const fields = [
    { id: "harc_nev", label: "Harc megnevezése", type: "text", errorClass: "error" },
    { id: "harcolo1", label: "1. Harcoló fél", type: "text", errorClass: "error" },
    { id: "hadero1", label: "1. Haderő", type: "text", errorClass: "error" },
    { id: "harcolo2", label: "2. Harcoló fél", type: "text", errorClass: "error" },
    { id: "hadero2", label: "2. Haderő", type: "text", errorClass: "error" }
];

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

// Meghívja a createForm függvényt a fields tömbbel
createForm(fields);

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
   // Eseménykezelő hozzáadása a form submit eseményhez
document.getElementById('form').addEventListener('submit', function (e){
    e.preventDefault()
    // A harc megnevezésének lekérése az űrlapról
    const harcMegnevezeseHTMLelement = document.getElementById('harcMegnevezese')
   
    // Az első szembenálló fél lekérése az űrlapról
    const szembenalloFelek1HTMLelement = document.getElementById('szembenalloFelek1')

    // Az első fél haderőjének lekérése az űrlapról
    const hadero1HTMLelement = document.getElementById('hadero1')

    // A második szembenálló fél lekérése az űrlapról
    const szembenalloFelek2HTMLelement = document.getElementById('szembenalloFelek2')

    // A második fél haderőjének lekérése az űrlapról
    const hadero2HTMLelement = document.getElementById('hadero2')


    // Az űrlap hibáinak törlése
    const ThisForm = e.currentTarget;  // Az űrlap elem
    const errorElement = ThisForm.querySelectorAll('.error');  // Az összes hibaüzenet elem lekérése
    for (const errors of errorElement) {
        errors.innerHTML = '';  // Hibák törlése minden mezőhöz
    }

    let validate = true;  // Az érvényesítés alapértelmezetten igaz, ha minden mező megfelelő

    // Mezők értékeinek lekérése
    const harcMegnevezeseValue = harcMegnevezeseHTMLelement.value;  // Harc neve mező értéke
    const szembenalloFelek1Value = szembenalloFelek1HTMLelement.value;  // Első szembenálló fél neve
    const hadero1Value = hadero1HTMLelement.value;  // Első fél haderője
    const szembenalloFelek2Value = szembenalloFelek2HTMLelement.value;  // Második szembenálló fél neve
    const hadero2Value = hadero2HTMLelement.value;  // Második fél haderője

    // Hibák kezelésére vonatkozó ellenőrzések
    // Ha a harc neve mező üres egyszerűvalidációval
   if(!egyszeruvalid (harcMegnevezeseHTMLelement, "Add meg a harcot")){
        validate = false;  // Ha hiba történt, a validálás nem sikerült
    }

    // Ha az első szembenálló fél neve mező üres egyszerűvalidációval
   if(!egyszeruvalid (szembenalloFelek1HTMLelement, "Add meg a felet")){
    validate = false;  // Ha hiba történt, a validálás nem sikerült
}
    

    // Ha az első fél haderője mező üres egyszerűvalidációval
   if(!egyszeruvalid (hadero1HTMLelement, "Add meg a haderőt")){
    validate = false;  // Ha hiba történt, a validálás nem sikerült

    }

    // Ha az második  szembenálló fél mező üres összetettvalidációval
   if(!osszetettvalidate (szembenalloFelek2HTMLelement, "Add meg a második felet")){
    validate = false;  // Ha hiba történt, a validálás nem sikerült

    }

    // Ha az második fél haderője mező üres összetettvalidációval
   if(!osszetettvalidate (hadero2HTMLelement, "Add meg a második haderőt")){
    validate = false;  // Ha hiba történt, a validálás nem sikerült

    }

  



    // Ha minden rendben van, létrehozzuk az új harc adatokat
    if (validate) {
        const newHarcok = {
            harcMegnevezese: harcMegnevezeseValue,  // A harc neve
            szembenalloFelek1: szembenalloFelek1Value,  // Az első szembenálló fél neve
            szembenalloFelek2: szembenalloFelek2Value === '' ? undefined : szembenalloFelek2Value,  // A második szembenálló fél neve (ha üres, undefined)
            hadero1: hadero1Value,  // Az első fél haderője
            hadero2: hadero2Value === '' ? undefined : hadero2Value  // A második fél haderője (ha üres, undefined)
        };

        // Új harc hozzáadása a csaták tömbhöz
        array.push(newHarcok);  // Az új harcot hozzáadjuk a csaták tömbhöz

        // A táblázat újrarenderelése
        Rendertable(array);  // A táblázat frissítése az új adatokkal

        // Az űrlap újraindítása (megtisztítja a mezőket)
        ThisForm.reset();  // Az űrlap mezői üresek lesznek
    }
});

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

    return validate; // Visszaadja az eredményt
}




// A táblázat megjelenítése a csaták tömb alapján
Rendertable(array);  // Az összes adatot tartalmazó táblázat újrarenderelése
