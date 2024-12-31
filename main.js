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


// Meghívja a createForm függvényt a fields tömbbel
createForm(fields);

   // Eseménykezelő hozzáadása a form submit eseményhez
document.getElementById('form').addEventListener('submit', function (e){
    e.preventDefault()
    // A harc megnevezésének lekérése az űrlapról
    const harcMegnevezeseHTMLelement = document.getElementById('harc_nev')
   
    // Az első szembenálló fél lekérése az űrlapról
    const szembenalloFelek1HTMLelement = document.getElementById('harcolo1')

    // Az első fél haderőjének lekérése az űrlapról
    const hadero1HTMLelement = document.getElementById('hadero1')

    // A második szembenálló fél lekérése az űrlapról
    const szembenalloFelek2HTMLelement = document.getElementById('harcolo2')

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




// A táblázat megjelenítése a csaták tömb szerint
Rendertable(array);  // Az összes adatot tartalmazó táblázat újrarenderelése
