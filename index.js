var correr = document.getElementById('btncorrer')
var trotar = document.getElementById('btntrotar')
var caminar = document.getElementById('btncaminar')
var actividad = document.getElementById('actividad')
var hombre = document.getElementById('btnhombre')
var mujer = document.getElementById('btnmujer')
var peso = document.getElementById('peso')
var calcular = document.getElementById('btnenviar')
var  calorias = document.getElementById('result')
var recar = document.getElementById('recargar')

var valorcorrer = 0;
var valortrotar = 0;
var valorcaminar = 0;

correr.addEventListener("click",function(){
    if(valorcorrer === 0 && valortrotar === 0 && valorcaminar === 0){
        valorcorrer = 3;
        valortrotar = 0;
        valorcaminar = 0;
        correr.classList.add("coloring1")
        trotar.classList.remove("coloring1")
        caminar.classList.remove("coloring1")
    }else{
        valorcorrer = 0
        correr.classList.remove("coloring1")
        trotar.classList.remove("coloring1")
        caminar.classList.remove("coloring1")
    }

    console.log("correr " + valorcorrer+ " trotar " + valortrotar + " caminar " + valorcaminar)
})

trotar.addEventListener("click",function(){
    if(valorcorrer === 0 && valortrotar ===0 && valorcaminar === 0){
        valortrotar = 2; 
        valorcorrer = 0;
        valorcaminar = 0;
        trotar.classList.add("coloring1")
        correr.classList.remove("coloring1")
        caminar.classList.remove("coloring1")
    }else{
        valorcorrer = 0;
        valortrotar = 0;
        valorcaminar = 0;
        trotar.classList.remove("coloring1")
        correr.classList.remove("coloring1")
        caminar.classList.remove("coloring1")
    }

    console.log("correr " + valorcorrer+ " trotar " + valortrotar + " caminar " + valorcaminar)
})

caminar.addEventListener("click",function(){

    if(valorcorrer === 0 && valortrotar === 0 && valorcaminar === 0){
        valorcaminar = 1;
        valorcorrer = 0;
        valortrotar = 0;
        caminar.classList.add("coloring1")
        correr.classList.remove("coloring1")
        trotar.classList.remove("coloring1")
    }else{
        valorcaminar = 0;
        valorcorrer = 0;
        valortrotar = 0;
        caminar.classList.remove("coloring1")
        correr.classList.remove("coloring1")
        trotar.classList.remove("coloring1")
    }
    console.log("correr " + valorcorrer+ " trotar " + valortrotar + " caminar " + valorcaminar)
})

var butonof = 0;
var butonof2 = 0;

hombre.addEventListener("click",function(){
    if(butonof == 0 && butonof2 == 0){
        butonof = 1;
        hombre.classList.add("coloring1");
        mujer.classList.remove("coloring1");
    }else{
        butonof = 0;
        hombre.classList.remove("coloring1");
        mujer.classList.remove("coloring1");

    }
})

mujer.addEventListener("click",function(){
    if(butonof == 0 && butonof2 == 0){
        butonof2 = 1;
        mujer.classList.add("coloring1");
        hombre.classList.remove("coloring1");
    }else{
        butonof2 = 0;
        hombre.classList.remove("coloring1");
        mujer.classList.remove("coloring1");

    }
})

const valueactividad= actividad.value;
const valuepeso = peso.value;

calcular.addEventListener("click",function btncaluclarr(){
    let valueactividad= actividad.value;
    let valuepeso = peso.value;

    if(valorcorrer == 3){
        const resultado = ((valueactividad * valorcorrer) / 60) * (0.0385 * valuepeso)
        calorias.value  = Math.round(resultado);
    }else if(valortrotar == 2){
        const resultado2 = ((valueactividad * valortrotar) / 60) * (0.0385 * valuepeso)
        calorias.value = Math.round(resultado2);
    }else if(valorcaminar == 1){
        const resultado3 = ((valueactividad * valorcaminar)/60) * (0.0385 * valuepeso)
        calorias.value = Math.round(resultado3);
    }else{
        calorias.value = "verifique su valor"
    }
})

recar.addEventListener("click",function(){
    location.reload();
})