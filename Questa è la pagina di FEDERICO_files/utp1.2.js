var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");

var utp = new function () {
    var cookieName = '__utpsession';
    var utpHost = 'utp.tiscali.it';
    var data = '';
    var _conf = {
        id: null,
        callback: 'utp.evaluate',
        cookieDomain: null
    };

    this.uptInit = function (conf) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = utp.utpStart(conf);
        } else {
            window.onload = function () {
                if (oldonload) {
                    oldonload();
                }
                utp.utpStart(conf);
            };
        }
    };

    this.getCookieSessionVal = function (session_cookie) {
        if (session_cookie.indexOf("|") == -1) {
            if (session_cookie.indexOf(_conf.id) != -1) {
                data = session_cookie;
                return true;
            } else
                return false;

        } else {
            var params = session_cookie !== '' ? session_cookie.split('|') : null;
            if (params != null) {
                if (_conf.id != null && params[0] == _conf.id) {     
                    data = session_cookie;
                    return true;
                } else {
                    return false;
                }
            }
        }
    };

    this.utpStart = function (conf) {
        if (conf == undefined || conf.id == '' || conf.id == null || conf.id == 'null') {
            _conf.id = null;
        } else {
            _conf = conf;
        }
        if (_conf.tracking == undefined) {
            _conf.tracking = false;
        }
        
        if (_conf.tracking) {
            this.trackUser(_conf);
        }
        
        var session_cookie = this.getCookie(cookieName);
        if (session_cookie != '' && session_cookie != null && session_cookie != undefined) {
            if (session_cookie != '' && _conf.id == null) {
                return this.getCookieSessionVal(session_cookie);
            } else {
                if (this.getCookieSessionVal(session_cookie)) {
                    return true;
                }
            }
        }

        this.callUtp();
    }

    this.callUtp = function () {
        var encId = _conf.id != null ? '?enc_id=' + _conf.id + '&' : '?';
        var callback = 'callback=' + _conf.callback + '&';
        var headLocation = document.getElementsByTagName('head').item(0);
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "http://" + utpHost + "/1/profile" + encId + callback + "h=" + location.hostname + "&u=" + location.href;
        headLocation.appendChild(script);
    }


    this.trackUser = function (conf) {
        var headLocation = document.getElementsByTagName('head').item(0);
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "http://" + utpHost + "/1/track_user?enc_id=" + conf.id + "&h=" + window.location.host + "&u=" + window.location.pathname + '&p=' + window.location.protocol;
        headLocation.appendChild(script);
    }

    this.evaluate = function (user) {
        if (user.sd && user.sd[0] !== "") {
            var cvalue = user.sd;
            utp.setCookie(cvalue[0] + "|" + cvalue[1] + "|" + cvalue[2] + "|" + cvalue[3] + "|" + cvalue[4]);
            data = this.getCookie(cookieName);
        } else if (user.data && user.data != '') {
            if (user.data.length > 40) {
                utp.setCookie(user.data);
                data = this.getCookie(cookieName);
            } 
        } else {
            document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
            return false;
        }
        return true;
    };
    this.setCookie = function (cvalue) {
        var dominio = '';
        if (_conf.cookieDomain != null) {
            dominio = ';domain=' + _conf.cookieDomain;
        }
        document.cookie = cookieName + '=' + cvalue + dominio + ";path=/";
    };

    this.getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++)
        {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    };


};


}

/*
     FILE ARCHIVED ON 05:14:58 Jul 21, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:07:26 Sep 07, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.652
  load_resource: 962.542 (2)
  PetaboxLoader3.resolve: 111.547 (2)
  PetaboxLoader3.datanode: 661.353 (2)
*/