describe('Interview kata', () => {

    it('should work', () => {
        expect(1).toEqual(1);
    });

    it('should create 7 spans', () => {
        const mockHtmlText = '<div>Some text with 7 letters to highlight.</div>';
        const highlightedText = highlightLetter(mockHtmlText, 't', 'css-class');

        const htmlWrapper = document.createElement('wrapper');
        htmlWrapper.innerHTML = highlightedText;

        const createdSpans = htmlWrapper.getElementsByTagName('span');
        expect(createdSpans.length).toBe(7);
    });

    it('should wrap provided letter with span', () => {
        const mockHtmlText = '<div>Some text with 1 letter to highlight.</div>';
        const highlightedText = highlightLetter(mockHtmlText, 'x', 'css-class');

        const htmlWrapper = document.createElement('wrapper');
        htmlWrapper.innerHTML = highlightedText;

        const createdSpans = htmlWrapper.getElementsByTagName('span');
        expect(createdSpans[0].innerHTML).toBe('x');
    });

    it('should add correct css class to wrapped letter', () => {
        const mockHtmlText = '<div>Some text with 1 letter to highlight.</div>';
        const highlightedText = highlightLetter(mockHtmlText, 'x', 'css-class');

        const htmlWrapper = document.createElement('wrapper');
        htmlWrapper.innerHTML = highlightedText;

        const createdSpans = htmlWrapper.getElementsByTagName('span');
        expect(createdSpans[0].className).toBe('css-class');
    });

    it('should remove punctuation and format text', () => {
        const mockText = 'Some text, ready for sorting.';
        const sortedText = removePunctuationAndSortWords(mockText);
        expect(sortedText).toEqual('for ready Some sorting text');
    });

    it('should not sort words in a tag that is not <p>', () => {
        const mockHtmlText = '<div>Some text that should not be sorted.</div>';
        const sortedHtml = orderParagraphContent(mockHtmlText);
        expect(sortedHtml).toEqual(mockHtmlText);
    });

    it('should sort words in a <p> tag', () => {
        const mockHtmlText = '<div>Some text that should not be sorted.</div><p>Text that should be sorted.</p>';
        const sortedHtml = orderParagraphContent(mockHtmlText);
        expect(sortedHtml).toEqual('<div>Some text that should not be sorted.</div><p>be should sorted Text that</p>');
    });

});