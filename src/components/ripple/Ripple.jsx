import "./Ripple.scss";
import classnames from "classnames";
import React, { Component } from "react";
import { autobind } from "core-decorators";

import dom from "src/utils/dom";

@autobind
class Ripple extends Component {
    state = {
        isRunning: false,
        location: {
            left: "50%",
            top: "50%"
        }
    };

    onClick(event) {
        const { x, y } = dom.position(dom.parent(event.target));
        this.setLocation({ left: event.pageX - x, top: event.pageY - y });
        this.show();
    }

    onAnimationEnd(event) {
        this.hide();
    }

    show() {
        this.setState({ isRunning: true });
    }

    hide() {
        this.setState({ isRunning: false });
    }

    setLocation({ left, top }) {
        this.setState({ location: { left, top } });
    }

    render() {
        const { isRunning, location } = this.state;

        return (
            <div
                className={classnames("u-ripple", { "is-active": isRunning })}
                onClick={this.onClick}
                onAnimationEnd={this.onAnimationEnd}
            ><div className="u-ripple-circle" style={location} /></div>
        );
    }
}

export default Ripple;
