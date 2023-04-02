# LOOPING - JavaScript

Looping is a statement or instruction given to the computer so that it wants to do something, whether it's processing data, displaying data, or something else repeatedly.

## Example Exercese LOOPING

(You can translate from "Indonesian" to your language.)  

Exercise No. 1:  
Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
* Buat sebuah program yang menampilkan teks "User ke - 1 … User ke - 100" pada setiap baris di halaman HTML.
* Lakukan FOR LOOP pada Javascript.

Exercise No. 2:  
Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
* Nilai awal = 0.
* Pengulangan = 10 kali.
* Nilai awal ditambah 2 setiap pengulangan.
* Tampilan hasil penambahan pada setiap pengulangan.

Exercise No. 3:    
Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
* Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
* Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan.

Exercise No. 4:  
Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
* Berikan teks ‘Apakah anda mau mengulang’ pada box confirm.
* Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama.
* Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user).

Exercise No. 5:  
Buat sebuah program kuis
* Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
* Lakukan pengecekan apakah jawaban dari user sudah benar
* Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
* Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar

## Syntax Exercise No. 1

```javascript
for (let user = 1; user <= 100; user++) {
    console.log('User Ke-' + user)
}
```
Output :

![img](Document/Exercise%20No.%201.png "Exercise No. 1")

## Syntax Exercise No. 2

```javascript
let nilaiAwal = 0;

for (let i = 1; i <= 10; i++) {
  nilaiAwal += 2;
  console.log(`Hasil penambahan ke-${i}: ${nilaiAwal}`);
}
```
Output :

![img](Document/Exercise%20No.%202.png "Exercise No. 2")

## Syntax Exercise No. 3

```javascript
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + ' = bilangan genap');
  } else {
    console.log(i + ' = bilangan ganjil');
  }
}
```
Output :

![img](Document/Exercise%20No.%203.png "Exercise No. 3")

## Syntax Exercise No. 4

```javascript
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
```
Output :

![img](Document/Exercise%20No.%204.png "Exercise No. 4")

## Syntax Exercise No. 5

```javascript
let jawaban = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");

while (jawaban.toLowerCase() !== "impact byte") {
  jawaban = prompt("Maaf, jawaban kamu salah. Silakan coba lagi: ");
}

alert("Selamat, jawaban kamu benar!");
```
Output :

![img](Document/Exercise%20No.%205.png "Exercise No. 5")

## Support

Hello my name is "Randi Nur Fatah".  
You can contact me if you need help:  
email: randiraa.ra@gmail.com

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)