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
