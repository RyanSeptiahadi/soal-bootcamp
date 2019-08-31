function is_username_valid(username){
    //huruf dari a sampai z
    var lowercaseRe = /[a-z]/g;

    //huruf dari A sampai Z
    var uppercaseRe = /[A-Z]/g;

    //angka dari 0 sampai 9
    var numberRe = /[0-9]/g;

    //panjang karakter
    var car = /[5-9]/g;

    if(is_username_valid('Xrutaf888')){
        alert('Username tidak boleh diawali dengan angka atau karakter special!');
        return true;
    }
    return false;
}

function is_username_valid(password){
    //huruf dari a sampai z
    var lowercaseRe = /[a-z]/g;

    //huruf dari A sampai Z
    var uppercaseRE = /[A-Z]/g;
    var minCar = 1;

    //angka dari 0 sampai 9
    var numberRe = /[0-9]/g;
    var minCar = 1;

    //karakter spesial
    var specialRe = /[@#%*$-=]/g;
    var minCar = 1;

    //panjang karakter
    var minCar = 8;

    if(is_password_valid('passW0rd=')){
        alert('harus memiliki karakter simbol “=”!')
        return true;
    }
    return false
}
