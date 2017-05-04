
(function () {
    'use strict';

    var Prism = (function(){
        // Private helper vars
        var lang = /\blang(?:uage)?-(\w+)\b/i;
        var uniqueId = 0;

        var _ = {
            manual: _ && _.manual,
            languages: {},
            plugins: {},
            highlightAll: function(async, callback) {
                var env = {
                    callback: callback,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };

                var elements = env.elements || document.querySelectorAll(env.selector);

                for (var i=0, element; element = elements[i++];) {
                    _.highlightElement(element, async === true, env.callback);
                }
            },
            highlightElement: function(element, async, callback) {
                // Find language
                var language, grammar, parent = element;

                while (parent && !lang.test(parent.className)) {
                    parent = parent.parentNode;
                }

                if (parent) {
                    language = (parent.className.match(lang) || [,''])[1].toLowerCase();
                    grammar = _.languages[language];
                }

                // Set language on the element, if not present
                element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

                // Set language on the parent, for styling
                parent = element.parentNode;

                if (/pre/i.test(parent.nodeName)) {
                    parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
                }

                var code = element.textContent;

                var env = {
                    element: element,
                    language: language,
                    grammar: grammar,
                    code: code
                };

                    env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

                    env.element.innerHTML = env.highlightedCode;

                    callback && callback.call(element);

            },
            highlight: function (text, grammar, language) {
                var tokens = _.tokenize(text, grammar);
                return TokenStringify(_.util.encode(tokens), language);
            },
            tokenize: function(text, grammar, language) {

                var strarr = [text];

                var rest = grammar.rest;

                if (rest) {
                    for (var token in rest) {
                        grammar[token] = rest[token];
                    }

                    delete grammar.rest;
                }

                tokenloop: for (var token in grammar) {
                    if(!grammar.hasOwnProperty(token) || !grammar[token]) {
                        continue;
                    }

                    var patterns = grammar[token];
                    patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

                    for (var j = 0; j < patterns.length; ++j) {
                        var pattern = patterns[j],
                            inside = pattern.inside,
                            lookbehind = !!pattern.lookbehind,
                            greedy = !!pattern.greedy,
                            lookbehindLength = 0,
                            alias = pattern.alias;

                        if (greedy && !pattern.pattern.global) {
                            // Without the global flag, lastIndex won't work
                            var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
                            pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
                        }

                        pattern = pattern.pattern || pattern;

                        // Don’t cache length as it changes during the loop
                        for (var i=0, pos = 0; i<strarr.length; pos += strarr[i].length, ++i) {

                            var str = strarr[i];

                            if (strarr.length > text.length) {
                                // Something went terribly wrong, ABORT, ABORT!
                                break tokenloop;
                            }

                            if (str instanceof Token) {
                                continue;
                            }

                            pattern.lastIndex = 0;

                            var match = pattern.exec(str),
                                delNum = 1;

                            // Greedy patterns can override/remove up to two previously matched tokens
                            if (!match && greedy && i != strarr.length - 1) {
                                pattern.lastIndex = pos;
                                match = pattern.exec(text);
                                if (!match) {
                                    break;
                                }

                                var from = match.index + (lookbehind ? match[1].length : 0),
                                    to = match.index + match[0].length,
                                    k = i,
                                    p = pos;

                                for (var len = strarr.length; k < len && p < to; ++k) {
                                    p += strarr[k].length;
                                    // Move the index i to the element in strarr that is closest to from
                                    if (from >= p) {
                                        ++i;
                                        pos = p;
                                    }
                                }

                                /*
                                 * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
                                 * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
                                 */
                                if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
                                    continue;
                                }

                                // Number of tokens to delete and replace with the new match
                                delNum = k - i;
                                str = text.slice(pos, p);
                                match.index -= pos;
                            }

                            if (!match) {
                                continue;
                            }

                            if(lookbehind) {
                                lookbehindLength = match[1].length;
                            }

                            var from = match.index + lookbehindLength,
                                match = match[0].slice(lookbehindLength),
                                to = from + match.length,
                                before = str.slice(0, from),
                                after = str.slice(to);

                            var args = [i, delNum];

                            if (before) {
                                args.push(before);
                            }

                            var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

                            args.push(wrapped);

                            if (after) {
                                args.push(after);
                            }

                            Array.prototype.splice.apply(strarr, args);
                        }
                    }
                }

                return strarr;
            },
            util: {
                encode: function (tokens) {
                    if (tokens instanceof Token) {
                        return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
                    } else if (_.util.type(tokens) === 'Array') {
                        return tokens.map(_.util.encode);
                    } else {
                        return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                    }
                },
                type: function (o) {
                    return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
                },
            },
        };

        var Token = function(type, content, alias, matchedStr, greedy) {
            this.type = type;
            this.content = content;
            this.alias = alias;
            // Copy of the full string this token was created from
            this.length = (matchedStr || "").length|0;
            this.greedy = !!greedy;
        };

        var TokenStringify = function(o, language, parent) {

            if (typeof o == 'string') {
                return o;
            }

            if (_.util.type(o) === 'Array') {
                return o.map(function(element) {
                    return TokenStringify(element, language, o);
                }).join('');
            }

            var env = {
                type: o.type,
                content: TokenStringify(o.content, language, parent),
                tag: 'span',
                classes: ['token', o.type],
                attributes: {},
                language: language,
                parent: parent
            };

            if (env.type == 'comment') {
                env.attributes['spellcheck'] = 'true';
            }

            if (o.alias) {
                var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
                Array.prototype.push.apply(env.classes, aliases);
            }

            var attributes = Object.keys(env.attributes).map(function(name) {
                return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
            }).join(' ');

            var t = '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

            return t;
        };

        return _;
    })();
    Prism.languages.css = {
        'comment': /\/\*[\w\W]*?\*\//,
        'atrule': {
            pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
            inside: {
                'rule': /@[\w-]+/
                // See rest below
            }
        },
        'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
        'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
        'string': {
            pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
            greedy: true
        },
        'property': /(\b|\B)[\w-]+(?=\s*:)/i,
        'important': /\B!important\b/i,
        'function': /[-a-z0-9]+(?=\()/i,
        'punctuation': /[(){};:]/
    };

    module.exports = Prism;

}());
