let harga = [3000, 10000, 4500, 5000]
let jumlah = [20, 8, 10, 5]
let jmlTotal = 0
for (let i = 0; i < jumlah.length; i++) {
    jmlTotal += (harga[i] * jumlah[i])
}
jmlTotal *= 11/10
let finale = Math.floor(jmlTotal)
console.log(`Total = ${finale}`);
