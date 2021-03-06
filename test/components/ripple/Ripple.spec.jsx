import React from "react";
import Ripple from "src/components/ripple/Ripple";

describe("Ripple Component", () => {
    it("랜더링한다.", () => {
        const component = shallow(<Ripple />);
        expect(component.state().isRunning).toBe(false);
        expect(component).toMatchSnapshot();
    });

    describe("클릭하면, 잔물결 모양을 보여준 후 300ms 후 사라진다.", () => {
        it("잔물결 모양을 보여준다.", () => {
            const component = shallow(<Ripple />);
            component.instance().show();
            expect(component.state().isRunning).toBe(true);

            component.update();
            expect(component).toMatchSnapshot();
        });

        it("잔물결 모양을 숨긴다.", () => {
            const component = shallow(<Ripple />);
            component.instance().hide();
            expect(component.state().isRunning).toBe(false);

            component.update();
            expect(component).toMatchSnapshot();
        });

        it("잔물결 시작 위치를 설정한다.", () => {
            const component = shallow(<Ripple />);
            component.instance().setLocation({ left: "50px", top: "50px" });

            const expacted = component.state().location;
            expect(expacted.left).toEqual("50px");
            expect(expacted.top).toEqual("50px");

            component.update();
            expect(component).toMatchSnapshot();
        });
    });
});
