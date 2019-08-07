import CustomTableCell from './CustomTableCell'

describe("CustomTableCell", () => {
    it("should render without errors", () => {
        expect (CustomTableCell).toMatchSnapshot();
    });
});