console.log('------------------------------')
console.log('Exercise - LOOP No. 1')
console.log('------------------------------')

for (let user = 1; user <= 100; user++) {
    console.log('User Ke-' + user)
}

console.log('------------------------------')
console.log('Exercise - LOOP No. 2')
console.log('------------------------------')

let nilaiAwal = 0;

for (let i = 1; i <= 10; i++) {
  nilaiAwal += 2;
  console.log(`Hasil penambahan ke-${i}: ${nilaiAwal}`);
}

console.log('------------------------------')
console.log('Exercise - LOOP No. 3')
console.log('------------------------------')

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + ' = bilangan genap');
  } else {
    console.log(i + ' = bilangan ganjil');
  }
}

console.log('------------------------------')
console.log('Exercise - LOOP No. 4')
console.log('------------------------------')

let count = 0;

while (true) {
  const result = confirm("Apakah anda mau mengulang?");
  
  if (result) {
    count++;
  } else {
    alert(`Perulangan sudah dilakukan sebanyak ${count} kali`);
    break;
  }
}