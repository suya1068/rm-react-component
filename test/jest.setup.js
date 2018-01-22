import "raf/polyfill";
import Enzyme, { render, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { JSDOM } from "jsdom";

Enzyme.configure({ adapter: new Adapter() });


const documentHTML = "<!doctype html><html><body><div id='root'></div></body></html>";
const jsdom = new JSDOM(documentHTML);
const { window } = jsdom;

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === "undefined")
        .map(prop => Object.getOwnPropertyDescriptor(src, prop));

    Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: "node.js"
};

global.render = render;
global.shallow = shallow;
global.mount = mount;

copyProps(document.defaultView, global);
