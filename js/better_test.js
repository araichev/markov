function range(start, stop, step) {
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    var length = Math.max (Math.ceil ((stop - start) / step) , 0);
    var idx = 0;
    var range = new Array(length);
    while (idx < length) {
        range[idx++] = start;
        start += step;
    }
    return range;
}
function len(obj) {
    if (obj instanceof Array || typeof obj === "string") return obj.length;
    else {
        var count = 0;
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) count++;
        }
        return count;
    }
}
function _$rapyd$_in(val, arr) {
    if (arr instanceof Array || typeof arr === "string") return arr.indexOf(val) != -1;
    else return val in arr;
}
function _$rapyd$_extends(child, parent) {
    child.prototype = new parent;
    child.prototype.constructor = child;
}
function _$rapyd$_print() {
    var args, output;
    args = [].slice.call(arguments, 0);
    output = JSON.stringify(args);
    if ("console" in window) console.log(output.substr(1, output.length-2));
}
JSON = JSON || {};
if (!JSON.stringify) {
    
    JSON.stringify = function(obj) {
        var t = typeof (obj);
        if (t != "object" || obj === null) {
            // simple data type
            if (t == "string")
                obj = '"' + obj + '"';
            if (t == "function")
                return; // return undefined
            else
                return String(obj);
        } else {
            // recurse array or object
            var n, v, json = []
            var arr = (obj && obj.constructor == Array);
            for (n in obj) {
                v = obj[n];
                t = typeof (v);
                if (t != "function" && t != "undefined") {
                    if (t == "string")
                        v = '"' + v + '"';
                    else if ((t == "object" || t == "function") && v !== null)
                        v = JSON.stringify(v);
                    json.push((arr ? "" : '"' + n + '":') + String(v));
                }
            }
            return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
        }
    };
    ;
}
str = JSON.stringify;
function IndexError(message){
    var self = this;
    if (typeof message === "undefined") message = "list index out of range";
    self.name = "IndexError";
    self.message = message;
};

_$rapyd$_extends(IndexError, Error);

function TypeError(message){
    var self = this;
    self.name = "TypeError";
    self.message = message;
};

_$rapyd$_extends(TypeError, Error);

function ValueError(message){
    var self = this;
    self.name = "ValueError";
    self.message = message;
};

_$rapyd$_extends(ValueError, Error);

function AssertionError(message){
    var self = this;
    if (typeof message === "undefined") message = "";
    self.name = "AssertionError";
    self.message = message;
};

_$rapyd$_extends(AssertionError, Error);

