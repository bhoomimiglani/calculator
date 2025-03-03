let buttons=document.querySelector(".buttons");
let inputField=document.querySelector("#display");
buttons.addEventListener("click",function(event){
    let clickedButton=event.target;
    if(clickedButton.tagName=="BUTTON"){
        let buttonValue=clickedButton.innerHTML;
        if(buttonValue=="=")
        {
            try{
                inputField.value=eval(inputField.value);
            }
            catch(error){
                inputField.value="Error";
            }
        }
    
    else if(buttonValue=="C"){
        inputField.value="";
    }
    else{
        inputField.value+=buttonValue;
    }
}
})
