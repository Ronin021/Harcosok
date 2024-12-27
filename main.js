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

const fejleccella1 = document.createElement('th') // Létrehozunk egy th elemet (fejléc cella)
fejleccella1.innerHTML = fejlec.szembenalloFelek // A cella tartalma a fejlec objektumból
fejlecrow.appendChild(fejleccella1) // Hozzáadjuk a cellát a fejléc sorhoz

const fejleccella2 = document.createElement('th') // Létrehozunk egy újabb th elemet
fejleccella2.innerHTML = fejlec.szembenalloFelek // Ismét hozzáadjuk a szembenálló felek mezőt
fejlecrow.appendChild(fejleccella2) // Hozzáadjuk a cellát a fejléc sorhoz

const fejleccella3 = document.createElement('th') // Létrehozunk egy újabb th elemet
fejleccella3.innerHTML = fejlec.hadero // A cella tartalma a haderő mező
fejlecrow.appendChild(fejleccella3) // Hozzáadjuk a cellát a fejléc sorhoz

const tbody = document.createElement('tbody') // Létrehozunk egy tbody elemet
table.appendChild(tbody) // Hozzáadjuk a tbody-t a táblázathoz

function Rendertable(){//itt definiálom a renderTable függvényemet
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


    const ThisForm = e.currentTarget
    const errorElement = ThisForm.querySelectorAll('.error')
    for(const errors of errorElement){
        errors.innerHTML = ''
    }
    let validate = true



    const harcMegnevezeseValue = harcMegnevezeseHTMLelement.value // A harc neve
    const szembenalloFelek1Value = szembenalloFelek1HTMLelement.value // Az első szembenálló fél neve
    const hadero1Value = hadero1HTMLelement.value // Az első fél haderője
    const szembenalloFelek2Value = szembenalloFelek2HTMLelement.value // A második szembenálló fél neve
    const hadero2Value = hadero2HTMLelement.value // A második fél haderője


    if(harcMegnevezeseValue === ""){
        const parent= harcMegnevezeseHTMLelement.parentElement
        const place_of_error = parent.querySelector('.error')
        if(place_of_error !== undefined){
            place_of_error.innerHTML = "Add meg a harc nevét"
        }
        validate = false
    }

    if(szembenalloFelek1Value === ""){
        const parent= szembenalloFelek1HTMLelement.parentElement
        const place_of_error = parent.querySelector('.error')
        if(place_of_error !== undefined){
            place_of_error.innerHTML = "Add meg a felet"
        }
        validate = false
    }

    if(hadero1Value === ""){
        const parent= hadero1HTMLelement.parentElement
        const place_of_error = parent.querySelector('.error')
        if(place_of_error !== undefined){
            place_of_error.innerHTML = "Add meg a haderőt"
        }
        validate = false
    }




    // Új harc adatainak létrehozása egy objektumban
    if(validate){
    const newHarcok = {
        harcMegnevezese: harcMegnevezeseValue, // A harc neve
        szembenalloFelek1: szembenalloFelek1Value, // Az első szembenálló fél
        szembenalloFelek2: szembenalloFelek2Value === '' ? undefined : szembenalloFelek2Value, // A második szembenálló fél
        hadero1: hadero1Value, // Az első fél haderője
        hadero2: hadero2Value === '' ? undefined : hadero2Value // A második fél haderője
    }

    // Az új harc hozzáadása a csaták tömbhöz
    array.push(newHarcok)

    // A táblázat újrarenderelése az új adatokat tartalmazó tömb alapján
    Rendertable()
    ThisForm.reset()
    }    
})

Rendertable()