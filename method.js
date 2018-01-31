(function (context) {
	
	"use strict";
	
    var JSHelper = {};
    var const_object_number = '[object Number]', const_object_string = '[object String]',
        const_object_object = '[object Object]', const_object_array = '[object Array]',
        const_object_function = '[object Function]', const_object_boolean = '[object Boolean]';
    var const_undefined = 'undefined',
        CONST_DIV = 'DIV', CONST_INPUT = 'INPUT', CONST_IMG = 'IMG', CONST_BUTTON = 'BUTTON',
        CONST_SCRIPT = 'SCRIPT', CONST_LINK = 'LINK', CONST_HTML = 'HTML', CONST_HEAD = 'HEAD',
        CONST_TITLE = 'TITLE', CONST_BODY = 'BODY', CONST_CODE = 'CODE', CONST_FORM = 'FORM',
        CONST_HEADER = 'HEADER', CONST_FOOTER = 'FOOTER', CONST_ARTICLE = 'ARTICLE',
        CONST_NAV = 'NAV', CONST_CANVAS = 'CANVAS', CONST_SVG = 'SVG', CONST_SPAN = 'SPAN';
    var const_button = 'button';
    var const_type = 'type';
    var local_null = null;


    // Name:
    //      isDefined
    // Description:
    //      Judge whether the value is defined or not.
    // Params:
    //      value [Any] - The value to be judged.
    // Returns:
    //      Whether the value is defined or not.
    function isDefined(value) {
        return typeof value !== const_undefined;
    }
    JSHelper.isDefined = isDefined;

    // Name:
    //      isUndefined
    // Description:
    //      Judge whether the value is undefined or not.
    // Params:
    //      value [Any] - The value to be judged.
    // Returns:
    //      Whether the value is undefined or not.
    function isUndefined(value) {
        return typeof value === const_undefined;
    }
    JSHelper.isUndefined = isUndefined;

    // Name:
    //      isNullOrUndefined
    // Description:
    //      Judge whether the value is null or undefined.
    // Params:
    //      value [Any] - The value to be judged.
    // Returns:
    //      Whether the value is null or undefined.
    function isNullOrUndefined(value) {
        return value === local_null || isUndefined(value);
    }
    JSHelper.isNullOrUndefined = isNullOrUndefined;

    // Name:
    //      isNumber
    // Description:
    //      Judge whether the value is a number or not.
    // Params:
    //      value [Any] - The value to be judged.
    // Returns:
    //      Whether the value is a number or not.
    function isNumber(value) {
        return Object.prototype.toString.call(value) === const_object_number;
    }
    JSHelper.isNumber = isNumber;

    // Name:
    //      isString
    // Description:
    //      Judge whether the value is a string or not.
    // Params:
    //      value [Any] - The value to be judged.
    // Returns:
    //      Whether the value is a string or not.
    function isString(value) {
        return Object.prototype.toString.call(value) === const_object_string;
    }
    JSHelper.isString = isString;

    // Name:
    //      isObject
    // Description:
    //      Judge whether the value is an object or not.
    // Params:
    //      value [Any] - The value to be judged.
    // Returns:
    //      Whether the value is an object or not.
    function isObject(value) {
        return Object.prototype.toString.call(value) === const_object_object;
    }
    JSHelper.isObject = isObject;

    // Name:
    //      isArray
    // Description:
    //      Judge whether the value is an array or not.
    // Params:
    //      value [Any] - The value to be judged.
    // Returns:
    //      Whether the value is an array or not.
    function isArray(value) {
        return Object.prototype.toString.call(value) === const_object_array;
    }
    JSHelper.isArray = isArray;

    // Name:
    //      isFunction
    // Description:
    //      Judge whether the value is a function or not.
    // Params:
    //      value [Any] - The value to be judged.
    // Returns:
    //      Whether the value is a function or not.
    function isFunction(value) {
        return Object.prototype.toString.call(value) === const_object_function;
    }
    JSHelper.isFunction = isFunction;

    // Name:
    //      isBoolean
    // Description:
    //      Judge whether the value is a boolean or not.
    // Params:
    //      value [Any] - The value to be judged.
    // Returns:
    //      Whether the value is a boolean or not.
    function isBoolean(value) {
        return Object.prototype.toString.call(value) === const_object_boolean;
    }
    JSHelper.isBoolean = isBoolean;

    // Name:
    //      isEmptyObject
    // Description:
    //      Judge whether the value is an empty object or not.
    // Params:
    //      value [Any] - The value to be judged.
    // Returns:
    //      Whether the value is an empty object or not.
    function isEmptyObject(value) {
        if (!isObject(value)) {
            return false;
        }
        return Object.keys(value).length === 0;
    }
    JSHelper.isEmptyObject = isEmptyObject;

    // Name:
    //      isEqualObject
    // Description:
    //      Compare whether the given two object are equal. Which means the reuslt will be true 
    //      when the count of the two object is same and the relative field is equal.
    // Params:
    //      obj1 [Object] - The first object to be compared.
    //      obj2 [Object] - The second object to be compared.
    //      compareObjectFieldFunc [Function?] - The callback method for comparing the value 
    //      which is a object. The method isEqualObject is used when the callback is not specified.
    // Returns:
    //      [Boolean] - Whether the two object is equal or not.
    // Example:
    //      The examples below will return true;
    //      eg:
    //          {test: 123} & {test: 123}
    //          {test: 123, [1,2,3]} & {test: 123, [1,2,3]}
    //          {test: 123, {test: 234}} & {test: 123, {test: 234}}
    function isEqualObject(obj1, obj2, compareObjectFieldFunc) {
        function isEqualArray(arr1, arr2) {
            if (!arr1 && !arr2) {
                return true;
            }
            if (!arr1 || !arr2 || arr1.length !== arr2.length) {
                return false;
            }
            var find = false;
            for (var i = 0; i < arr1.length; i++) {
                for (var j = 0; j < arr2.length; j++) {
                    if (typeof arr1[i] === const_object) {
                        if (typeof arr2[j] === const_object) {
                            find = isEqualObject(arr1[i], arr2[j]);
                            if (find) {
                                break;
                            }
                        }
                    } else if (arr1[i] === arr2[j]) {
                        find = true;
                        break;
                    }
                }
                if (!find) {
                    return false;
                }
            }
            return true;
        }

        if (!obj1 && !obj2) {
            return true;
        } else if (!obj1 || !obj2) {
            return false;
        }
        if (!compareObjectFieldFunc) {
            compareObjectFieldFunc = isEqualObject;
        }
        var propCache = {}, prop;
        for (prop in obj1) {
            if (obj1.hasOwnProperty(prop)) {
                var propValue = obj1[prop];
                if (propValue instanceof Array) {
                    if (!isEqualArray(propValue, obj2[prop])) {
                        return false;
                    }
                } else if (typeof propValue === const_object) {
                    if (!compareObjectFieldFunc(propValue, obj2[prop])) {
                        return false;
                    }
                } else if (propValue !== obj2[prop]) {
                    return false;
                }
                propCache[prop] = true;
            }
        }
        for (prop in obj2) {
            if (obj2.hasOwnProperty(prop) && !propCache[prop]) {
                return false;
            }
        }
        return true;
    }
    JSHelper.isEqualObject = isEqualObject;

    // Name:
    //      convertKeyCodeToASCIICode
    // Description:
    //      Convert keyCode in event to the ASCII code.
    // Params:
    //      keyCode [Number] - The key code.
    //      shiftKey [Boolean] - Whether the shift key is pressed.
    // Returns:
    //      [Number] - The ASCII code which is corresponding to the key code.
    function convertKeyCodeToASCIICode(keyCode, shiftKey) {
        var keyMap = {
            106: 42,    // * in number pad
            107: 43,    // + in number pad
            109: 45,    // - in number pad
            110: 46,    // . in number pad
            111: 47     // / in number pad
        }, generalKeyMap = {
            186: 59,    // ;
            187: 61,    // =
            188: 44,    // ,
            189: 45,    // -
            190: 46,    // .
            191: 47,    // /
            192: 96,    // `
            219: 91,    // [
            220: 92,    // \
            221: 93,    // ]
            222: 39     // '
        }, shiftKeyMap = {
            186: 58,    // :
            187: 43,    // +
            188: 60,    // <
            189: 95,    // _
            190: 62,    // >
            191: 63,    // ?
            192: 126,   // ~
            219: 123,   // {
            220: 124,   // |
            221: 125,   // }
            222: 34     // "
        };
        var retCode = keyCode;
        if (keyCode >= 96 && keyCode <= 105) {    // 0 ~ 9 in number pad
            retCode = keyCode - 48;
        } else if (keyMap[keyCode]) {
            retCode = keyMap[keyCode];
        } else if (shiftKey && shiftKeyMap[keyCode]) {
            retCode = shiftKeyMap[keyCode];
        } else if (!shiftKey && generalKeyMap[keyCode]) {
            retCode = generalKeyMap[keyCode];
        } else if (!shiftKey && keyCode >= 65 && keyCode <= 90) {    // eslint-disable-line      // a~z
            retCode = keyCode + 32;
        }
        // KeyCode is same with ASCII letter:
        //    A ~ Z  =>  65 ~ 90
        //    0 ~ 9  =>  48 ~ 57 (number in letter pad)
        //    space  =>  32
        return retCode;
    }
    JSHelper.convertKeyCodeToASCIICode = convertKeyCodeToASCIICode;

    // Name:
    //      getFieldValueInComplexObject
    // Description:
    //      Get the value of a field in an object. You can specify the ancestor of a field
    //      for getting a more accuracy field value.
    // Params:
    //      obj [Object] - The target object.
    //      fieldName [String] - The field to be find.
    //      parentFieldName [String?] - Specify the ancestor under which the field to be find.
    //      currentParentName [String?] - The current ancestor of the field.
    // Returns:
    //      [Any] - The object value for the specified field.
    function getFieldValueInComplexObject(obj, fieldName, parentFieldName, currentParentName) {
        if (!obj || !(obj instanceof Object)) {
            return null;
        }
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                var value = obj[prop];
                if ((!parentFieldName || parentFieldName === currentParentName) && prop === fieldName) {
                    return value;
                }
                if (value instanceof Array) {
                    var retValue = null;
                    value.some(function (item) {
                        retValue = getFieldValueInComplexObject(item, parentFieldName, fieldName, prop);
                        if (retValue !== null) {
                            return true;
                        }
                    });
                    if (retValue !== null) {
                        return retValue;
                    }
                } else if (value instanceof Object) {
                    var innerValue = getFieldValueInComplexObject(value, parentFieldName, fieldName, prop);
                    if (innerValue !== null) {
                        return innerValue;
                    }
                }
            }
        }
        return null;
    }
    JSHelper.getFieldValueInComplexObject = getFieldValueInComplexObject;

    // Name:
    //      isDiv
    // Description:
    //      Judge whether the DOM element is a div.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a div.
    function isDiv(ele) {
        return !!(ele && ele.tagName === CONST_DIV);
    }
    JSHelper.isDiv = isDiv;

    // Name:
    //      isSpan
    // Description:
    //      Judge whether the DOM element is a span.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a span.
    function isSpan(ele) {
        return !!(ele && ele.tagName === CONST_SPAN);
    }
    JSHelper.isSpan = isSpan;

    // Name:
    //      isInput
    // Description:
    //      Judge whether the DOM element is an input.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is an input.
    function isInput(ele) {
        return !!(ele && ele.tagName === CONST_INPUT);
    }
    JSHelper.isInput = isInput;

    // Name:
    //      isTextNode
    // Description:
    //      Judge whether the DOM element is a text node.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a text node.
    function isTextNode(ele) {
        return !!(ele && ele instanceof Text);
    }
    JSHelper.isTextNode = isTextNode;

    // Name:
    //      isImage
    // Description:
    //      Judge whether the DOM element is an img.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is an img.
    function isImage(ele) {
        return !!(ele && ele.tagName === CONST_IMG);
    }
    JSHelper.isImage = isImage;

    // Name:
    //      isButton
    // Description:
    //      Judge whether the DOM element is a button.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a button.
    function isButton(ele) {
        if (!ele) {
            return false;
        }
        return ele.tagName === CONST_BUTTON || isInput(ele) && ele.getAttribute(const_type) === const_button;
    }
    JSHelper.isButton = isButton;

    // Name:
    //      isScript
    // Description:
    //      Judge whether the DOM element is a script.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a script.
    function isScript(ele) {
        return !!(ele && ele.tagName === CONST_SCRIPT);
    }
    JSHelper.isScript = isScript;

    // Name:
    //      isLink
    // Description:
    //      Judge whether the DOM element is a link.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a link.
    function isLink(ele) {
        return !!(ele && ele.tagName === CONST_LINK);
    }
    JSHelper.isLink = isLink;

    // Name:
    //      isHtml
    // Description:
    //      Judge whether the DOM element is a html.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a html.
    function isHtml(ele) {
        return !!(ele && ele.tagName === CONST_HTML);
    }
    JSHelper.isHtml = isHtml;

    // Name:
    //      isHead
    // Description:
    //      Judge whether the DOM element is a head.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a head.
    function isHead(ele) {
        return !!(ele && ele.tagName === CONST_HEAD);
    }
    JSHelper.isHead = isHead;

    // Name:
    //      isTitle
    // Description:
    //      Judge whether the DOM element is a title.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a title.
    function isTitle(ele) {
        return !!(ele && ele.tagName === CONST_TITLE);
    }
    JSHelper.isTitle = isTitle;

    // Name:
    //      isBody
    // Description:
    //      Judge whether the DOM element is a body.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a body.
    function isBody(ele) {
        return !!(ele && ele.tagName === CONST_BODY);
    }
    JSHelper.isBody = isBody;

    // Name:
    //      isHeader
    // Description:
    //      Judge whether the DOM element is a header.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a header.
    function isHeader(ele) {
        return !!(ele && ele.tagName === CONST_HEADER);
    }
    JSHelper.isHeader = isHeader;

    // Name:
    //      isFooter
    // Description:
    //      Judge whether the DOM element is a footer.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a footer.
    function isFooter(ele) {
        return !!(ele && ele.tagName === CONST_FOOTER);
    }
    JSHelper.isFooter = isFooter;

    // Name:
    //      isNav
    // Description:
    //      Judge whether the DOM element is a nav.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a nav.
    function isNav(ele) {
        return !!(ele && ele.tagName === CONST_NAV);
    }
    JSHelper.isNav = isNav;

    // Name:
    //      isArticle
    // Description:
    //      Judge whether the DOM element is an article.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is an article.
    function isArticle(ele) {
        return !!(ele && ele.tagName === CONST_ARTICLE);
    }
    JSHelper.isArticle = isArticle;

    // Name:
    //      isCode
    // Description:
    //      Judge whether the DOM element is a code.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a code.
    function isCode(ele) {
        return !!(ele && ele.tagName === CONST_CODE);
    }
    JSHelper.isCode = isCode;

    // Name:
    //      isCanvas
    // Description:
    //      Judge whether the DOM element is a canvas.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a canvas.
    function isCanvas(ele) {
        return !!(ele && ele.tagName === CONST_CANVAS);
    }
    JSHelper.isCanvas = isCanvas;

    // Name:
    //      isSvg
    // Description:
    //      Judge whether the DOM element is a svg.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a svg.
    function isSvg(ele) {
        return !!(ele && ele.tagName === CONST_SVG);
    }
    JSHelper.isSvg = isSvg;

    // Name:
    //      isForm
    // Description:
    //      Judge whether the DOM element is a form.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      Whether the DOM element is a form.
    function isForm(ele) {
        return !!(ele && ele.tagName === CONST_FORM);
    }
    JSHelper.isForm = isForm;

    // Name:
    //      isPositiveNumber
    // Description:
    //      Judge whether the value is a positive number.
    // Params:
    //      value [any] - The value to be judged.
    // Returns:
    //      Whether the value is a positive number.
    function isPositiveNumber(value) {
        return isNumber(value) && value > 0;
    }
    JSHelper.isPositiveNumber = isPositiveNumber;

    // Name:
    //      isNegativeNumber
    // Description:
    //      Judge whether the value is a negative number.
    // Params:
    //      value [any] - The value to be judged.
    // Returns:
    //      Whether the value is a negative number.
    function isNegativeNumber(value) {
        return isNumber(value) && value < 0;
    }
    JSHelper.isNegativeNumber = isNegativeNumber;

    // Name:
    //      isNumberString
    // Description:
    //      Judge whether the value is a number string.
    // Params:
    //      value [any] - The value to be judged.
    // Returns:
    //      Whether the value is a number string.
    function isNumberString(value) {
        return isString(value) && value !== '.' && value.match(/^\d*\.?\d*$/);
    }
    JSHelper.isNumberString = isNumberString;

    // Name:
    //      isPhoneNumber
    // Description:
    //      Judge whether the value is a phone number string.
    // Params:
    //      value [any] - The value to be judged.
    // Returns:
    //      Whether the value is a phone number string.
    function isPhoneNumber(value) {
        return isString(value) && value.match(/^\d{11}$/);
    }
    JSHelper.isPhoneNumber = isPhoneNumber;

    // Name:
    //      hasClass
    // Description:
    //      Whether the DOM element has any class.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      true, the DOM element has class.
    //      false, the DOM element does not have a class.
    function hasClass(ele) {
        return ele && ele.classList.length > 0;
    }
    JSHelper.hasClass = hasClass;

    // Name:
    //      hasChildElement
    // Description:
    //      Whether the DOM element has any child element.
    // Params:
    //      ele [HTMLElement] - The DOM element.
    // Returns:
    //      true, the DOM element has child element.
    //      false, the DOM element does not have a child element.
    function hasChildElement(ele) {
        return ele && ele.childNodes.length > 0;
    }
    JSHelper.hasChildElement = hasChildElement;


    context.JSHelper = JSHelper;

})(this);