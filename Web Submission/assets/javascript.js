
function fungsiKu(){
    var x;
    var nama = prompt("Siapa nama Anda?", "");
    if(confirm("Apakah Anda menyukai Website ini?")==true){
        x = "Terimakasih"+" "+nama;
    }else{
        x="Maaf, Saya akan memperbaikinya kembali" +" "+nama;
    }
    document.getElementById("pesan").innerHTML=x;
}