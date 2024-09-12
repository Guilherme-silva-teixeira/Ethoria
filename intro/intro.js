function gameStarts()
{
    let outGameDiv = document.getElementById("main-page");
    outGameDiv.innerHTML = `
        <div id="EthoriaInitialPage">
            <div id="window">
                <div id="title"><h1>Ethoria</h1></div>
                <div id="buttons">
                    <button id="startGame">Iniciar Jogo</button>
                    <button id="credits">Créditos</button>
            </div>
        </div>
    `;
    let EthoriaInitialPage = document.getElementById("EthoriaInitialPage");
    EthoriaInitialPage.style.transition = "0.3s ease";
    EthoriaInitialPage.style.height = "105%";
    EthoriaInitialPage.style.width = "100%";
    EthoriaInitialPage.style.position = "absolute";
    EthoriaInitialPage.style.display = "flex";
    EthoriaInitialPage.style.justifyContent = "center";
    EthoriaInitialPage.style.alignItems = "center";
    let window = document.getElementById("window");
    window.style.position = "absolute";
    window.style.display = "flex";
    window.style.justifyContent = "center";
    window.style.flexDirection = "column";
    window.style.alignItems = "center";
    EthoriaInitialPage.style.zIndex = 3;
    EthoriaInitialPage.style.background = "#000";
    let buttons = document.getElementById("buttons");
    buttons.style.display = "flex";
    buttons.style.flexDirection = "column";
    window.style.transition = "0.3s ease";//Era para ter adicionado essa linha lá no css
    buttons.style.transition = "0.3s ease";//acho que vai rodar

    let firstB = document.getElementById("startGame").addEventListener("mousedown",
        function()
        {
            ifGameButtonStartClicked();//função para rodar o game
            //executar função de inicio dos slides do jogo
            if(ifGameButtonStartClicked() == true)
            {
                textBox();
            }
            this.style.transform = "translateY(3px)";
            this.addEventListener("mouseup",
                function()
                {
                    this.style.transform = "translateY(0px)";
                }
            );
        }
    );

    let secondB = document.getElementById("credits").addEventListener("mousedown",
        function()
        {
            //executar a função para rodar os créditos
            this.style.transform = "translateY(3px)";
            this.addEventListener("mouseup",
                function()
                {
                    this.style.transform = "translateY(0px)";
                }
            );
        }
    );
}

function ifGameButtonStartClicked()
{
    let ethoriaPage = document.getElementById("EthoriaInitialPage");
    let window = document.getElementById("window");
    let buttons = document.getElementById("buttons");
    ethoriaPage.style.transition = "0.3s ease";
    window.style.transition = "0.3s ease";
    buttons.style.transition = "0.3s ease";
    ethoriaPage.style.height = "0px";
    ethoriaPage.style.width = "0px";
    ethoriaPage.style.position = "absolute";
    ethoriaPage.style.zIndex  = -3;
    ethoriaPage.style.display = "none";
    ethoriaPage.style.justifyContent = "none";
    ethoriaPage.style.alignItems = "none";
    window.style.position = "absolute";
    window.style.display = "none";
    window.style.justifyContent = "none";
    window.style.alignItems = "none";
    window.style.flexDirection = "none";
    window.style.zIndex = -3;
    ethoriaPage.style.background = "#0000";
    window.style.background = "#0000";
    buttons.style.background = "#0000";
    buttons.style.height = "0px";
    buttons.style.width = "0px";
    buttons.style.border = "0";
    return true;
}

function textBox()
{
    let imgs = new Array(17);
    let texts = 0;
    let title = ["O inicio",""];
    let description = 
    [
        `Há muito tempo, em um reino distante chamado Ethoria,
         os sábios eram conhecidos por sua habilidade em conjurar
         magia ancestral arcana, uma arte que combinava conhecimento arcano 
         com ética e moralidade. No entanto, um grande dilema
         assolava os corações dos habitantes de Ethoria.`,
         //segundo parágrafo
         `A sociedade de Ethoria era dividida em duas facções
          principais: os Puristas e os Progressistas. Os Puristas
          acreditavam na estrita adesão às tradições éticas ancestrais, 
          enquanto os Progressistas defendiam a evolução das
          práticas éticas para se adaptarem aos tempos modernos.`,
         //terceiro parágrafo
         `A contenda entre essas facções tornou-se mais intensa 
         quando uma crise ameaçou o reino. Uma força maligna, 
         conhecida como a Sombra Eterna, começou a se espalhar, 
         corrompendo a terra e ameaçando destruir tudo em seu 
         caminho.`,
         //quarto parágrafo
         `Os Puristas argumentavam que a única maneira de derrotar 
         a Sombra Eterna era invocar os rituais ancestrais, 
         que exigiam sacrifícios severos e o uso de magia proibida 
         há muito tempo. Eles acreditavam que, ao seguir estritamente 
         os ensinamentos éticos do passado, poderiam purificar a terra 
         e salvar o reino.`,
    ];

    //se o  addeventlistener() não funciona

    function incrementL()
    {
        texts = (texts + 1);
        //return texts+=1;
    }

    let windowMessage = document.getElementById("top");

    let leftButton = document.getElementById("leftButton").addEventListener("mousedown",
        function()
        {
            incrementL();
            this.style.transform = "translateY(3px)";
            let leftButtonUp = document.getElementById("leftButton").addEventListener("mouseup",
                function()
                {
                    this.style.transform = "translateY(0px)";
                }
            );
        }
    );
    
    let rigthButton = document.getElementById("rigthButton").addEventListener("mousedown",
        function()
        {
            texts+=1;
            this.style.transform = "translateY(3px)";
            let rigthButtonUp = document.getElementById("rigthButton").addEventListener("mouseup",
                function()
                {
                    this.style.transform = "translateY(0px)";
                }
            );
        }
    );

    //verificar o total de textos
    if (texts == 0)
    {
        windowMessage.innerHTML = `
        <div id="message">
            <div id="title">
                <h1>${title}</h1>
                </div>
                <div id="img">
                    <img src="${imgs[0]}"/>
                    </div>
            <div id="description">
                <p>${description[0]}</h1>
                </div>
            </div>
                `;
    }
    else if(texts == 1)
    {
        windowMessage.innerHTML = `
        <div id="message">
            <div id="title">
                <h1>${title}</h1>
                </div>
                <div id="img">
                    <img src="${imgs[1]}"/>
                    </div>
            <div id="description">
                <p>${description[1]}</p>
                </div>
            </div>
        `;
    }
    else if (texts == 2)
    {
        windowMessage.innerHTML = `
        <div id="message">
            <div id="title">
                <h1>${title}</h1>
                </div>
                <div id="img">
                    <img src="${imgs[2]}"/>
                    </div>
            <div id="description">
                <p>${description[2]}</p>
                </div>
            </div>
        `;
    }
    else if (texts == 4)
    {
        windowMessage.innerHTML = `
        <div id="message">
            <div id="title">
                <h1>${title}</h1>
                </div>
                <div id="img">
                    <img src="${imgs[3]}"/>
                    </div>
            <div id="description">
                <p>${description[3]}</p>
                </div>
            </div>
        `;
    }

    let menssagem = document.getElementById("message");
    let desc = document.getElementById("description");
    windowMessage.style.color = "#fff";
    title.style.color = "#fff";
    desc.style.color = "#fff";
    menssagem.style.color = "#fff";
    windowMessage.style.padding = "30px";
    desc.style.padding = "33px";
}
