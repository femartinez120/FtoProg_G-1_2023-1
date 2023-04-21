document.getElementById('act').style.display='none';
let myArrayEst=[];
let objpersona={
    ced:null,
    nom:null,
    ape:null,
    dir:null,
    n1:null,
    n2:null,
    n3:null,
}

function agregar(){
    let salida="";
    objpersona.ced=document.getElementById("ced").value;
    objpersona.nom=document.getElementById("nom").value;
    objpersona.ape=document.getElementById("ape").value;
    objpersona.dir=document.getElementById("dir").value;

    salida='<tr><td>'+objpersona.ced+'</td><td>'+objpersona.nom+'</td><td>'+
       objpersona.ape+'</td><td>'+objpersona.dir+'</td><td>'
       + '<button onclick="editar()">Editar</button>'
       + '<button onclick="eliminar()">Eliminar</button>'
       +'</td></tr>';
       document.getElementById("cuerpo").innerHTML=salida;
       limpiarCajas();

}

function limpiarCajas(){
    document.getElementById("ced").value="";
    document.getElementById("nom").value="";
    document.getElementById("ape").value="";
    document.getElementById("dir").value="";

}

function modificar(){
    let sel=parseInt(document.getElementById("sel").value);
    console.log(sel)
    switch(sel){
        case 0:objpersona.ced=document.getElementById("ced").value;break;
        case 1:objpersona.nom=document.getElementById("nom").value;break;
        case 2:objpersona.ape=document.getElementById("ape").value;break;
        case 3:objpersona.dir=document.getElementById("dir").value;break;
    }
    salida='<tr><td>'+objpersona.ced+'</td><td>'+objpersona.nom+'</td><td>'+
       objpersona.ape+'</td><td>'+objpersona.dir+'</td></tr>';
       document.getElementById("cuerpo").innerHTML=salida;
       limpiarCajas();
}
function eliminar(){
    objpersona.ced=null;
    objpersona.nom=null;
    objpersona.ape=null;
    objpersona.dir=null;
    document.getElementById("cuerpo").innerHTML=null;

}
function editar(){
    document.getElementById('agr').style.display='none';
    document.getElementById('act').style.display='block';
    document.getElementById('ced').value=objpersona.ced;
    document.getElementById('nom').value=objpersona.nom;
    document.getElementById('ape').value=objpersona.ape;
    document.getElementById('dir').value=objpersona.dir;
}
function actualizar(){
    document.getElementById('agr').style.display='block';
    document.getElementById('act').style.display='none';
    objpersona.ced=document.getElementById("ced").value;
    objpersona.nom=document.getElementById("nom").value;
    objpersona.ape=document.getElementById("ape").value;
    objpersona.dir=document.getElementById("dir").value;

    salida='<tr><td>'+objpersona.ced+'</td><td>'+objpersona.nom+'</td><td>'+
       objpersona.ape+'</td><td>'+objpersona.dir+'</td><td>'
       + '<button onclick="editar()">Editar</button>'
       + '<button onclick="eliminar()">Eliminar</button>'
       +'</td></tr>';
       document.getElementById("cuerpo").innerHTML=salida;
       limpiarCajas();
}