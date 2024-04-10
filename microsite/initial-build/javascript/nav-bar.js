const navBarTemplate = document.createElement('template');
navBarTemplate.innerHTML = `
<style>
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 32px;

        position: sticky;
        top: 0;

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
        font-size: 24px;
    }
    span {
        font-size: 48px;
        
    }
    a {
        text-decoration: none;
        color: #484E5B;
    }
    a:hover {
        color: #F6DE7A;
    }
    @media (max-width: 750px){
        div {
            flex-direction: column;
        }
    }
</style>

<div> 
    <span>Lana Del Rey</span>
        <ul>   
            <li><a href="index.html">Introduction</a></li>
            <li><a href="life.html">Early Life & Education</a></li>
            <li><a href="career.html">Career</a></li>
            <li><a href="artistry.html">Artistry</a></li>
            <li><a href="image.html">Public Image</a></li>
            <li><a href="impact.html">Impact</a></li>
        </ul>
</div>
`

class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(navBarTemplate.content);
    }
}

customElements.define('nav-bar', NavBar);