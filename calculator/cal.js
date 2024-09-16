const disc=document.getElementById("numbers");


function display(input){
    disc.value+=input;


}
function calculate(){
    try{
        disc.value=eval(disc.value);
    }
    catch(error){
        disc.value="Error"

    }
}
function clearAll(){
    disc.value=" ";

}