let footerContent = `
    <style>
    body {
        margin-bottom: 0;
    }
    footer {
        div {
            background-color: #484E5B;
            color: #CECED6;
            font-size: 16px;
            font-weight:300;
            padding: 40px 0;
        }
        ul {
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
          
        }
        li {
            list-style: none;  
        }
        .label {
            font-weight: 400;
        }
    }
    </style>
    <div>
        <ul class="main-column">
            <li><span class="label">Creative Director:</span> Soomin Kim</li>
            <li><span class="label">Desiger & Developer:</span> Isabel Boufarah</li>
            <li>Interaction Foundations 2024 - Washington University in St. Louis</li>
            <li>Copy from Wikipedia</li>
        </ul>
    </div>
`

$(document).ready(function(){
    $("footer").append(footerContent);
})