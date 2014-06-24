(function(){function range(start,stop,step){if(arguments.length<=1){stop=start||0;start=0}step=arguments[2]||1;var length=Math.max(Math.ceil((stop-start)/step),0);var idx=0;var range=new Array(length);while(idx<length){range[idx++]=start;start+=step}return range}function len(obj){if(obj instanceof Array||typeof obj==="string")return obj.length;else{var count=0;for(var i in obj){if(obj.hasOwnProperty(i))count++}return count}}function _$rapyd$_in(val,arr){if(arr instanceof Array||typeof arr==="string")return arr.indexOf(val)!=-1;else{for(i in arr){if(arr.hasOwnProperty(i)&&i===val)return true}return false}}function dir(item){var arr=[];for(var i in item){arr.push(i)}return arr}function _$rapyd$_extends(child,parent){child.prototype=new parent;child.prototype.constructor=child}function enumerate(item){var arr=[];for(var i=0;i<item.length;i++){arr[arr.length]=[i,item[i]]}return arr}function _$rapyd$_print(){var args,output;args=[].slice.call(arguments,0);output=JSON.stringify(args);if("console"in window)console.log(output.substr(1,output.length-2))}var JSON,str,PREFIX_LENGTH;JSON=JSON||{};if(!JSON.stringify){
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
    }str=JSON.stringify;function kwargs(f){var argNames;argNames=f.toString().match(/\(([^\)]+)/)[1];argNames=argNames?argNames.split(",").map(function(s){return s.trim()}):[];return function(){var args,kw,i;args=[].slice.call(arguments);if(args.length&&args.length<f.length){kw=args.pop();if(typeof kw=="object"){for(i=0;i<len(argNames);i++){if(_$rapyd$_in(argNames[i],dir(kw))){args[i]=kw[argNames[i]]}}}else{args.push(kw)}}return f.apply(f,args)}}function IndexError(message){var self=this;if(typeof message==="undefined")message="list index out of range";self.name="IndexError";self.message=message};_$rapyd$_extends(IndexError,Error);function TypeError(message){var self=this;self.name="TypeError";self.message=message};_$rapyd$_extends(TypeError,Error);function ValueError(message){var self=this;self.name="ValueError";self.message=message};_$rapyd$_extends(ValueError,Error);function AssertionError(message){var self=this;if(typeof message==="undefined")message="";self.name="AssertionError";self.message=message};_$rapyd$_extends(AssertionError,Error);if(!Array.prototype.map){
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
	}function map(oper,arr){return list(arr.map(oper))}if(!Array.prototype.filter){
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
	}function filter(oper,arr){return list(arr.filter(oper))}function sum(arr,start){if(typeof start==="undefined")start=0;return arr.reduce(function(prev,cur){return prev+cur},start)}function deep_eq(a,b){var i;"\n    Equality comparison that works with all data types, returns true if structure and\n    contents of first object equal to those of second object\n\n    Arguments:\n        a: first object\n        b: second object\n    ";if(a===b){return true}if(a instanceof Array&&b instanceof Array||a instanceof Object&&b instanceof Object){if(a.constructor!==b.constructor||a.length!==b.length){return false}var _$rapyd$_Iter0=dict.keys(a);for(var _$rapyd$_Index0=0;_$rapyd$_Index0<_$rapyd$_Iter0.length;_$rapyd$_Index0++){i=_$rapyd$_Iter0[_$rapyd$_Index0];if(b.hasOwnProperty(i)){if(!deep_eq(a[i],b[i])){return false}}else{return false}}return true}return false}String.prototype.find=Array.prototype.indexOf;String.prototype.strip=String.prototype.trim;String.prototype.lstrip=String.prototype.trimLeft;String.prototype.rstrip=String.prototype.trimRight;String.prototype.join=function(iterable){return iterable.join(this)};String.prototype.zfill=function(size){var s;s=this;while(s.length<size){s="0"+s}return s};function list(iterable){if(typeof iterable==="undefined")iterable=[];var result,i;result=[];var _$rapyd$_Iter1=iterable;for(var _$rapyd$_Index1=0;_$rapyd$_Index1<_$rapyd$_Iter1.length;_$rapyd$_Index1++){i=_$rapyd$_Iter1[_$rapyd$_Index1];result.append(i)}return result}Array.prototype.append=Array.prototype.push;Array.prototype.find=Array.prototype.indexOf;Array.prototype.index=function(index){var val;val=this.find(index);if(val==-1){throw new ValueError(str(index)+" is not in list")}return val};Array.prototype.insert=function(index,item){this.splice(index,0,item)};Array.prototype.pop=function(index){if(typeof index==="undefined")index=this.length-1;return this.splice(index,1)[0]};Array.prototype.extend=function(array2){this.push.apply(this,array2)};Array.prototype.remove=function(item){var index;index=this.find(item);this.splice(index,1)};Array.prototype.copy=function(){return this.slice(0)};function dict(iterable){var result,key;result={};var _$rapyd$_Iter2=iterable;for(var _$rapyd$_Index2=0;_$rapyd$_Index2<_$rapyd$_Iter2.length;_$rapyd$_Index2++){key=_$rapyd$_Iter2[_$rapyd$_Index2];result[key]=iterable[key]}return result}if(typeof Object.getOwnPropertyNames!=="function"){dict.keys=function(hash){var keys;keys=[];
        for (var x in hash) {
            if (hash.hasOwnProperty(x)) {
                keys.push(x);
            }
        }
        ;return keys}}else{dict.keys=function(hash){return Object.getOwnPropertyNames(hash)}}dict.values=function(hash){var vals,key;vals=[];var _$rapyd$_Iter3=dict.keys(hash);for(var _$rapyd$_Index3=0;_$rapyd$_Index3<_$rapyd$_Iter3.length;_$rapyd$_Index3++){key=_$rapyd$_Iter3[_$rapyd$_Index3];vals.append(hash[key])}return vals};dict.items=function(hash){var items,key;items=[];var _$rapyd$_Iter4=dict.keys(hash);for(var _$rapyd$_Index4=0;_$rapyd$_Index4<_$rapyd$_Iter4.length;_$rapyd$_Index4++){key=_$rapyd$_Iter4[_$rapyd$_Index4];items.append([key,hash[key]])}return items};dict.copy=dict;dict.clear=function(hash){var key;var _$rapyd$_Iter5=dict.keys(hash);for(var _$rapyd$_Index5=0;_$rapyd$_Index5<_$rapyd$_Iter5.length;_$rapyd$_Index5++){key=_$rapyd$_Iter5[_$rapyd$_Index5];delete hash[key]}};PREFIX_LENGTH=2;function get_words(word_lists,ratios){var R,m,counts,result,wl;"\n    Merge the list of texts according to the given ratios and\n    return the resulting text split into words.\n    ";R=sum(ratios);m=Math.min.apply(Math,[].concat((function(){var _$rapyd$_Iter=word_lists,_$rapyd$_Result=[],wl;for(var _$rapyd$_Index=0;_$rapyd$_Index<_$rapyd$_Iter.length;_$rapyd$_Index++){wl=_$rapyd$_Iter[_$rapyd$_Index];_$rapyd$_Result.push(len(wl))}return _$rapyd$_Result})()));counts=(function(){var _$rapyd$_Iter=ratios,_$rapyd$_Result=[],r;for(var _$rapyd$_Index=0;_$rapyd$_Index<_$rapyd$_Iter.length;_$rapyd$_Index++){r=_$rapyd$_Iter[_$rapyd$_Index];_$rapyd$_Result.push(Math.max(PREFIX_LENGTH,Math.ceil(m*r/R)))}return _$rapyd$_Result})();word_lists=(function(){var _$rapyd$_Iter=range(len(word_lists)),_$rapyd$_Result=[],i;for(var _$rapyd$_Index=0;_$rapyd$_Index<_$rapyd$_Iter.length;_$rapyd$_Index++){i=_$rapyd$_Iter[_$rapyd$_Index];_$rapyd$_Result.push(word_lists[i].slice(0,counts[i]))}return _$rapyd$_Result})();result=[];var _$rapyd$_Iter6=word_lists;for(var _$rapyd$_Index6=0;_$rapyd$_Index6<_$rapyd$_Iter6.length;_$rapyd$_Index6++){wl=_$rapyd$_Iter6[_$rapyd$_Index6];result.extend(wl)}return result}function pack(items){"\n    Because RapydScript doesn't have ordered items :-(, \n    use item1##item2 to simulate one \n    ";return items.join("##")}function unpack(items){return items.split("##")}function get_markov_analysis(words,prefix_length){if(typeof prefix_length==="undefined")prefix_length=PREFIX_LENGTH;var result,prefix,suffix,i;"\n    Return a Markov analysis of the list of strings ``words``.\n    The output format is a dictionary with structure: \n    a tuple of contiguous words in ``words`` of length ``prefix_length`` \n    (a prefix) -> a list of all individual words in ``words`` that occur \n    after that prefix.\n    ";result={};for(i=0;i<len(words)-prefix_length;i++){prefix=pack(words.slice(i,i+prefix_length));suffix=words[i+prefix_length];if(_$rapyd$_in(prefix,result)){result[prefix].append(suffix)}else{result[prefix]=[suffix]}}return result}function shuffle(a){var i,_$rapyd$_Unpack,m;"\n    Randomly shuffle the given list and return the result.\n    Uses the Fisher–Yates shuffle, which is explained well at \n    http:#bost.ocks.org/mike/shuffle/ .\n    ";m=len(a)-1;while(m){i=Math.floor(Math.random()*m);_$rapyd$_Unpack=[a[i],a[m]];a[m]=_$rapyd$_Unpack[0];a[i]=_$rapyd$_Unpack[1];m-=1}return a}function choose(a){var i;"\n    Return a random element from the given list\n    ";i=Math.floor(Math.random()*len(a));return a[i]}function get_mix(words,num_words,prefix_length){if(typeof prefix_length==="undefined")prefix_length=2;var d,prefixes,result,prefix,s,suffix,i;"\n    Return a list of ``num_words`` random words from \n    the given list of words. \n    Do this by shuffling ``d = get_markov_analysis(words, prefix_length)``,\n    and traversing ``d`` until ``num_words`` random words have been \n    generated.\n    ";d=get_markov_analysis(words,prefix_length);if(!len(d)){return[]}prefixes=shuffle(dict.keys(d));result=unpack(prefixes[0]);i=0;while(i<num_words){prefix=pack(result.slice(i,i+prefix_length));while(!(_$rapyd$_in(prefix,d))){prefix=choose(prefixes)}s=d[prefix];suffix=choose(s);result.append(suffix);i+=1}return result}function get_word_lists_and_ratios(){var user_texts,user_ratios,word_lists,ratios,word_list,_$rapyd$_Unpack,i,st;user_texts=[$("#text1").val(),$("#text2").val(),$("#text3").val()];user_ratios=[parseInt($("#ratio1 option:selected").val()),parseInt($("#ratio2 option:selected").val()),parseInt($("#ratio3 option:selected").val())];word_lists=[];ratios=[];var _$rapyd$_Iter7=enumerate(user_texts);for(var _$rapyd$_Index7=0;_$rapyd$_Index7<_$rapyd$_Iter7.length;_$rapyd$_Index7++){_$rapyd$_Unpack=_$rapyd$_Iter7[_$rapyd$_Index7];i=_$rapyd$_Unpack[0];st=_$rapyd$_Unpack[1];word_list=st.trim().split(/s+/);if(len(word_list)>PREFIX_LENGTH){word_lists.append(word_list);ratios.append(user_ratios[i])}}return[word_lists,ratios]}function get_num_words(){return parseInt($("#num-words").val())}function put_mix(mix){$("#mix").val(mix)}function main(){var _$rapyd$_Unpack,wl,r,words,num_words,mix;_$rapyd$_print("Hello!");_$rapyd$_Unpack=get_word_lists_and_ratios();wl=_$rapyd$_Unpack[0];r=_$rapyd$_Unpack[1];_$rapyd$_print(r);words=get_words.apply(this,[].concat(get_word_lists_and_ratios()));_$rapyd$_print("source num words",len(words));num_words=get_num_words();_$rapyd$_print("mix num words",num_words);mix=get_mix(words,num_words);put_mix(mix.join(" "))}$("#mix-it").click(function(){$("#text1").effect("shake",{"times":3},800);$("#text2").effect("shake",{"times":3},1e3);$("#text3").effect("shake",{"times":3},1200);setTimeout(function(){main()},1400)})})();