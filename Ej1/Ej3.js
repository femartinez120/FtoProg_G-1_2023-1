var salida='';
function generar(){
    var sumPar=0;
    var sumImp=0;
    var sumaNum=0;
    var num=parseInt(document.getElementById('num').value);
    for( var i=1; i<=num; i++){
        sumaNum+=i;
        salida+='<tr><td class="centrar">'+i+'</td></tr>';
        if(i % 2==0){
            sumPar+=i;
        }
        else{
            sumImp+=i;
        }
    }
    salida+='<tr><td class="centrar">'+ 'Suma Pares: '+sumPar+ '</td></tr>';
    salida+='<tr><td class="centrar">'+ 'Suma Impares: '+sumImp+ '</td></tr>';
    salida+='<tr><td class="centrar">'+ 'Suma de Numeros: '+promedio(sumaNum,num)+ '</td></tr>';
    document.getElementById('cuerpo').innerHTML=salida;
}
function promedio(suma,cant){{
    return (suma/cant).toFixed(2);
}

}