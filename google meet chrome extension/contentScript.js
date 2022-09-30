const init = function(){
    const injectElement = document.createElement("button");
    injectElement.className="rustyZone-element";
    injectElement.innerHTML="test";
    document.querySelector("div.R5ccN").appendChild(injectElement);
    // document.body.appendChild(injectElement);
}

function checkIfExists() {
    if (document.querySelector("div.R5ccN") != undefined ) {
        init();
    } else {
        setTimeout(checkIfExists, 1000);
    }
}

checkIfExists();