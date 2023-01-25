if (!self.__uv) {
    __uvHook(self, self.__uv$config, self.__uv$config.bare);
};

async function __uvHook(window, config = {}, bare = '/bare/') {
    if ('__uv' in window && window.__uv instanceof Ultraviolet) return false;

    if (window.document && !!window.window) {
        window.document.querySelectorAll("script[__uv-script]").forEach(node => node.remove())
    };

    const worker = !window.window;
    const master = '__uv';
    const methodPrefix = '__uv$';
    const __uv = new Ultraviolet({
        ...config,
        window,
    });

    if (typeof config.construct === 'function') {
        config.construct(__uv, worker ? 'worker' : 'window');
    };

    const { client } = __uv;
    const {
        HTMLMediaElement,
        HTMLScriptElement,
        HTMLAudioElement,
        HTMLVideoElement,
        HTMLInputElement,
        HTMLEmbedElement,
        HTMLTrackElement,
        HTMLAnchorElement,
        HTMLIFrameElement,
        HTMLAreaElement,
        HTMLLinkElement,
        HTMLBaseElement,
        HTMLFormElement,
        HTMLImageElement,
        HTMLSourceElement,
    } = window;

    client.nativeMethods.defineProperty(window, '__uv', {
        value: __uv,
        enumerable: false,
    });


    __uv.meta.origin = location.origin;
    __uv.location = client.location.emulate(
        (href) => {
            if (href === 'about:srcdoc') return new URL(href);
            if (href.startsWith('blob:')) href = href.slice('blob:'.length);
            return new URL(__uv.sourceUrl(href));
        },
        (href) => {
            return __uv.rewriteUrl(href);
        },
    );

    __uv.cookieStr = window.__uv$cookies || '';
    __uv.meta.url = __uv.location;
    __uv.domain = __uv.meta.url.host;
    __uv.blobUrls = new window.Map();
    __uv.referrer = '';
    __uv.cookies = [];
    __uv.localStorageObj = {};
    __uv.sessionStorageObj = {};

    try {
        __uv.bare = new URL(bare, window.location.href);
    } catch(e) {
        __uv.bare = window.parent.__uv.bare;
    };

    if (__uv.location.href === 'about:srcdoc') {
        __uv.meta = window.parent.__uv.meta;
    };

    if (window.EventTarget) {
        __uv.addEventListener = window.EventTarget.prototype.addEventListener;
        __uv.removeListener = window.EventTarget.prototype.removeListener;
        __uv.dispatchEvent = window.EventTarget.prototype.dispatchEvent;
    };

    // Storage wrappers
    client.nativeMethods.defineProperty(client.storage.storeProto, '__uv$storageObj', {
        get() {
            if (this === client.storage.sessionStorage) return __uv.sessionStorageObj;
            if (this === client.storage.localStorage) return __uv.localStorageObj;
        },
        enumerable: false,
    });

    if (window.localStorage) {
        for (const key in window.localStorage) {
            if (key.startsWith(methodPrefix + __uv.location.origin + '@')) {
                __uv.localStorageObj[key.slice((methodPrefix + __uv.location.origin + '@').length)] = window.localStorage.getItem(key);
            };
        };

        __uv.lsWrap = client.storage.emulate(client.storage.localStorage, __uv.localStorageObj);
    };

    if (window.sessionStorage) {
        for (const key in window.sessionStorage) {
            if (key.startsWith(methodPrefix + __uv.location.origin + '@')) {
                __uv.sessionStorageObj[key.slice((methodPrefix + __uv.location.origin + '@').length)] = window.sessionStorage.getItem(key);
            };
        };

        __uv.ssWrap = client.storage.emulate(client.storage.sessionStorage, __uv.sessionStorageObj);
    };



    let rawBase = window.document ? client.node.baseURI.get.call(window.document) : window.location.href;
    let base = __uv.sourceUrl(rawBase);

    client.nativeMethods.defineProperty(__uv.meta, 'base', {
        get() {
            if (!window.document) return __uv.meta.url.href;

            if (client.node.baseURI.get.call(window.document) !== rawBase) {
                rawBase = client.node.baseURI.get.call(window.document);
                base = __uv.sourceUrl(rawBase);
            };

            return base;
        },
    });


    __uv.methods = {
        setSource: methodPrefix + 'setSource',
        source: methodPrefix + 'source',
        location: methodPrefix + 'location',
        function: methodPrefix + 'function',
        string: methodPrefix + 'string',
        eval: methodPrefix + 'eval',
        parent: methodPrefix + 'parent',
        top: methodPrefix + 'top',
    };

    __uv.filterKeys = [
        master,
        __uv.methods.setSource,
        __uv.methods.source,
        __uv.methods.location,
        __uv.methods.function,
        __uv.methods.string,
        __uv.methods.eval,
        __uv.methods.parent,
        __uv.methods.top,
        methodPrefix + 'protocol',
        methodPrefix + 'storageObj',
        methodPrefix + 'url',
        methodPrefix + 'modifiedStyle',
        methodPrefix + 'config',
        methodPrefix + 'dispatched',
        'Ultraviolet',
        '__uvHook',
    ];


    client.on('wrap', (target, wrapped) => {
        client.nativeMethods.defineProperty(wrapped, 'name', client.nativeMethods.getOwnPropertyDescriptor(target, 'name'));
        client.nativeMethods.defineProperty(wrapped, 'length', client.nativeMethods.getOwnPropertyDescriptor(target, 'length'));

        client.nativeMethods.defineProperty(wrapped, __uv.methods.string, {
            enumerable: false,
            value: client.nativeMethods.fnToString.call(target),
        });

        client.nativeMethods.defineProperty(wrapped, __uv.methods.function, {
            enumerable: false,
            value: target,
        });
    });

    client.fetch.on('request', event => {
        event.data.input = __uv.rewriteUrl(event.data.input);
    });

    client.fetch.on('requestUrl', event => {
        event.data.value = __uv.sourceUrl(event.data.value);
    });

    client.fetch.on('responseUrl', event => {
        event.data.value = __uv.sourceUrl(event.data.value);
    });

    // XMLHttpRequest
    client.xhr.on('open', event => {
        event.data.input = __uv.rewriteUrl(event.data.input);
    });

    client.xhr.on('responseUrl', event => {
        event.data.value = __uv.sourceUrl(event.data.value);
    });


    // Workers
    client.workers.on('worker', event => {
        event.data.url = __uv.rewriteUrl(event.data.url);
    });

    client.workers.on('addModule', event => {
        event.data.url = __uv.rewriteUrl(event.data.url);
    });

    client.workers.on('importScripts', event => {
        for (const i in event.data.scripts) {
            event.data.scripts[i] = __uv.rewriteUrl(event.data.scripts[i]);
        };
    });

    client.workers.on('postMessage', event => {
        let to = event.data.origin;

        event.data.origin = '*';
        event.data.message = {
            __data: event.data.message,
            __origin: __uv.meta.url.origin,
            __to: to,
        };
    });

    // Navigator
    client.navigator.on('sendBeacon', event => {
        event.data.url = __uv.rewriteUrl(event.data.url);
    });

    // Cookies
    client.document.on('getCookie', event => {
        event.data.value = __uv.cookieStr;
    });

    client.document.on('setCookie', event => {
        Promise.resolve(__uv.cookie.setCookies(event.data.value, __uv.db, __uv.meta)).then(() => {
            __uv.cookie.db().then(db => {
                __uv.cookie.getCookies(db).then(cookies => {
                    __uv.cookieStr = __uv.cookie.serialize(cookies, __uv.meta, true);
                });
            });
        });
        const cookie = __uv.cookie.setCookie(event.data.value)[0];

        if (!cookie.path) cookie.path = '/';
        if (!cookie.domain) cookie.domain = __uv.meta.url.hostname;

        if (__uv.cookie.validateCookie(cookie, __uv.meta, true)) {
            if (__uv.cookieStr.length) __uv.cookieStr += '; ';
            __uv.cookieStr += `${cookie.name}=${cookie.value}`;
        };

        event.respondWith(event.data.value);
    });

    // HTML
    client.element.on('setInnerHTML', event => {
        switch (event.that.tagName) {
            case 'SCRIPT':
                event.data.value = __uv.js.rewrite(event.data.value);
                break;
            case 'STYLE':
                event.data.value = __uv.rewriteCSS(event.data.value);
                break;
            default:
                event.data.value = __uv.rewriteHtml(event.data.value);
        };
    });

    client.element.on('getInnerHTML', event => {
        switch (event.that.tagName) {
            case 'SCRIPT':
                event.data.value = __uv.js.source(event.data.value);
                break;
            default:
                event.data.value = __uv.sourceHtml(event.data.value);
        };
    });

    client.element.on('setOuterHTML', event => {
        event.data.value = __uv.rewriteHtml(event.data.value, { document: event.that.tagName === 'HTML' });
    });

    client.element.on('getOuterHTML', event => {
        switch (event.that.tagName) {
            case 'HEAD':
                event.data.value = __uv.sourceHtml(
                    event.data.value.replace(/<head(.*)>(.*)<\/head>/s, '<op-head$1>$2</op-head>')
                ).replace(/<op-head(.*)>(.*)<\/op-head>/s, '<head$1>$2</head>');
                break;
            case 'BODY':
                event.data.value = __uv.sourceHtml(
                    event.data.value.replace(/<body(.*)>(.*)<\/body>/s, '<op-body$1>$2</op-body>')
                ).replace(/<op-body(.*)>(.*)<\/op-body>/s, '<body$1>$2</body>');
                break;
            default:
                event.data.value = __uv.sourceHtml(event.data.value, { document: event.that.tagName === 'HTML' });
                break;
        };

        //event.data.value = __uv.sourceHtml(event.data.value, { document: event.that.tagName === 'HTML' });
    });

    client.document.on('write', event => {
        if (!event.data.html.length) return false;
        event.data.html = [__uv.rewriteHtml(event.data.html.join(''))];
    });

    client.document.on('writeln', event => {
        if (!event.data.html.length) return false;
        event.data.html = [__uv.rewriteHtml(event.data.html.join(''))];
    });

    client.element.on('insertAdjacentHTML', event => {
        event.data.html = __uv.rewriteHtml(event.data.html);
    });

    // EventSource

    client.eventSource.on('construct', event => {
        event.data.url = __uv.rewriteUrl(event.data.url);
    });


    client.eventSource.on('url', event => {
        event.data.url = __uv.rewriteUrl(event.data.url);
    });

    // History
    client.history.on('replaceState', event => {
        if (event.data.url) event.data.url = __uv.rewriteUrl(event.data.url, '__uv' in event.that ? event.that.__uv.meta : __uv.meta);
    });
    client.history.on('pushState', event => {
        if (event.data.url) event.data.url = __uv.rewriteUrl(event.data.url, '__uv' in event.that ? event.that.__uv.meta : __uv.meta);
    });

    // Element get set attribute methods
    client.element.on('getAttribute', event => {
        if (client.element.hasAttribute.call(event.that, __uv.attributePrefix + '-attr-' + event.data.name)) {
            event.respondWith(
                event.target.call(event.that, __uv.attributePrefix + '-attr-' + event.data.name)
            );
        };
    });

    // Message
    client.message.on('postMessage', event => {
        let to = event.data.origin;
        let call = __uv.call;


        if (event.that) {
            call = event.that.__uv$source.call;
        };

        event.data.origin = '*';
        event.data.message = {
            __data: event.data.message,
            __origin: (event.that || event.target).__uv$source.location.origin,
            __to: to,
        };

        event.respondWith(
            worker ?
            call(event.target, [event.data.message, event.data.transfer], event.that) :
            call(event.target, [event.data.message, event.data.origin, event.data.transfer], event.that)
        );

    });

    client.message.on('data', event => {
        const { value: data } = event.data;
        if (typeof data === 'object' && '__data' in data && '__origin' in data) {
            event.respondWith(data.__data);
        };
    });

    client.message.on('origin', event => {
        const data = client.message.messageData.get.call(event.that);
        if (typeof data === 'object' && data.__data && data.__origin) {
            event.respondWith(data.__origin);
        };
    });

    client.overrideDescriptor(window, 'origin', {
        get: (target, that) => {
            return __uv.location.origin;
        },
    });

    client.node.on('baseURI', event => {
        if (event.data.value.startsWith(window.location.origin)) event.data.value = __uv.sourceUrl(event.data.value);
    });

    client.element.on('setAttribute', event => {
        if (event.that instanceof HTMLMediaElement && event.data.name === 'src' && event.data.value.startsWith('blob:')) {
            event.target.call(event.that, __uv.attributePrefix + '-attr-' + event.data.name, event.data.value);
            event.data.value = __uv.blobUrls.get(event.data.value);
            return;
        };

        if (__uv.attrs.isUrl(event.data.name)) {
            event.target.call(event.that, __uv.attributePrefix + '-attr-' + event.data.name, event.data.value);
            event.data.value = __uv.rewriteUrl(event.data.value);
        };

        if (__uv.attrs.isStyle(event.data.name)) {
            event.target.call(event.that, __uv.attributePrefix + '-attr-' + event.data.name, event.data.value);
            event.data.value = __uv.rewriteCSS(event.data.value, { context: 'declarationList' });
        };

        if (__uv.attrs.isHtml(event.data.name)) {
            event.target.call(event.that, __uv.attributePrefix + '-attr-' + event.data.name, event.data.value);
            event.data.value = __uv.rewriteHtml(event.data.value, {...__uv.meta, document: true, injectHead:__uv.createHtmlInject(__uv.handlerScript, __uv.bundleScript, __uv.configScript, __uv.cookieStr, window.location.href) });
        };

        if (__uv.attrs.isSrcset(event.data.name)) {
            event.target.call(event.that, __uv.attributePrefix + '-attr-' + event.data.name, event.data.value);
            event.data.value = __uv.html.wrapSrcset(event.data.value);
        };

        if (__uv.attrs.isForbidden(event.data.name)) {
            event.data.name = __uv.attributePrefix + '-attr-' + event.data.name;
        };
    });

    client.element.on('audio', event => {
        event.data.url = __uv.rewriteUrl(event.data.url);
    });

    // Element Property Attributes
    client.element.hookProperty([HTMLAnchorElement, HTMLAreaElement, HTMLLinkElement, HTMLBaseElement], 'href', {
        get: (target, that) => {
            return __uv.sourceUrl(
                target.call(that)
            );
        },
        set: (target, that, [val]) => {
            client.element.setAttribute.call(that, __uv.attributePrefix + '-attr-href', val)
            target.call(that, __uv.rewriteUrl(val));
        },
    }); 

    client.element.hookProperty([HTMLScriptElement, HTMLAudioElement, HTMLVideoElement,  HTMLMediaElement, HTMLImageElement, HTMLInputElement, HTMLEmbedElement, HTMLIFrameElement, HTMLTrackElement, HTMLSourceElement], 'src', {
        get: (target, that) => {
            return __uv.sourceUrl(
                target.call(that)
            );
        },
        set: (target, that, [val]) => {
            if (new String(val).toString().trim().startsWith('blob:') && that instanceof HTMLMediaElement) {
                client.element.setAttribute.call(that, __uv.attributePrefix + '-attr-src', val)
                return target.call(that, __uv.blobUrls.get(val) || val);
            };

            client.element.setAttribute.call(that, __uv.attributePrefix + '-attr-src', val)
            target.call(that, __uv.rewriteUrl(val));
        },
    });

    client.element.hookProperty([HTMLFormElement], 'action', {
        get: (target, that) => {
            return __uv.sourceUrl(
                target.call(that)
            );
        },
        set: (target, that, [val]) => {
            client.element.setAttribute.call(that, __uv.attributePrefix + '-attr-action', val)
            target.call(that, __uv.rewriteUrl(val));
        },
    });

    client.element.hookProperty([HTMLImageElement], 'srcset', {
        get: (target, that) => {
            return client.element.getAttribute.call(that, __uv.attributePrefix + '-attr-srcset') || target.call(that);
        },
        set: (target, that, [val]) => {
            client.element.setAttribute.call(that, __uv.attributePrefix + '-attr-srcset', val)
            target.call(that, __uv.html.wrapSrcset(val));
        },
    });

    client.element.hookProperty(HTMLScriptElement, 'integrity', {
        get: (target, that) => {
            return client.element.getAttribute.call(that, __uv.attributePrefix + '-attr-integrity');
        },
        set: (target, that, [val]) => {
            client.element.setAttribute.call(that, __uv.attributePrefix + '-attr-integrity', val);
        },
    });

    client.element.hookProperty(HTMLIFrameElement, 'sandbox', {
        get: (target, that) => {
            return client.element.getAttribute.call(that, __uv.attributePrefix + '-attr-sandbox') || target.call(that);
        },
        set: (target, that, [val]) => {
            client.element.setAttribute.call(that, __uv.attributePrefix + '-attr-sandbox', val);
        },
    });

    client.element.hookProperty(HTMLIFrameElement, 'contentWindow', {
        get: (target, that) => {
            const win = target.call(that);
            try {
                if (!win.__uv) __uvHook(win, config, bare);
                return win;
            } catch (e) {
                return win;
            };
        },
    });

    client.element.hookProperty(HTMLIFrameElement, 'contentDocument', {
        get: (target, that) => {
            const doc = target.call(that);
            try {
                const win = doc.defaultView
                if (!win.__uv) __uvHook(win, config, bare);
                return doc;
            } catch (e) {
                return win;
            };
        },
    });

    client.element.hookProperty(HTMLIFrameElement, 'srcdoc', {
        get: (target, that) => {
            return client.element.getAttribute.call(that, __uv.attributePrefix + '-attr-srcdoc') || target.call(that);
        },
        set: (target, that, [val]) => {
            target.call(that, __uv.rewriteHtml(val, {
                document: true,
                injectHead: __uv.createHtmlInject(__uv.handlerScript, __uv.bundleScript, __uv.configScript, __uv.cookieStr, window.location.href)
            }))
        },
    });

    client.node.on('getTextContent', event => {
        if (event.that.tagName === 'SCRIPT') {
            event.data.value = __uv.js.source(event.data.value);
        };
    });

    client.node.on('setTextContent', event => {
        if (event.that.tagName === 'SCRIPT') {
            event.data.value = __uv.js.rewrite(event.data.value);
        };
    });

    // Until proper rewriting is implemented for service workers.
    // Not sure atm how to implement it with the already built in service worker
    if ('serviceWorker' in window.navigator) {
        delete window.Navigator.prototype.serviceWorker;
    };

    // Document
    client.document.on('getDomain', event => {
        event.data.value = __uv.domain;
    });
    client.document.on('setDomain', event => {
        if (!event.data.value.toString().endsWith(__uv.meta.url.hostname.split('.').slice(-2).join('.'))) return event.respondWith('');
        event.respondWith(__uv.domain = event.data.value);
    })

    client.document.on('url', event => {
        event.data.value = __uv.location.href;
    });

    client.document.on('documentURI', event => {
        event.data.value = __uv.location.href;
    });

    client.document.on('referrer', event => {
        event.data.value = __uv.referrer || __uv.sourceUrl(event.data.value);
    });

    client.document.on('parseFromString', event => {
        if (event.data.type !== 'text/html') return false;
        event.data.string = __uv.rewriteHtml(event.data.string, {...__uv.meta, document: true, });
    });

    // Attribute (node.attributes)
    client.attribute.on('getValue', event => {
        if (client.element.hasAttribute.call(event.that.ownerElement, __uv.attributePrefix + '-attr-' + event.data.name)) {
            event.data.value = client.element.getAttribute.call(event.that.ownerElement, __uv.attributePrefix + '-attr-' + event.data.name);
        };
    });

    client.attribute.on('setValue', event => {
        if (__uv.attrs.isUrl(event.data.name)) {
            client.element.setAttribute.call(event.that.ownerElement, __uv.attributePrefix + '-attr-' + event.data.name, event.data.value);
            event.data.value = __uv.rewriteUrl(event.data.value);
        };

        if (__uv.attrs.isStyle(event.data.name)) {
            client.element.setAttribute.call(event.that.ownerElement, __uv.attributePrefix + '-attr-' + event.data.name, event.data.value);
            event.data.value = __uv.rewriteCSS(event.data.value, { context: 'declarationList' });
        };

        if (__uv.attrs.isHtml(event.data.name)) {
            client.element.setAttribute.call(event.that.ownerElement, __uv.attributePrefix + '-attr-' + event.data.name, event.data.value);
            event.data.value = __uv.rewriteHtml(event.data.value, {...__uv.meta, document: true, injectHead:__uv.createHtmlInject(__uv.handlerScript, __uv.bundleScript, __uv.configScript, __uv.cookieStr, window.location.href) });
        };

        if (__uv.attrs.isSrcset(event.data.name)) {
            client.element.setAttribute.call(event.that.ownerElement, __uv.attributePrefix + '-attr-' + event.data.name, event.data.value);
            event.data.value = __uv.html.wrapSrcset(event.data.value);
        };

    });

    // URL
    client.url.on('createObjectURL', event => {
        let url = event.target.call(event.that, event.data.object);
        if (url.startsWith('blob:' + location.origin)) {
            let newUrl = 'blob:' + (__uv.meta.url.href !== 'about:blank' ?  __uv.meta.url.origin : window.parent.__uv.meta.url.origin) + url.slice('blob:'.length + location.origin.length);
            __uv.blobUrls.set(newUrl, url);
            event.respondWith(newUrl);
        } else {
            event.respondWith(url);
        };
    });

    client.url.on('revokeObjectURL', event => {
        if (__uv.blobUrls.has(event.data.url)) {
            const old = event.data.url;
            event.data.url = __uv.blobUrls.get(event.data.url);
            __uv.blobUrls.delete(old);
        };
    });

    client.storage.on('get', event => {
        event.data.name = methodPrefix + __uv.meta.url.origin + '@' + event.data.name;
    });

    client.storage.on('set', event => {
        if (event.that.__uv$storageObj) {
            event.that.__uv$storageObj[event.data.name] = event.data.value;
        };
        event.data.name = methodPrefix + __uv.meta.url.origin + '@' + event.data.name;
    });

    client.storage.on('delete', event => {
        if (event.that.__uv$storageObj) {
            delete event.that.__uv$storageObj[event.data.name];
        };
        event.data.name = methodPrefix + __uv.meta.url.origin + '@' + event.data.name;
    });

    client.storage.on('getItem', event => {
        event.data.name = methodPrefix + __uv.meta.url.origin + '@' + event.data.name;
    });

    client.storage.on('setItem', event => {
        if (event.that.__uv$storageObj) {
            event.that.__uv$storageObj[event.data.name] = event.data.value;
        };
        event.data.name = methodPrefix + __uv.meta.url.origin + '@' + event.data.name;
    });

    client.storage.on('removeItem', event => {
        if (event.that.__uv$storageObj) {
            delete event.that.__uv$storageObj[event.data.name];
        };
        event.data.name = methodPrefix + __uv.meta.url.origin + '@' + event.data.name;
    });

    client.storage.on('clear', event => {
        if (event.that.__uv$storageObj) {
            for (const key of client.nativeMethods.keys.call(null, event.that.__uv$storageObj)) {
                delete event.that.__uv$storageObj[key];
                client.storage.removeItem.call(event.that, methodPrefix + __uv.meta.url.origin + '@' + key);
                event.respondWith();
            };
        };
    });

    client.storage.on('length', event => {
        if (event.that.__uv$storageObj) {
            event.respondWith(client.nativeMethods.keys.call(null, event.that.__uv$storageObj).length);
        };
    });
