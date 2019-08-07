import StudentTimetableView from './StudentTimetableView'

describe("StudentTimetableView", () => {
    it ("should render without errors", () => {
        expect (StudentTimetableView).toMatchSnapshot();
    })
})