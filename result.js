let name= prompt('Your Name');
 let roll= prompt ('Your Roll Number');
 let marks= prompt ('Put your Marks')
 if (marks >=0 && marks<=32) {
console.log(`my name is ${name} my roll ${roll} apni fail korechen`);
 } else if (marks>= 33 && marks<40) {
console.log(`my name is ${name} my roll ${roll} apni pass korechen Apni D Peyechen`);

 } else if (marks>= 40 && marks<50) {
    console.log(`my name is ${name} my roll ${roll} apni pass korechen Apni c Peyechen`);
} else if (marks>= 50 && marks<60) {
    console.log(`my name is ${name} my roll ${roll} apni pass korechen Apni B Peyechen`);
} else if (marks>= 60 && marks<70) {
    console.log(`my name is ${name} my roll ${roll} apni pass korechen Apni A- Peyechen`);
} else if (marks>= 70 && marks<80) {
    console.log(`my name is ${name} my roll ${roll} apni pass korechen Apni A Peyechen`);
} else if (marks>= 80 && marks<90) {
    console.log(`my name is ${name} my roll ${roll} apni pass korechen Apni A+ Peyechen`);
} else if (marks>= 90 && marks<100) {
    console.log(`my name is ${name} my roll ${roll} apni pass korechen Apni GOLDEN A+ Peyechen`);
}