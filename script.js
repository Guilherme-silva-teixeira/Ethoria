let game = document.getElementById("game");
let isPosX = 27;
let isPosY = 27;
let player = document.getElementById("player");
let portal = document.getElementById("portalInDiv");
//posições do portal
//Função de colisão pura

function collisionWithOtherElement(element1, element2)
{
    let rect1 = element1.getBoundingClientRect();
    let rect2 = element2.getBoundingClientRect();

    if(rect1.left < rect2.right && rect1.left > rect2.right && rect1.bottom < rect2.top && rect1.top > rect2.bottom)
    {
        console.log("colisão");
    }
}

let bLeft = document.getElementById("bLeft").addEventListener("click",
    function()
    {
        if(isPosX === 0)
        {
            isPosX = 0;
        }
        else
        {
            isPosX -= 27;
        }
        player.style.transition = ".1s ease";
        player.style.marginLeft = isPosX + "px";
        collisionWithOtherElement(player,portal);
    }
);

let bUp = document.getElementById("bUp").addEventListener("click",
    function()
    {
        if(isPosY === 0)
        {
            isPosY = 0;
        }
        else
        {
            isPosY -= 27;
        }
        portal.style.position = "absolute";
        player.style.transition = ".1s ease";
        player.style.marginTop = isPosY + "px";
    }
);

let bRight = document.getElementById("bRight").addEventListener("click",
    function()
    {
        if(isPosX >= 431)
        {
            isPosX = 431;
        }
        else
        {
            isPosX += 27;
        }
        player.style.transition = ".1s ease";
        player.style.marginLeft = isPosX + "px";
    }
);

let bDown = document.getElementById("bDown").addEventListener("click",
    function()
    {
        if (isPosY >= 431)
        {
            isPosY = 431;
        }else
        {
            isPosY += 27;
        }
        player.style.transition = ".1s ease";
        player.style.marginTop = isPosY + "px";
    }
);