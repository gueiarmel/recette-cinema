let age = 11;
let prixbilletm16 = 1500;
let prixbillet16p = 2500;
let billetm16 = 0;
let billet16p = 0;
let billet18 = 0;
let Recettetem16 = 0;
let Recettete16p = 0;
let Recettete18plus = 0;
let prixbillet18 = 2000;
let Recettetotale = 0;
let totalticket = 0;
while (age >= 11 && age <= 20) {
    if (age < 16 ) {
        billetm16++;
        Recettetem16 += prixbilletm16;
    }
    else if (age >= 16 && age < 18) {
        billet16p++;
        Recettete16p += prixbillet16p;
    }
    else {
    billet18++;
    Recettete18plus += prixbillet18;
    }
    age++;
}
    Recettetotale = Recettete16p + Recettetem16 + Recettete18plus
    console.log(`Recettetotal : ${Recettetotale}`)