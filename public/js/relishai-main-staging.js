(function() {
    var p = document.createElement("script");
    var m = document.createElement("script");
    var c = document.createElement("link");
    var d = document.createElement("link");
    
    function add_relish_assets(plugin_config_file) {
        p.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(p);
        p.onload = function() {
            m.type = "text/javascript";
            m.src = "https://relishai.storage.googleapis.com/relishai-assistant.min.js";
            m.defer = true;
            document.getElementsByTagName("head")[0].appendChild(m);
        }
        p.src = plugin_config_file;
        c.rel = 'stylesheet';
        c.href = 'https://relishai.storage.googleapis.com/relishai-assistant.css';
        c.type = 'text/css';
        document.getElementsByTagName("head")[0].appendChild(c);
        d.rel = 'stylesheet';
        d.href = 'https://relishai.storage.googleapis.com/relish-ai-bigcommerce-probioticmaker.css';
        d.type = 'text/css';
        document.getElementsByTagName("head")[0].appendChild(d);
    }
    
    function load_relish_assistant(plugin_config_file) {
        if(typeof(jQuery) == 'undefined') {
            var j = document.createElement("script");
            j.type = 'text/javascript';
            j.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
            j.defer = true;
            j.onload = function() {
                add_relish_assets(plugin_config_file);
            }
            document.getElementsByTagName("head")[0].appendChild(j);
        } else {
            add_relish_assets(plugin_config_file);
        }
    }
    load_relish_assistant('https://relishai.storage.googleapis.com/probioticmaker-config.js');
})();
