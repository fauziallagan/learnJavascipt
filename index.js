let number = 1;
while (number <= 10){
   
    console.log(number);
    number += 1; 
    
}

console.log('<---------------------------- FOR ---------------------------->');
// For
for(let angka = 1; angka <= 10; angka+=1){
    console.log(`number : ${angka}`);
}
console.log('<--------------------------- FOR ADVANCE -------------------->');
// for advance
for (let kelipatan = 1; kelipatan <= 10; kelipatan ++){
    if (kelipatan % 3 == 0){
        console.log(`that's its ${kelipatan}`);
    }
    else{
        console.log(`your number ${kelipatan}`);
    }
}
console.log('<------------------------------------------------------------>');
console.log('<-------------------------- ARRAY --------------------------->');
const listCounrty = ["indonesia", "Singapure", "Malaysia", "Brunei Darussalam"];
const city = ["Jakarta", "Singapure", "Kuala lumpur", "Bandar Sri bengawan"];
const language = ["Indonesia", "Inggris Singapure", "Melayu", "Bahasa Melayu"];

for (let j = 0; j <= listCounrty.length; j++){
    console.log(`The Language Of : ${language[j]} from Country ${listCounrty[j]} in The City of ${city[j]}`);

}
console.log(city.sort());
console.log('<------------------------------------------------------------>');
console.log('<---------------------- OBJECT ------------------------------->');

const merk = {
    Honda:"Jepang",
    Lamborghini: "Amerika Serikat",
    Wuling : "China",
    BMW : "Jerman"
}
console.log(merk);
console.log('<------------------------------------------------------------>');
console.log('<---------------------- OBJECT Dan Array -------------------->');

const kuliner = [
    {name : "Rendang", kota : "Padang"},
    {name : "Soto", kota :"Jawa"},
    {name : "Papeda", kota : "Ambon"},
    {name : "Seblak"}
]

console.log('<------------------------------------------------------------>');
console.log('<---------------------- LOOP FOR OBJECT Dan Array ----------->');
for (let i = 0; i < kuliner.length; i++){

    const x = kuliner[i]
    console.log(`Nama Saya ${x.kota}`);
}
console.log('<------------------------------------------------------------>');
console.log('<---------------------- Undefined --------------------------->');
for (let i = 0; i < kuliner.length; i++){
    
    const x = kuliner[i];
    if(x.kota === undefined){
        console.log(`Kosong `);
    }else{
        console.log(`Makanan ${x.name} khas dari ${x.kota} `);
    }
}
console.log('<------------------------------------------------------------>');
console.log('<---------------------- Nested Object ----------------------->');

const charcter = [{
    name : "fauzi",
    age : 20,
    hobby:{
        Sport : "Soccer",
        Game : "RPG",
        Life_Cycle : "Nothing"
    },
},
{
    name: "Putra",
    age : 20,
    hobby:{
        Sport : "Golf",
        Game : "Open Wolrd",
        Life_Cycle: "Happiness"
    }
}]

console.log(charcter);

console.log('<------------------------------------------------------------>');
console.log('<---------------------- Function ---------------------------->');

const mySelf =(angka1, angka2)=>{
// Code
    return angka1 + angka2;
    
// Return
}
// memanggil function
const sum = mySelf(2, 3);
console.log(sum);




const introduce = function (){
// Code
    console.log("Halo");
    console.log("Nama Saya Adalah Ninja Ken");
// return
}
// manggil function
introduce();


const number1 = 103;
const number2 = 72;
const number3 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum
const getMax = (a, b, c)=>{
  let max = a;
  if (b > max){
    max = b;
  }else if (c > max){
    max =  c;
  }else {
    console.log("Not Works!!");
  }
  return max;
}
const max = getMax(number1, number2, number3);
console.log(`Nilai Maksimum adalah ${max}`);