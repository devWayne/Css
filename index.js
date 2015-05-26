/**
 * author:Vi
 * waring: getcomputedstyle is not supported under IE8
 * check http://caniuse.com/#feat=getcomputedstyle
 */


/**
 * @param {Element} el Description
 * @param {String} prop Description
 * @param {String} val Description
 * @return {void} description
 */
function Css(el, prop, val) {
    if (!el) return;
    else if (arguments.length == 2) {
        if (typeof prop == 'object') {
            setCssObj(el, prop)
        } else {
            return getCss(el, prop)
        }
    } else {
        setCss(el, prop, val)
    }
}

/**
 * @param {Element} el Description
 * @param {String} prop Description
 * @return {void} description
 */
function getCss(el, prop) {
    return getComputedStyle ? getComputedStyle(el).getPropertyValue(prop) : false;
}

/**
 * @param {Element} el Description
 * @param {String} prop Description
 * @param {String} val Description
 * @return {void} description
 */
function setCss(el, prop, val) {
    if (typeof(val) == 'string') {
        var css = prop + ":" + val + ';';
        el.style.cssText += css;
    }
}

/**
 * @param {Element} el Description
 * @param {Object} obj Description
 * @return {void} description
 */
function setCssObj(el, obj) {
    for (var key in obj) {
        setCss(el, key, obj[key]);
    }
}

typeof module != 'undefined' ? module.exports = Css : this[Css] = Css;
