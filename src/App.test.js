import {configure, shallow} from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import App from "./App";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
});

it("renders a button", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("button")).toHaveLength(1);
});

it("reload button works", () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find("button");
    button.simulate("click");
    expect(wrapper).toBeDefined();
});

it("renders a table", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("table")).toHaveLength(1);
});

it("renders a 10 rows", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("tr")).toHaveLength(10);
});