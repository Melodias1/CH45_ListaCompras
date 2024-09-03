const btnAgregar= document.getElementById("btnAgregar");
btnAgregar.addEventListener

const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");

const alertValidaciones = document.getElementById ("alertValidaciones")
const alertValidacionesTexto = document.getElementById ("alertValidacionesTexto")

const tablaListaCompras=document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);
// banderas, al ser true permite agregar los datos a la tabla
let isValid = true;
let contador =0;
let precio = 0;
let costoTotal=0;
let totalEnProductos=0;
let contadorProductos= document.getElementById("contadorProductos");
let precioTotal=document.getElementById("precioTotal")
let productosTotal=document.getElementById("productosTotal")

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

function getPrecio(){
    return Math.round((Math.random()*10000))/100
}

btnAgregar.addEventListener ("click", function(event){
    //con esto previene lo que un elemento hace por default
    event.preventDefault();
    txtNombre.style.border="";
    txtNumber.style.border="";
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    isValid=true

    if (txtNombre.value.length<3) {
        txtNombre.style.border="solid red medium";
        alertValidaciones.innerHTML="EL <strong>Nombre</strong> no es correcto";
        alertValidaciones.style.display="block";
        isValid=false

  
       
    }//if lenght
          
          if(! validarCantidad()){
            txtNumber.style.border="solid red medium";
            alertValidaciones.innerHTML+=" La <strong>Cantidad</strong> no es correcta";
            alertValidaciones.style.display="block";
            isValid=false
        }//validar la cantidad
    
        if(isValid){
            contador++;
            precio=getPrecio();
            let row = `<tr>
                        <td>${contador}</td>
                        <td>${txtNombre.value}</td>
                        <td>${txtNumber.value}</td>
                        <td>${precio}</td>
                       </tr>`;
            cuerpoTabla.insertAdjacentHTML("beforeend",row)
              
            costoTotal+=precio*(Number(txtNumber.value)) ;
            totalEnProductos+=Number(txtNumber.value) 
            contadorProductos.innerText= contador;
            productosTotal.innerText=totalEnProductos;
            precioTotal.innerText="$"+costoTotal.toFixed(2)
            localStorage.setItem("contador", totalEnProductos);
            localStorage.setItem("totalEnProductos", totalEnProductos);
            localStorage.setItem("costoTotal",costoTotal);


            txtNombre.value="";
            txtNumber.value="";
            txtNombre.focus="";
    } //is valid
        
    
})// btnAgregar. addEventListener



txtNombre.addEventListener("blur",function(event){
    txtNombre.value=txtNombre.value.trim()
})// txtNombre.addEventListener


window.addEventListener("load",function(){
   if(this.localStorage.getItem("contador")!= null){
    contador = Number(this.localStorage.getItem("contador"))
   }
    if(this.localStorage.getItem("totalEnProductos")!=null){
        totalEnProductos = Number(this.localStorage.getItem("totalEnProductos"))
    }
        if(this.localStorage.getItem("costoTotal")!=null){
            contador = Number(this.localStorage.getItem("costoTotal"))
        }

        contadorProductos.innerText= contador;
        productosTotal.innerText=totalEnProductos;
        precioTotal.innerText="$"+costoTotal.toFixed(2)

})