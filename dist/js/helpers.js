function safe_tags(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') ;
}

function DOMformatter(str) {
    return str;
}

dust.helpers.snippet = function(chunk, context, bodies, params) {
    var src = dust.helpers.tap(params.src, chunk, context);

    // Make sure the template has been loaded
    var result;
    //dust.loadSource(src);
    dust.render(src, params, function(err, out) {
        if (err) throw err;

        out = safe_tags(out);
        //var s = '<pre class="snippet">'+ out + '</pre>';
        var s = '<pre class="snippet"><code class="html">'+ out + '</code></pre>';
        result = chunk.write(s);
    });
    return result;
}