if (!Array.prototype.map) {
    
    Array.prototype.map = function(callback, thisArg) {
        var T, A, k;
        if (this == null) {
            throw new TypeError(" this is null or not defined");
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if ({}.toString.call(callback) != "[object Function]") {
            throw new TypeError(callback + " is not a function");
        }
        if (thisArg) {
            T = thisArg;
        }
        A = new Array(len);
        for (var k = 0; k < len; k++) {
            var kValue, mappedValue;
            if (k in O) {
                kValue = O[k];
                mappedValue = callback.call(T, kValue);
                A[k] = mappedValue;
            }
        }
        return A;
    };
    ;
}
function map(oper, arr) {
    return list(arr.map(oper));
}
if (!Array.prototype.filter) {
    
    Array.prototype.filter = function(filterfun, thisArg) {
        "use strict";
        if (this == null) {
            throw new TypeError(" this is null or not defined");
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if ({}.toString.call(filterfun) != "[object Function]") {
            throw new TypeError(filterfun + " is not a function");
        }
        if (thisArg) {
            T = thisArg;
        }
        var A = [];
        var thisp = arguments[1];
        for (var k = 0; k < len; k++) {
            if (k in O) {
                var val = O[k]; // in case fun mutates this
                if (filterfun.call(T, val))
                    A.push(val);
            }
        }
        return A;
    };
    ;
}
function filter(oper, arr) {
    return list(arr.filter(oper));
}
function sum(arr, start) {
    if (typeof start === "undefined") start = 0;
    return arr.reduce(function(prev, cur) {
        return prev + cur;
    }, start);
}
function deep_eq(a, b) {
    var i;
    "\n    Equality comparison that works with all data types, returns true if structure and\n    contents of first object equal to those of second object\n\n    Arguments:\n        a: first object\n        b: second object\n    ";
    if (a === b) {
        return true;
    }
    if (a instanceof Array && b instanceof Array || a instanceof Object && b instanceof Object) {
        if (a.constructor !== b.constructor || a.length !== b.length) {
            return false;
        }
        var _$rapyd$_Iter9 = dict.keys(a);
        for (var _$rapyd$_Index9 = 0; _$rapyd$_Index9 < _$rapyd$_Iter9.length; _$rapyd$_Index9++) {
            i = _$rapyd$_Iter9[_$rapyd$_Index9];
            if (b.hasOwnProperty(i)) {
                if (!deep_eq(a[i], b[i])) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
    }
    return false;
}
String.prototype.find = Array.prototype.indexOf;
String.prototype.strip = String.prototype.trim;
String.prototype.lstrip = String.prototype.trimLeft;
String.prototype.rstrip = String.prototype.trimRight;
String.prototype.join = function(iterable) {
    return iterable.join(this);
};
String.prototype.zfill = function(size) {
    var s;
    s = this;
    while (s.length < size) {
        s = "0" + s;
    }
    return s;
};
function list(iterable) {
    if (typeof iterable === "undefined") iterable = [];
    var result, i;
    result = [];
    var _$rapyd$_Iter10 = iterable;
    for (var _$rapyd$_Index10 = 0; _$rapyd$_Index10 < _$rapyd$_Iter10.length; _$rapyd$_Index10++) {
        i = _$rapyd$_Iter10[_$rapyd$_Index10];
        result.append(i);
    }
    return result;
}
Array.prototype.append = Array.prototype.push;
Array.prototype.find = Array.prototype.indexOf;
Array.prototype.index = function(index) {
    var val;
    val = this.find(index);
    if (val == -1) {
        throw new ValueError(str(index) + " is not in list");
    }
    return val;
};
Array.prototype.insert = function(index, item) {
    this.splice(index, 0, item);
};
Array.prototype.pop = function(index) {
    if (typeof index === "undefined") index = this.length - 1;
    return this.splice(index, 1)[0];
};
Array.prototype.extend = function(array2) {
    this.push.apply(this, array2);
};
Array.prototype.remove = function(item) {
    var index;
    index = this.find(item);
    this.splice(index, 1);
};
Array.prototype.copy = function() {
    return this.slice(0);
};
function dict(iterable) {
    var result, key;
    result = {};
    var _$rapyd$_Iter11 = iterable;
    for (var _$rapyd$_Index11 = 0; _$rapyd$_Index11 < _$rapyd$_Iter11.length; _$rapyd$_Index11++) {
        key = _$rapyd$_Iter11[_$rapyd$_Index11];
        result[key] = iterable[key];
    }
    return result;
}
if (typeof Object.getOwnPropertyNames !== "function") {
    dict.keys = function(hash) {
        var keys;
        keys = [];
        
        for (var x in hash) {
            if (hash.hasOwnProperty(x)) {
                keys.push(x);
            }
        }
        ;
        return keys;
    };
} else {
    dict.keys = function(hash) {
        return Object.getOwnPropertyNames(hash);
    };
}
dict.values = function(hash) {
    var vals, key;
    vals = [];
    var _$rapyd$_Iter12 = dict.keys(hash);
    for (var _$rapyd$_Index12 = 0; _$rapyd$_Index12 < _$rapyd$_Iter12.length; _$rapyd$_Index12++) {
        key = _$rapyd$_Iter12[_$rapyd$_Index12];
        vals.append(hash[key]);
    }
    return vals;
};
dict.items = function(hash) {
    var items, key;
    items = [];
    var _$rapyd$_Iter13 = dict.keys(hash);
    for (var _$rapyd$_Index13 = 0; _$rapyd$_Index13 < _$rapyd$_Iter13.length; _$rapyd$_Index13++) {
        key = _$rapyd$_Iter13[_$rapyd$_Index13];
        items.append([key, hash[key]]);
    }
    return items;
};
dict.copy = dict;
dict.clear = function(hash) {
    var key;
    var _$rapyd$_Iter14 = dict.keys(hash);
    for (var _$rapyd$_Index14 = 0; _$rapyd$_Index14 < _$rapyd$_Iter14.length; _$rapyd$_Index14++) {
        key = _$rapyd$_Iter14[_$rapyd$_Index14];
        delete hash[key];
    }
};
function pack(items) {
    "\n    Because RapydScript doesn't have ordered items, \n    use item1##item2##...##itemN to simulate one \n    ";
    return items.join("##");
}
function timeit(fun) {
    function wrap(a, b) {
        var s;
        s = Date.now();
        a = fun(a, b);
        console.log(Date.now() - s);
        return a;
    }
    return wrap;
}

function get_markov_analysis(text, prefix_length) {
    if (typeof prefix_length === "undefined") prefix_length = 2;
    var words, result, prefix, suffix, i;
    "\n    Return a Markov analysis of the list of strings ``words``.\n    The output format is a dictionary with structure: \n    a tuple of contiguous words in ``words`` of length ``prefix_length`` \n    (a prefix) -> a list of all individual words in ``words`` that occur \n    after that prefix.\n    ";
    words = text.trim().split(/\s+/);
    result = {};
    for (i = 0; i < len(words) - prefix_length; i++) {
        prefix = pack(words.slice(i, i + prefix_length));
        suffix = words[i + prefix_length];
        if (_$rapyd$_in(prefix, result)) {
            result[prefix].append(suffix);
        } else {
            result[prefix] = [ suffix ];
        }
    }
    return result;
}get_markov_analysis = timeit(get_markov_analysis);

text = $("body").text();
_$rapyd$_print(len(text));
get_markov_analysis(text);