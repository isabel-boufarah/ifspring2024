function shiftHeaderLeft() {
    console.log("shift margin left")
    if(window.matchMedia("(min-width: 1040px)").matches){
        console.log("shift header")
        let marginLeft = $("section:nth-of-type(2) .main-column").css("margin-left");
        $(".header").css("margin-left", marginLeft);
    } else{
        console.log("else")
        $(".header").css("margin", "auto");
    }
}

function shiftHeaderRight() {
    console.log("shift margin right")
    if(window.matchMedia("(min-width: 1040px)").matches){
        console.log("shift header")
        let marginRight = $("section:nth-of-type(2) .main-column").css("margin-right");
        $(".header").css("margin-right", marginRight);
    } else{
        console.log("else")
        $(".header").css("margin", "auto");
    }
}