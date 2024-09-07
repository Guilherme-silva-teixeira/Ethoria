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

    let firstB = document.getElementById("startGame").addEventListener("mousedown",
        function()
        {
            ifGameButtonStartClicked();
            //executar função de inicio dos slides do jogo
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
    let wwindow = document.getElementById("window");
    let buttons = document.getElementById("buttons");
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
}

function textBox()
{

}
