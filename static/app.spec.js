describe("Interview kata", () => {

    it("should work", () => {
        expect(1).toEqual(1);
    });

    it("should create 7 spans", () => {
        const mockHtmlText = '<div>Some text with 7 letters to highlight.</div>';
        const highlightedText = highlightLetter(mockHtmlText, 't', 'css-class');

        const htmlWrapper = document.createElement("wrapper");
        htmlWrapper.innerHTML = highlightedText;

        const createdSpans = htmlWrapper.getElementsByTagName("span");
        expect(createdSpans.length).toBe(7);
    });

    it("should wrap provided letter with span", () => {
        const mockHtmlText = '<div>Some text with 1 letter to highlight.</div>';
        const highlightedText = highlightLetter(mockHtmlText, 'x', 'css-class');

        const htmlWrapper = document.createElement("wrapper");
        htmlWrapper.innerHTML = highlightedText;

        const createdSpans = htmlWrapper.getElementsByTagName("span");
        expect(createdSpans[0].innerHTML).toBe("x");
    });

    it("should add correct css class to wrapped letter", () => {
        const mockHtmlText = '<div>Some text with 1 letter to highlight.</div>';
        const highlightedText = highlightLetter(mockHtmlText, 'x', 'css-class');

        const htmlWrapper = document.createElement("wrapper");
        htmlWrapper.innerHTML = highlightedText;

        const createdSpans = htmlWrapper.getElementsByTagName("span");
        expect(createdSpans[0].className).toBe("css-class");
    });

});