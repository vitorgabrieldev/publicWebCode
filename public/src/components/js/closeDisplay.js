
let togglerOpenDisplay = document.getElementById('togglerOpenDisplay').addEventListener('click', () =>
{this.openDisplay.openDisplayMain();});
let togglercloseDisplay = document.getElementById('btnCloseDisplay').addEventListener('click', () =>
{this.openDisplay.closeDisplayMain();});


var openDisplay = {

    openDisplayMain: function()
    {
        let displayToggler = document.querySelector('#displayToggler').style.height = '90.4%';
    },
    closeDisplayMain: function()
    {
        let displayToggler = document.querySelector('#displayToggler').style.height = '0';
    },

};