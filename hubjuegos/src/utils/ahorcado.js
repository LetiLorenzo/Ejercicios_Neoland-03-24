function id(str){
    return document.getElementById(str);
}

function numRandom(numMin, numMax){
    const amplitudValores = numMax - numMin; /*Esto es el valor más alto - el valor más bajo del 
    random (5 - 0). */
    const valorRandom = Math.floor(Math.random() * amplitudValores) + numMin;
    /*La amplitud de valores es la 
    diferencia entre  el número más alto y el número más bajo. En este caso, los valores
    que tenemos en nuestro array palabras que sería del 0 al 5.
    También se redondea el random * la aplitud de valores con el .round // EL FLOOR REDONDEA EL NÚMERO
    HACIA ABAJO*/
    return valorRandom
}
