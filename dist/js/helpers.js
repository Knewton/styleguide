function safe_tags(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') ;
}

dust.helpers.snippet = function(chunk, context, bodies, params) {
    var src = dust.helpers.tap(params.src, chunk, context);

    // Make sure the template has been loaded
    var result;
    //dust.loadSource(src);
    dust.render(src, params, function(err, out) {
        if (err) throw err;
        //out =DOMformatter(out)
        out = safe_tags(out);
        //var s = '<pre class="snippet">'+ out + '</pre>';
        var s = '<pre class="snippet"><code lang="html">'+ out + '</code></pre>';
        result = chunk.write(s);
    });
    return result;
}

function indentor(multiplier)
{
    //indentor handles the indenting. The multiplier adds \t (tab) to the string per multiplication.
    var indentor = "";
    for (var i = 0; i < multiplier; ++i)
    {
        indentor += "\t";
    }
    return indentor;
}

function recursiveWalker(element, indent)
{
    //recursiveWalker walks through the called DOM recursively.
    var elementLength = element.children.length; //get the length of the children in the parent element.

    //iterate over all children.
    for (var i = 0; i < elementLength; ++i)
    {
        var indenting = indentor(indent); //set indenting for this iteration. Starts with 1.
        var elements = element.children[i].outerHTML.match(/<[^>]*>/g); //retrieve the various tags in the outerHTML.
        var elementTag = elements[0]; //this will be opening tag of this element including all attributes.
        var elementEndTag = elements[elements.length-1]; //get the last tag.

        //write the opening tag with proper indenting to the console. end with new line \n
        documentDOMConsole.innerHTML += indenting + elementTag + "\n"; 

        //get the innerText of the top element, not the childs using the function getElementText
        var elementText = getElementText(element.children[i]);

        //if the texts length is greater than 0 put the text on the page, else skip.
        if (elementText.length > 0)
        {
            //indent the text one more tab, end with new line.
            documentDOMConsole.innerHTML += (indenting + indentor(1) ) + elementText+ "\n";
        }

        if (element.children[i].children.length > 0)
        {
            //when the element has children call function recursiveWalker.
            recursiveWalker(element.children[i], (indent+1));
        }

        //if the start tag matches the end tag, write the end tag to the console.
        if ("<"+element.children[i].nodeName.toLowerCase()+">" == elementEndTag.replace(/\//, ""))
        {
            documentDOMConsole.innerHTML += indenting + elementEndTag + "\n";
        }
    }
    return(documentDOMConsole.innerHTML);
}

function getElementText(el)
{
        child = el.firstChild,
        texts = [];

    while (child) {
        if (child.nodeType == 3) {
            texts.push(child.data);
        }
        child = child.nextSibling;
    }

    return texts.join("");
}

function DOMformatter(str) {

    var htmlString = str;

    //create a containing element to parse the DOM.
    var documentDOM = document.createElement("div");
    //append the html to the DOM element.
    documentDOM.insertAdjacentHTML('afterbegin', htmlString);

    //create a special HTML element, this shows html as normal text.
    window.documentDOMConsole = document.createElement("xmp");
    window.documentDOMConsole.style.display = "block";

    //append the code display block.
    //document.body.appendChild(documentDOMConsole);

    return recursiveWalker(documentDOM, 1);
}
