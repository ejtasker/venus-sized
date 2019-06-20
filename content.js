var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText =
              text.replace(/Earth-sized/gi, 'Venus-sized')
              .replace(/Earth-like/gi, 'Venus-like')
              .replace(/super-Earth/gi, 'super-Venus')
              .replace(/super Earth/gi, 'super Venus');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
