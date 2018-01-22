import React from "react";
import Button from "src/components/button/Button";

describe("Button Component", () => {
    it("랜더링한다.", () => {
        const component = shallow(<Button>버튼</Button>);
        expect(component).toMatchSnapshot();
    });

    it("테마를 설정한다.", () => {
        const component = shallow(<Button theme="primary">버튼</Button>);
        expect(component).toMatchSnapshot();

        component.setProps({ theme: "secondary" });
        expect(component).toMatchSnapshot();

        component.setProps({ theme: "positive" });
        expect(component).toMatchSnapshot();

        component.setProps({ theme: "negative" });
        expect(component).toMatchSnapshot();
    });
    
    it("사이즈를 설정한다.", () => {
        const component = shallow(<Button size="tiny">버튼</Button>);
        expect(component).toMatchSnapshot();

        component.setProps({ size: "small" });
        expect(component).toMatchSnapshot();

        component.setProps({ size: "large" });
        expect(component).toMatchSnapshot();

        component.setProps({ size: "big" });
        expect(component).toMatchSnapshot();
    });

    it("width와 height이 설정되었다면, inline-style로 데이터를 설정한다.", () => {
        let actual;

        actual = Button.createStyles();
        expect(actual).toEqual(null);

        actual = Button.createStyles({ width: 200, height: "" });
        expect(actual).toEqual({ width: "200px" });

        let component = shallow(<Button width={200}>버튼</Button>);
        expect(component).toMatchSnapshot();

        component = shallow(<Button width={200} height={50}>버튼</Button>);
        expect(component).toMatchSnapshot();
    });

    it("기본속성을 설정한다.", () => {
        const component = shallow(
            <Button
                className="text-center"
                autoFocus={true}
                style={{ width: "100px", backgroundColor: "black" }}
                onClick={() => {}}
            >버튼</Button>
        );
        expect(component).toMatchSnapshot();
    });

    it("width와 style속성 width과 중복된다면, width값이 설정된다.", () => {
        const component = shallow(<Button style={{ width: "100px" }} width={200}>버튼</Button>);
        expect(component).toMatchSnapshot();
    });
});

/*
    // https://semantic-ui.com/elements/button.html
    1. 유효하지 않은 테마를 설정하면, 타입에러가 발생한다.
    2. 유효하지 않은 사이즈를 설정하면, 타입에러가 발생한다.
    3. 버튼을 클릭하면, 콜백함수가 실행된다.

    // 기본 속성
    * type - one of ['button', 'submit']. default 'button'
    * disabled - one of [true, false]. default false
    * autofocus - one of [true, false]. default false

    // 커스텀 속성
    * theme - one of ['primary', 'secondary', 'positive', 'negative']. default null
    * size - one of ['tiny', 'small', 'large', 'big']. default null (? { width: number, height: number })
    * shape - one of ['circle', 'round', 'rectangle']. default 'round'
    * transparent - one of [true, false]. default false
*/

/*
    function Button() {}

    new Button();

    new Button({
        theme: 'primary'
    });

    new Button({
        theme: 'primary',
        size: 'small'
    });

    new Button({
        theme: 'primary',
        size: 'small',
        transparent: true
    });

    new Button({
        theme: 'primary',
        size: 'small',
        disabled: true
    });
*/
