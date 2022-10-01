const init = function(){
    // horizontal line
    const injectElement = document.createElement("button");
    injectElement.className="rustyZone-element";
    injectElement.innerHTML="Cam";
    injectElement.setAttribute("onclick","clickedBtn()");
    injectElement.id="btn"
    document.querySelector("div.R5ccN").appendChild(injectElement);

    // secondButton
    const injectElement2 = document.createElement("button");
    injectElement2.className="rustyZone-element";
    injectElement2.innerHTML="Text";
    injectElement2.setAttribute("onclick","clickedBtn()");
    injectElement2.id="btn2"
    document.querySelector("div.R5ccN").appendChild(injectElement2);
    
    // thirdButton
    const injectElement3 = document.createElement("button");
    injectElement3.className="rustyZone-element";
    injectElement3.setAttribute("onclick","clickedBtn()");
    injectElement3.innerHTML="Voice";
    injectElement3.id="btn3"
    document.querySelector("div.R5ccN").appendChild(injectElement3);
}

function checkIfExists() {
    if (document.querySelector("div.R5ccN") != undefined ) {
        init();
        document.getElementById("btn").addEventListener("click",function(){
            if(document.getElementById("btn").classList.contains("rustyZone-element-clicked")){
                document.getElementById("btn").classList.add("rustyZone-element");
                document.getElementById("btn").classList.remove("rustyZone-element-clicked");
            }
            else{
            document.getElementById("btn").classList.add("rustyZone-element-clicked");
            document.getElementById("btn").classList.remove("rustyZone-element");
            }
        });

        // forSecondButton
        document.getElementById("btn2").addEventListener("click",function(){
            if(document.getElementById("btn2").classList.contains("rustyZone-element-clicked")){
                document.getElementById("btn2").classList.add("rustyZone-element");
                document.getElementById("btn2").classList.remove("rustyZone-element-clicked");
            }
            else{
            document.getElementById("btn2").classList.add("rustyZone-element-clicked");
            document.getElementById("btn2").classList.remove("rustyZone-element");
            }
        });

        //forThirdButton
        document.getElementById("btn3").addEventListener("click",function(){
            if(document.getElementById("btn3").classList.contains("rustyZone-element-clicked")){
                document.getElementById("btn3").classList.add("rustyZone-element");
                document.getElementById("btn3").classList.remove("rustyZone-element-clicked");
            }
            else{
            document.getElementById("btn3").classList.add("rustyZone-element-clicked");
            document.getElementById("btn3").classList.remove("rustyZone-element");
            }
        });
    } else {
        setTimeout(checkIfExists, 1000);
    }
}

// function clickedBtn(){
//     alert("namsste");
//     document.getElementById("btn").addEventListener("click",function(){
//         document.getElementById("btn").classList.add(".rustyZone-element-clicked");
//         document.getElementById("btn").classList.remove(".rustyZone-element");
//     });
// }

checkIfExists();