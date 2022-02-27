function fungsiKu(){
    var x;
    if(confirm("Silahkan Pilih")==true){
        x = "Terimakasih";
    }else{
        x="Maaf, Saya akan memperbaikinya kembali";
    }
    document.getElementById("pesan").innerHTML=x;
}