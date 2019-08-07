import SearchBox from './AttendanceLine'
describe('SearchBox',()=>{
    it ('should render without errors',()=>{
        expect (SearchBox).toMatchSnapshot();
    })
})