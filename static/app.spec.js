describe("Interview kata", () => {

    it("should work", () => {
        expect(1).toEqual(1);
    });

    it("should add wrap letter O with span", () => {
        const mockHtmlText = '<div>Some text with 2 letters to highlight.</div>';
        const highlightedText = highlightLetterO(mockHtmlText);
        expect(highlightedText.match(/<\/span>/g).length).toBe(2);
    })
});