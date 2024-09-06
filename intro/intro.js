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
