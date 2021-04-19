function puedeSubir(altura, vieneAcompanado, cumplioNormas){
    if(altura > 140 && altura < 200 && cumplioNormas == true){
        return true + ': Puede subir'
    }else if(altura > 140 && altura < 200 && cumplioNormas == false){
        return false + ': Tiene la altura adecuada pero incumplió las normas del parque'
    }else if (altura < 140 && altura > 120 && vieneAcompanado == true && cumplioNormas == false){
        return false + ': No puede subir, por más que tenga acompañante, incumplió las normas'
    }else if(altura < 140 && altura > 120 && vieneAcompanado == true){
        return true + ': Puede subir, en compañía'
    }else if (altura < 120 || altura > 200 || (altura < 140 && altura > 120 && vieneAcompanado == false)){
        return false + ': No puede subir'
    }
}
console.log(puedeSubir(150, true, false));
console.log(puedeSubir(130, true, true));
console.log(puedeSubir(110, true, false));
console.log(puedeSubir(210, true, true));
console.log(puedeSubir(160, false, true));