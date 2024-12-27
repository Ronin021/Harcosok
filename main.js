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

const fejlecrow = document.createElement('tr') // Létrehozunk egy tr elemet (sor a fejléchez)
thead.appendChild(fejlecrow) // Hozzáadjuk a fejléc sort a thead-hoz

const fejleccella2 = document.createElement('th') // Létrehozunk egy th elemet (fejléc cella)
fejleccella2.innerHTML = fejlec.szembenalloFelek // A cella tartalma a fejlec objektumból
fejlecrow.appendChild(fejleccella2) // Hozzáadjuk a cellát a fejléc sorhoz

const fejleccella2 = document.createElement('th') // Létrehozunk egy újabb th elemet
fejleccella2.innerHTML = fejlec.szembenalloFelek // Ismét hozzáadjuk a szembenálló felek mezőt
fejlecrow.appendChild(fejleccella2) // Hozzáadjuk a cellát a fejléc sorhoz

const fejleccella3 = document.createElement('th') // Létrehozunk egy újabb th elemet
fejleccella3.innerHTML = fejlec.hadero // A cella tartalma a haderő mező
fejlecrow.appendChild(fejleccella3) // Hozzáadjuk a cellát a fejléc sorhoz

const tbody = document.createElement('tbody') // Létrehozunk egy tbody elemet
table.appendChild(tbody) // Hozzáadjuk a tbody-t a táblázathoz

function Rendertable() { // Funkció a táblázat kitöltésére
    tbody.innerHTML = ''; // Töröljük a táblázat korábbi tartalmát
    for (const currentElement of array) { // Iterálunk a csaták adatai tömbön
        // Első sor létrehozása
        const aktivsor = document.createElement('tr'); // Létrehozunk egy tr elemet (sor)
        tbody.appendChild(aktivsor); // Hozzáadjuk a sort a tbody-hoz

        // Harc cella (csata neve)
        const harcCella = document.createElement('td'); // Létrehozunk egy td elemet (cellát)
        harcCella.innerHTML = currentElement.harcMegnevezese; // A cella tartalma a csata neve
        aktivsor.appendChild(harcCella); // Hozzáadjuk a cellát a sorhoz

        // Ha nincs második szembenálló fél vagy haderő, állítsd be a rowSpan-t
        if (currentElement.szembenalloFelek2 === undefined && currentElement.hadero2 === undefined) {
            harcCella.rowSpan = 2; // A rowSpan értékét 2-re állítjuk, hogy a cella több sorra terjedjen ki
        }
        aktivsor.appendChild(harcCella); // Hozzáadjuk a cellát a sorhoz

        // Első szembenálló felek cella
        const felekCella1 = document.createElement('td'); // Létrehozunk egy td elemet (cellát)
        felekCella1.innerHTML = currentElement.szembenalloFelek1; // Az első szembenálló fél neve
        aktivsor.appendChild(felekCella1); // Hozzáadjuk a cellát a sorhoz

        // Első haderő cella
        const haderoCella1 = document.createElement('td'); // Létrehozunk egy td elemet (cellát)
        haderoCella1.innerHTML = currentElement.hadero1; // Az első fél haderője
        aktivsor.appendChild(haderoCella1); // Hozzáadjuk a cellát a sorhoz

        // Második sor létrehozása (ha van második szembenálló fél vagy haderő)
        if (currentElement.szembenalloFelek2 !== undefined || currentElement.hadero2 !== undefined) {
            const aktivsor2 = document.createElement('tr'); // Létrehozunk egy újabb sort
            tbody.appendChild(aktivsor2); // Hozzáadjuk a második sort a tbody-hoz

            // Második szembenálló felek cella (ha van)
            if (currentElement.szembenalloFelek2 !== undefined) {
                const felekCella2 = document.createElement('td'); // Létrehozunk egy újabb cellát
                felekCella2.innerHTML = currentElement.szembenalloFelek2; // A második szembenálló fél neve
                aktivsor2.appendChild(felekCella2); // Hozzáadjuk a cellát a második sorhoz
            }

            // Második haderő cella (ha van)
            if (currentElement.hadero2 !== undefined) {
                const haderoCella2 = document.createElement('td'); // Létrehozunk egy újabb cellát
                haderoCella2.innerHTML = currentElement.hadero2; // A második fél haderője
                aktivsor2.appendChild(haderoCella2); // Hozzáadjuk a cellát a második sorhoz
            }
        }
    }
}

Rendertable(); // A táblázat megjelenítése
