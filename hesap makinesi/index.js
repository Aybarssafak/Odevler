document.getElementById("toplam").addEventListener("click", function(){
    let ilkSayı = document.getElementById("ilksayı").value;
    let ikinciSayı = document.getElementById("ikincisayı").value;
    let toplam = parseInt(ilkSayı) + parseInt(ikinciSayı);
    document.getElementById("sonuc").innerHTML = toplam;
})
/* parseInt kullnmamın sebebi eğer direk olarak sayıyı yazarsam 3 + 3 = 33 çıkıyor o yüzden */
document.getElementById("çıkarma").addEventListener("click", function(){
    let ilkSayı = document.getElementById("ilksayı").value;
    let ikinciSayı = document.getElementById("ikincisayı").value;
    let çıkarma = parseInt(ilkSayı) - parseInt(ikinciSayı);
    document.getElementById("sonuc").innerHTML = çıkarma;
})
document.getElementById("çarpma").addEventListener("click", function() {
   let ilkSayı = document.getElementById("ilksayı").value;
    let ikinciSayı = document.getElementById("ikincisayı").value;
    let çarpma = parseInt(ilkSayı) * parseInt(ikinciSayı);
    document.getElementById("sonuc").innerHTML = çarpma; 
})
document.getElementById("bölme").addEventListener("click", function(){
    let ilkSayı = document.getElementById("ilksayı").value;
    let ikinciSayı = document.getElementById("ikincisayı").value;
    let bölme = parseInt(ilkSayı) / parseInt(ikinciSayı);
    document.getElementById("sonuc").innerHTML = bölme;
})
