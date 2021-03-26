const arr =  [
    {
        firstName: 'A',
        lastName: 'B'
    },
    {
        firstName: 'A',
        lastName: 'B'
    },
    {
      firstName: 'C',
      lastName: 'A'  
    },
    {
        firstName: 'A',
        lastName: 'D',
    },
    {
        firstName: 'C',
        lastName: 'B',
    },
];
let k = 0;
for (let i in arr) {
   if (arr[i].lastName == 'B') {
        console.log('B');
        k++;
   }
}

for (let i in arr) {
    if (arr[i].firstName == 'C') {
         arr[i].fullName = arr[i].firstName + ' ' +arr[i].lastName;
         console.log(arr[i]);
    }
 }

 for (let i in arr) {
    if (arr[i].lastName == 'D') {
         arr[i].firstName = 'E';
         arr[i].lastName = 'F';
         arr[i].fullName = 'E-F';
         console.log('re', arr[i]);
    }
 }