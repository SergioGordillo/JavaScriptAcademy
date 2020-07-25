function desplegarMenu(){

    let ancla=document.getElementsByClassName("nav-enlace"); //Cojo la clase sobre la que quiero actuar. Al ser varios enlaces, lo que estoy creando es un array, que puedo recorrer

    for (let i = 0; i < ancla.length; i++) {
        ancla[i].classList.toggle("desaparece"); //Classlist es una propiedad que me permite manejar las clases de CSS. Con toggle, si sólo hay un parámetro como ahora, le da el valor inverso booleano, es decir: si es true lo pone a false, y si es false lo pone a true.
    }

    let anclaContacto=document.getElementsByClassName("nav-enlace-especifico"); //Cojo la clase sobre la que quiero actuar. Al ser varios enlaces, lo que estoy creando es un array, que puedo recorrer

    for (let i = 0; i < anclaContacto.length; i++) {
        anclaContacto[i].classList.toggle("desaparece"); //Classlist es una propiedad que me permite manejar las clases de CSS. Con toggle, si sólo hay un parámetro como ahora, le da el valor inverso booleano, es decir: si es true lo pone a false, y si es false lo pone a true.
    }


}