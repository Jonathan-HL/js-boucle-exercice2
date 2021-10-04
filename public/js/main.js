// Exo 1
// let multiplicateur = 5;
// for (let i = 0; i <= 9; i++) {
//     console.log(multiplicateur+ "x"+i + "=" +(multiplicateur*i));    
// }
// Exo 2
// let multiplicateur2 = 5;
// for (let i = 0; i < 9; i +=2) {
//     console.log(multiplicateur2+ "x" +i + "=" +(multiplicateur2*i));    
// }
// Exo 3
// let boucle = 0;
// for (i = 20; i >= boucle; i--) {
//     if (i%2 === 0) {
//         console.log(i);
//     }
// }
// Exo 4
// let tab1 = ["ayhan","wassim","hilal","philipe","heredia","george","lol","lal","lil"];
// let tab2 = []
//     tab1.forEach((tab) => {
//         if (tab.length >= 5) {
//             tab1.push(tab)
//             console.log(`grand tableau : ${tab1}`);
//         }else{
//             tab2.push(tab)
//             console.log(`petit tableau : ${tab2}`);
//         }
//     });
// Exo 5
// let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
// let grossesSommes = [];
// sommes.forEach(element => {
    
//     if (element > 60) {
//         grossesSommes.push(element)
//         console.log(grossesSommes);
//     }
// });
// Exo 6
// let donnees = [14, 7, 97, {}, "247", 67, 101, true, 34, 78, ['tableau'], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];
// let typeString = [];
// let typeNumber = [];
// let typeObject = [];
// let typeAutre = [];

// donnees.forEach((el,i) => {
//     if (typeof el == 'string') {
//         console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
//         typeString.push(el)
//         // donnees.splice(i, 1)
        
//     } else if (typeof el === 'number') {
//         console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
//         typeNumber.push(el)
//         console.log(donnees);
//         // donnees.splice(i, 1)

//     } else if (typeof el == "object") {
//         console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
//         typeObject.push(el)

//     } else {
//         console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
//         typeAutre.push(el)
//     }
// });

// console.log(typeString);
// console.log(typeNumber);
// console.log(typeObject);
// console.log(typeAutre);
// console.log(donnees);