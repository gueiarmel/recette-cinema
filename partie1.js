let age = 11;
let  prixbilletm16 = 1500;
let prixbillet16p = 2500;
let billetm16 = 0;
let billet16p = 0;
let Recettetem16 = 0;
let Recettete16p = 0;
let Recettetotale = 0;
let Totalticket = 0;
while (age >= 11 && age <= 20) {
    if (age < 16 ) {
        billetm16++;
        Recettetem16 += prixbilletm16;
        console.log(`Age : ${age}, prix du billet : ${prixbilletm16}`);
    }
    else{
        billet16p++;
        Recettete16p += prixbillet16p;
        console.log(`Age : ${age},prix du billet : ${prixbillet16p}`);
    }
    age+=1;
}
    Recettetotale = Recettete16p + Recettetem16
    console.log(`Recettetotale : ${Recettetotale}`)
    Totalticket = billet16p + billetm16
    console.log(`Totalticek : ${Totalticket}`)