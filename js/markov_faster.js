(function(){
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
    function dir(item) {
        var arr = [];
        for (var i in item) {
            arr.push(i);
        }
        return arr;
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
    var JSON, str, PREFIX_LENGTH, STOP_WORDS;
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
    function kwargs(f) {
        var argNames;
        argNames = f.toString().match(/\(([^\)]+)/)[1];
        argNames = argNames ? argNames.split(",").map(function(s) {
            return s.trim();
        }) : [];
        return function() {
            var args, kw, i;
            args = [].slice.call(arguments);
            if (args.length && args.length < f.length) {
                kw = args.pop();
                if (typeof kw == "object") {
                    for (i = 0; i < len(argNames); i++) {
                        if (_$rapyd$_in(argNames[i], dir(kw))) {
                            args[i] = kw[argNames[i]];
                        }
                    }
                } else {
                    args.push(kw);
                }
            }
            return f.apply(f, args);
        };
    }
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
            var _$rapyd$_Iter0 = dict.keys(a);
            for (var _$rapyd$_Index0 = 0; _$rapyd$_Index0 < _$rapyd$_Iter0.length; _$rapyd$_Index0++) {
                i = _$rapyd$_Iter0[_$rapyd$_Index0];
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
        var _$rapyd$_Iter1 = iterable;
        for (var _$rapyd$_Index1 = 0; _$rapyd$_Index1 < _$rapyd$_Iter1.length; _$rapyd$_Index1++) {
            i = _$rapyd$_Iter1[_$rapyd$_Index1];
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
        var _$rapyd$_Iter2 = iterable;
        for (var _$rapyd$_Index2 = 0; _$rapyd$_Index2 < _$rapyd$_Iter2.length; _$rapyd$_Index2++) {
            key = _$rapyd$_Iter2[_$rapyd$_Index2];
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
        var _$rapyd$_Iter3 = dict.keys(hash);
        for (var _$rapyd$_Index3 = 0; _$rapyd$_Index3 < _$rapyd$_Iter3.length; _$rapyd$_Index3++) {
            key = _$rapyd$_Iter3[_$rapyd$_Index3];
            vals.append(hash[key]);
        }
        return vals;
    };
    dict.items = function(hash) {
        var items, key;
        items = [];
        var _$rapyd$_Iter4 = dict.keys(hash);
        for (var _$rapyd$_Index4 = 0; _$rapyd$_Index4 < _$rapyd$_Iter4.length; _$rapyd$_Index4++) {
            key = _$rapyd$_Iter4[_$rapyd$_Index4];
            items.append([key, hash[key]]);
        }
        return items;
    };
    dict.copy = dict;
    dict.clear = function(hash) {
        var key;
        var _$rapyd$_Iter5 = dict.keys(hash);
        for (var _$rapyd$_Index5 = 0; _$rapyd$_Index5 < _$rapyd$_Iter5.length; _$rapyd$_Index5++) {
            key = _$rapyd$_Iter5[_$rapyd$_Index5];
            delete hash[key];
        }
    };
    PREFIX_LENGTH = 2;
    STOP_WORDS = [ "i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now" ];
    function normalize(string) {
        "\n    Remove the punctuation from the given text string, lowercase all words,\n    and return the resulting text string.\n    ";
        return string.replace(new RegExp("[\\.,-\\/#!$%\\^&\\*;:{}=\\-_`~()@\\+\\?><\\[\\]\\+]", "g"), "").toLowerCase();
    }
    function load_word_lists() {
        var texts, word_lists, word_list, text;
        "\n    Return a list of at most three lists of words.\n    Each word list is obtained by normalizing and splitting the texts from\n    the three source text boxes on the webpage.\n    ";
        texts = [ $("#source1").val(), $("#source2").val(), $("#source3").val() ];
        word_lists = [];
        var _$rapyd$_Iter6 = texts;
        for (var _$rapyd$_Index6 = 0; _$rapyd$_Index6 < _$rapyd$_Iter6.length; _$rapyd$_Index6++) {
            text = _$rapyd$_Iter6[_$rapyd$_Index6];
            word_list = normalize(text.trim()).split(new RegExp("\\s+"));
            if (len(word_list) > PREFIX_LENGTH) {
                word_lists.append(word_list);
            }
        }
        return word_lists;
    }
    function load_num_words() {
        return parseInt($("#num-words").val());
    }
    function get_words(word_lists, portions) {
        var P, m, counts, result, wl;
        "\n    Truncate the given word lists according to the given portions,\n    concatenate the truncations into one word list, and return the result.\n    ";
        P = sum(portions);
        m = Math.min.apply(Math, [].concat((function() {
            var _$rapyd$_Iter = word_lists, _$rapyd$_Result = [], wl;
            for (var _$rapyd$_Index = 0; _$rapyd$_Index < _$rapyd$_Iter.length; _$rapyd$_Index++) {
                wl = _$rapyd$_Iter[_$rapyd$_Index];
                _$rapyd$_Result.push(len(wl));
            }
            return _$rapyd$_Result;
        })()));
        counts = (function() {
            var _$rapyd$_Iter = portions, _$rapyd$_Result = [], p;
            for (var _$rapyd$_Index = 0; _$rapyd$_Index < _$rapyd$_Iter.length; _$rapyd$_Index++) {
                p = _$rapyd$_Iter[_$rapyd$_Index];
                _$rapyd$_Result.push(Math.max(PREFIX_LENGTH, Math.ceil(m * p / P)));
            }
            return _$rapyd$_Result;
        })();
        word_lists = (function() {
            var _$rapyd$_Iter = range(len(word_lists)), _$rapyd$_Result = [], i;
            for (var _$rapyd$_Index = 0; _$rapyd$_Index < _$rapyd$_Iter.length; _$rapyd$_Index++) {
                i = _$rapyd$_Iter[_$rapyd$_Index];
                _$rapyd$_Result.push(word_lists[i].slice(0, counts[i]));
            }
            return _$rapyd$_Result;
        })();
        result = [];
        var _$rapyd$_Iter7 = word_lists;
        for (var _$rapyd$_Index7 = 0; _$rapyd$_Index7 < _$rapyd$_Iter7.length; _$rapyd$_Index7++) {
            wl = _$rapyd$_Iter7[_$rapyd$_Index7];
            result.extend(wl);
        }
        return result;
    }
    function pack(items) {
        "\n    Turn the given list of strings into the single string \n    item1##item2##...##itemN to simulate a tuple.\n    RapydScript doesn't have tuple objects :-(\n    ";
        return items.join("##");
    }
    function unpack(string) {
        "\n    The inverse of ``pack()``.\n    ";
        return string.split("##");
    }
    function get_markov_analysis(words, prefix_length) {
        if (typeof prefix_length === "undefined") prefix_length = PREFIX_LENGTH;
        var result, prefix, suffix, i;
        "\n    Return a Markov analysis of the given list of words.\n    The output format is a dictionary with structure: \n    a tuple of contiguous words in ``words`` of length ``prefix_length`` \n    (a prefix) -> a list of all individual words in ``words`` that occur \n    after that prefix (list includes repeats).\n    ";
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
    }
    function shuffle(a) {
        var i, _$rapyd$_Unpack, m;
        "\n    Randomly shuffle the given list and return the result.\n    Use the Fisher–Yates shuffle, which is well explained at \n    http:#bost.ocks.org/mike/shuffle/ .\n    ";
        m = len(a) - 1;
        while (m) {
            i = Math.floor(Math.random() * m);
            _$rapyd$_Unpack = [a[i], a[m]];
            a[m] = _$rapyd$_Unpack[0];
            a[i] = _$rapyd$_Unpack[1];
            m -= 1;
        }
        return a;
    }
    function choose(a) {
        var i;
        "\n    Return a random element from the given list.\n    ";
        i = Math.floor(Math.random() * len(a));
        return a[i];
    }
    function get_mix(words, num_words, prefix_length) {
        if (typeof prefix_length === "undefined") prefix_length = 2;
        var d, prefixes, result, prefix, s, suffix, i;
        "\n    Return a list of ``num_words`` random words from \n    the given list of words. \n    Do this by shuffling ``d = get_markov_analysis(words, prefix_length)``,\n    and traversing ``d`` until ``num_words`` random words have been \n    generated.\n    ";
        d = get_markov_analysis(words, prefix_length);
        if (!len(d)) {
            return [];
        }
        prefixes = shuffle(dict.keys(d));
        result = unpack(prefixes[0]);
        i = 0;
        while (i < num_words) {
            prefix = pack(result.slice(i, i + prefix_length));
            while (!(_$rapyd$_in(prefix, d))) {
                prefix = choose(prefixes);
            }
            s = d[prefix];
            suffix = choose(s);
            result.append(suffix);
            i += 1;
        }
        return result;
    }
    function dump_mix(mix) {
        $("#mix").val(mix);
    }
    function load_mix() {
        return $("#mix").val();
    }
    function load_poem() {
        return $("#poem").val();
    }
    function validate() {
        var mix, mix_words, mix_stems, poem_words, invalid_words, word;
        mix = normalize(load_mix().trim()).split(new RegExp("\\s+"));
        mix_words = (function() {
            var _$rapyd$_Iter = mix, _$rapyd$_Result = [], word;
            for (var _$rapyd$_Index = 0; _$rapyd$_Index < _$rapyd$_Iter.length; _$rapyd$_Index++) {
                word = _$rapyd$_Iter[_$rapyd$_Index];
                if (!(_$rapyd$_in(word, STOP_WORDS))) {
                    _$rapyd$_Result.push(word);
                }
            }
            return _$rapyd$_Result;
        })();
        mix_stems = (function() {
            var _$rapyd$_Iter = mix_words, _$rapyd$_Result = [], word;
            for (var _$rapyd$_Index = 0; _$rapyd$_Index < _$rapyd$_Iter.length; _$rapyd$_Index++) {
                word = _$rapyd$_Iter[_$rapyd$_Index];
                _$rapyd$_Result.push(stemmer(word));
            }
            return _$rapyd$_Result;
        })();
        poem_words = normalize(load_poem().trim()).split(new RegExp("\\s+"));
        invalid_words = [];
        var _$rapyd$_Iter8 = poem_words;
        for (var _$rapyd$_Index8 = 0; _$rapyd$_Index8 < _$rapyd$_Iter8.length; _$rapyd$_Index8++) {
            word = _$rapyd$_Iter8[_$rapyd$_Index8];
            if (_$rapyd$_in(word, STOP_WORDS)) {
                continue;
            }
            if (!(_$rapyd$_in(stemmer(word), mix_stems)) && !(_$rapyd$_in(word, invalid_words))) {
                invalid_words.append(word);
            }
        }
        return invalid_words;
    }
    function dump_validation(report) {
        $("#validation-report").html(report);
    }
    $("#make-mix").click(function() {
        $("#source1").effect("shake", {
            "times": 3
        }, 800);
        $("#source2").effect("shake", {
            "times": 3
        }, 1e3);
        $("#source3").effect("shake", {
            "times": 3
        }, 1200);
        setTimeout(function() {
            var word_lists, portions, words, num_words, mix;
            $("#mix").effect("shake", {
                "times": 1
            }, 800);
            _$rapyd$_print("Hello!");
            word_lists = load_word_lists();
            portions = (function() {
                var _$rapyd$_Iter = len(word_lists), _$rapyd$_Result = [], i;
                for (var _$rapyd$_Index = 0; _$rapyd$_Index < _$rapyd$_Iter.length; _$rapyd$_Index++) {
                    i = _$rapyd$_Iter[_$rapyd$_Index];
                    _$rapyd$_Result.push(1);
                }
                return _$rapyd$_Result;
            })();
            words = get_words(word_lists, portions);
            _$rapyd$_print("source num words", len(words));
            num_words = load_num_words();
            _$rapyd$_print("mix num words", num_words);
            mix = get_mix(words, num_words);
            dump_mix(mix.join(" "));
        }, 1e3);
    });
    $("#validate").click(function() {
        var invalid_words, report;
        invalid_words = validate();
        if (len(invalid_words) > 0) {
            report = "<p>The following words in your poem " + "appear to violate Rule M(a):</p>" + "<textarea class=\"short\">" + invalid_words.join(", ") + "</textarea>";
        } else {
            report = "<p>Success!</p>";
        }
        dump_validation(report);
        $("html, body").animate({
            scrollTop: $("#validate").offset().top
        }, 2e3);
    });
})();