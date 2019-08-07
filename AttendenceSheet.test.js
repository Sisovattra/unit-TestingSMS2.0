import AttendanceSheet from './AttendanceSheet'
import HeadPicker from './HeadPicker';
import { Session } from 'inspector';
import SessionTable from './SessionTable';
import SessionTableHead from './SessionTableHead';
import SessionTableToolBar from './SessionTableToolBar';

describe("AttendanceSheet", () => {
    it("should render without errors", () => {
      expect (AttendanceSheet).toMatchSnapshot();
    });
});

describe("HeadPicker", () => {
    it("should render without errors", () => {
        expect (HeadPicker).toMatchSnapshot();
    });
});

describe("SessionTable", () => {
    it("should render without errors", () => {
        expect (SessionTable).toMatchSnapshot();
    });
});

describe("SessionTableHead", () => {
    it("should render without errors", () => {
        expect (SessionTableHead).toMatchSnapshot();
    });
});

describe("SessionTableToolBar", () => {
    it("should render without errors", () => {
        expect (SessionTableToolBar).toMatchSnapshot();
    });
});
