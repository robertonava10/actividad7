function operacion(num1,num2){
    //console.log(num1+num2);
    return num1+num2;
}
console.log(operacion(2,3));

const operacionFlecha = () => {
valor1=document.getElementById('valor1').value;
valor2=document.getElementById('valor2').value;
operacion=document.getElementById('operacion').value;


if(operacion==1){
   var resultado2 =parseInt(valor1)+parseInt(valor2);
}
if(operacion==2){
    resultado2 = parseInt(valor1)-parseInt(valor2);
 }
 if(operacion==3){
    resultado2 = parseInt(valor1)*parseInt(valor2);
 }
console.log(operacion);
document.getElementById('resultado').innerHTML=resultado2;


}


