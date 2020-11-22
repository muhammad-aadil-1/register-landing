(function(){
    var fx = document.createElement('iframe');
    var l = this || self;
    var f = (l[l['ExinitiRegisterWidget']].q).filter(a => a[0] == 'render')[0];
    var p = f[2] || 'RegisterDemo';
    fx.scrolling = "no";
    fx.setAttribute('frameborder','0');
    fx.setAttribute('width','100%');
    fx.src = "https://cp-new-ui.azurewebsites.net/"+p+"?url=https://cors-anywhere.herokuapp.com/https://exiniti.blob.core.windows.net/public/accuindex.css&ref=null";
    document.getElementById(f[1]).appendChild(fx);
    fx.setAttribute('height', '1020px');
    window.addEventListener('message', e=> {
        var fxHight = (e.data.tab === 1) ? '540px' : '1020px';
        fx.setAttribute('height', fxHight);
    });
})(window);