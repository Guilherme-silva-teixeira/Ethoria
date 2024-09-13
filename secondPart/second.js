let game = document.getElementById("game");
let isPosX = 0;
let isPosY = 0;
let player = document.getElementById("player");
let portalOutDiv = document.getElementById("portalOutDiv");

function Collision(element1posX , element1posY, element2posX, element2posY)
{
    let portalOutDiv = document.getElementById("portalOutDiv");
    portalOutDiv.innerText = element1posX +"\n"+ element1posY +"\n"+ element2posX +"\n"+ element2posY;
    if
    (
        element1posX >= element2posX && element1posY >= element2posY
    )
    {
        portalOutDiv.innerText = "colisão";
    }
}

let bLeft = document.getElementById("bLeft").addEventListener("click",
    function()
    {
        if(isPosX == 0)
        {
            isPosX -= 0;
        }
        else
        {
            isPosX -= 27;
        }
        portalOutDiv.innerHTML ="X: "+ isPosX + "\n" +"Y: "+ isPosY;
        player.style.transition = ".1s ease";
        player.style.transform = "translate("+isPosX+"px ," + isPosY + "px)";
    }
);

let bUp = document.getElementById("bUp").addEventListener("click",
    function()
    {
        if(isPosY == 0)
        {
            isPosY -= 0;
        }
        else
        {
            isPosY -= 27;
        }
        portalOutDiv.innerHTML ="X: "+ isPosX + '\n' +"Y: "+ isPosY;
        player.style.transition = ".1s ease";
        player.style.transform = "translate("+isPosX+"px ," + isPosY + "px)";
    }
);

let bRight = document.getElementById("bRight").addEventListener("mouseup",
    function()
    {
        player.style.backgroundPosition = "0 108px";
        player.classList.add("andando");
        if(isPosX >= 431)
        {
            isPosX += 0;
        }
        else
        {
            isPosX += 27;
        }
        portalOutDiv.innerHTML = isPosX+'\n'+isPosY;
        player.style.transition = ".1s ease";
        player.style.transform = "translate("+isPosX+"px ," + isPosY + "px)";
        let bRightUp = document.getElementById("bRight").addEventListener("mousedown",
            function()
            {
                player.style.classList.remove("andando");
            }
        );
    }
);

let bDown = document.getElementById("bDown").addEventListener("mouseup",
    function()
    {
        player.style.backgroundPosition = "0 0";
        player.classList.add("andando");
        if (isPosY >= 431)
        {
            isPosY += 0;
        }else
        {
            isPosY += 27;
        }
        portalOutDiv.innerHTML = isPosX+'\n'+isPosY;
        player.style.transition = ".1s ease";
        player.style.transform = "translate("+isPosX+"px ," + isPosY + "px)";
        let bDownUp = document.getElementById("bDown").addEventListener("mousedown",
            function()
            {
                player.classList.remove("andando");
            }
        );
    }
);