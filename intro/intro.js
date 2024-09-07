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
    let title = "teste";
    let description = "descrição";

    let windowMessage = document.getElementById("top");
    windowMessage.innerHTML = `
        <div id="message">
            <div id="title">
                <h1>${title}</h1>
                </div>
            <div id="description">
                <p>${description}</h1>
                </div>
    `;

    let leftButton = document.getElementById("leftButton").addEventListener("mousedown",
        function()
        {
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
            this.style.transform = "translateY(3px)";
            let rigthButtonUp = document.getElementById("rigthButton").addEventListener("mouseup",
                function()
                {
                    this.style.transform = "translateY(0px)";
                }
            );
        }
    );
}
