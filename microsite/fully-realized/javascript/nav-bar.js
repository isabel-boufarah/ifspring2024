let content = `
<style>
nav {
    z-index: 100;

    svg {
        display: none;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 32px;

        background-color: #CECED6;
    }
    ul {
        display: flex;
        gap: 24px;
        margin: 0;
        padding: 0;
    }
    li {
        list-style-type: none;
        font-size: 30px;
    }
    li:first-of-type{
        display:none;
    }
    span {
        font-size: 48px;
        
    }
    a {
        text-decoration: none;
        color: #484E5B;
        font-family: "Jomhuria", sans-serif;
    }
    a:hover {
        color: #F6DE7A;
    }
    @media (max-width: 900px){
        div {
            flex-direction: column;
        }
    }
    .current{
        text-decoration: underline;
    }

    @media (max-width: 745px){
        svg {
            display: inline;
        }
        div {
            flex-direction: row;
        }
        li:first-of-type {
            display: inline;
        }
        li:not(:first-of-type){
            display:none;
        }

    }
}
.open {
    div {
        display: block;
    }    


    ul {
        flex-direction: column;
        position: relative;
    }

    li:first-of-type {
        position: absolute;
        right: 0;
        top: -39px;
    }

    li:not(:first-of-type){
        float: none;
        display: block;
        text-align: left;
    }
}
</style>

<div> 

    <span>Lana Del Rey</span>
    <ul>
        <li><svg onclick="openMenu()" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H23" stroke="#484E5B" stroke-width="2"/>
        <path d="M0 8H23" stroke="#484E5B" stroke-width="2"/>
        <path d="M0 15H23" stroke="#484E5B" stroke-width="2"/>
        </svg></li>  
        <li><a href="index.html">Introduction</a></li>
        <li><a href="life.html">Early Life & Education</a></li>
        <li><a href="career.html">Discography</a></li>
        <li><a href="artistry.html">Artistry</a></li>
        <li><a href="image.html">Public Image</a></li>
        <li><a href="impact.html">Impact</a></li>
    </ul>
</div>
`
$(document).ready(function(){
    $("nav").append(content);
})

function openMenu(){
   console.log("opened menu");
   $("nav").toggleClass("open");
}

// https://www.w3schools.com/howto/howto_js_media_queries.asp
// remove open class if window gets bigger before the user closes the menu
function removeOpenClass(x) {
    if (x.matches) { // If media query matches
        $("nav").removeClass("open");
    } 
}
  
// Create a MediaQueryList object
var x = window.matchMedia("(min-width: 684px)")
  
// Call listener function at run time
removeOpenClass(x);
  
// Attach listener function on state changes
x.addEventListener("change", function() {
    removeOpenClass(x);
});