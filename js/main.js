const btnAgregar= document.getElementById("btnAgregar");
btnAgregar.addEventListener

const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");

const alertValidaciones = document.getElementById ("alertValidaciones")
const alertValidacionesTexto = document.getElementById ("alertValidacionesTexto")

function validarCantidad(){
    if (txtNumber.value.length==0){
        return false;
    }//length==0
  
    if(isNaN(txtNumber.value)){
        return false;
    }//is nan

    if(Number(txtNumber.value)<=0){
        return false;
    }// equal or negative
    
    return true;
}//validarCantidad()

btnAgregar.addEventListener ("click", function(event){
    //con esto previene lo que un elemento hace por default
    event.preventDefault();
    txtNombre.style.border="";
    txtNumber.style.border="";
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";

    if (txtNombre.value.length<3) {
        txtNombre.style.border="solid red medium";
        alertValidaciones.innerHTML="EL <strong>Nombre</strong> no es correcto";
        alertValidaciones.style.display="block";
    

  
       
    }
          //validar la cantidad
          if(! validarCantidad()){
            txtNumber.style.border="solid red medium";
            alertValidaciones.innerHTML+=" La <strong>Cantidad</strong> no es correcta";
            alertValidaciones.style.display="block";
        }//if lenght
    
    
})// btnAgregar. addEventListener



txtNombre.addEventListener("blur",function(event){
    txtNombre.value=txtNombre.value.trim()
})// txtNombre.addEventListener
