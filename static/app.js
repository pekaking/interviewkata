(() => {

    fillContent();

    /*
     * Asynchroniously fetch html, 
     * order words in <p> tags,
     * highlight 'o' and 'r',
     * display the html.
     */
    async function fillContent() {
        document.querySelector('.container').innerHTML =
            await fetch('./lorem.html')
                .then(response => response.text())
                .then(htmlText => highlightLetter(highlightLetter(orderParagraphContent(htmlText), 'o', 'blue'), 'r', 'orange'));
    };

})();

/*
 * Function that finds the provided letter and 
 * wraps it around in a span with custom css class
 */
function highlightLetter(text, letter, cssClass) {
    const letterRegex = new RegExp('(' + letter + ')', 'gi');
    return text.replace(letterRegex, '<span class="' + cssClass + '">$1</span>')
}

/*
 * Function that orders content of <p> tags
 */
function orderParagraphContent(text) {
    const wrapper = document.createElement('wrapper');
    wrapper.innerHTML = text;
    const paragraphs = wrapper.getElementsByTagName('p');

    [...paragraphs].forEach(paragraph => paragraph.innerHTML = removePunctuationAndSortWords(paragraph.innerHTML));

    return wrapper.innerHTML;
}

/*
 * Function that removes punctuation and sorts words from a text alphabetically
 */
function removePunctuationAndSortWords(text) {
    if (text) {
        const punctuationRegex = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
        text = text.replace(punctuationRegex, '').split(' ');
        text.sort((a, b) => a.toLowerCase() !== b.toLowerCase() ? a.toLowerCase() < b.toLowerCase() ? -1 : 1 : 0);
        return text.join(' ');
    }
}

/*
 * Hi there and welcome to this little coding kata. Here is what you should do in javascript:
 * NOTE: do the exercises step by step
 *
 * 1. There is a file on the webserver, named lorem.html. It contains a lot of (html) text. 
 *    Write a javascript function, which fetches the contents of this file asynchronously 
 *    from the server and replaces the contents of the <div class="container"> div of the website.
 * 
 * 2. There are lots of o's in the imported text. As the letter o is very important for this exercise, 
 *    we should highlight it. Highlight all the o's (upper- and lowercase) with my-blue background (see styles.css for 
 *    more information about that color) and white font color, a 30% bigger font size and add some 
 *    padding so that every o stands out.
 * 
 * 3. The letter 'r' is also very important. Highlight it in the same way (upper- and lowercase), but use the my-orange
 *    color this time.
 * 
 * 4. Instead of text with "meaning", the PO wants to have all the words which are placed in paragraph
 *    tags to be sorted in alphabetical order. Get rid of all the punctuation, just display the words
 *    in the right order. Example: <p>what a requirement</p> becomes <p>a requirement what</p>. 
 * 
 */

