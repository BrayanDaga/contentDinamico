var test1= null;
var test2= null;

$("#boton").click(function(event) {
    $("#capa").load("contenido.html", function(response, status, xhr) {
        if (status == "error") {
            var msg = "Error!, algo ha sucedido: ";
            $("#capa").html(msg + xhr.status + " " + xhr.statusText);
        //	$('#boton').css('color', 'red');
        }

    });
    $("#timer").load("timer.html", function(response, status, xhr) {
        if (status == "error") {
            var msg = "Error!, algo ha sucedido: ";
            $("#timer").html(msg + xhr.status + " " + xhr.statusText);
        //	$('#boton').css('color', 'red');
        }

    });

    $("#boton").hide();
});



$(window).keydown(function(event){
    if(event.keyCode == 116) {
        if(!confirm('Quieres regresar ?')){
            event.preventDefault();
            return false;
        }
        return true;
    }
});


function continuar(){
const mencion ="Color favorito"; 
const respuesta = $('input:radio[name=group1]:checked').val();
test1 = new Test(mencion,respuesta);
//console.log(test1);  
$("#capa").load("contenido2.html", function(response, status, xhr) {
    if (status == "error") {
        var msg = "Error!, algo ha sucedido: ";
        $("#capa").html(msg + xhr.status + " " + xhr.statusText);
    }
});
$("#boton").hide();

}

function finalizar(){
const mencion ="Lenguaje favorito";
const respuesta = $('input:radio[name=group2]:checked').val();
 test2 = new Test(mencion,respuesta);
//console.log(test2)

$("#capa").load("resultado.html", function(response, status, xhr) {
    if (status == "error") {
        var msg = "Error!, algo ha sucedido: ";
        $("#capa").html(msg + xhr.status + " " + xhr.statusText);
    }
});
$("#terminar").hide();		
mostraResultado();
}

function mostraResultado(){
  
   // var content = '<tr>  <td id="mencion1">1</td> <td id="respuesta1">2</td></tr><tr> <td id="mencion2">3</td><td id="">4</td></tr>';
   // $('selector').append(content);
    document.write(test1.mencion);
    document.write(" : ");
    document.write(test1.respuesta);
    
    document.write("<br>");

    document.write(test2.mencion);
    document.write(" : ");
    document.write(test2.respuesta);
  
}



