let jumlah = [5,5,2,10]
let harga = [10000,14000,20000,9000]
let jmlTotal = 0

for (let index = 0; index < jumlah.length; index++) {
    jmlTotal += (harga[index] * jumlah[index])
}

console.log(`Total = ${jmlTotal}`);