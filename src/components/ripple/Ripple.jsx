import "./Ripple.scss";
import classnames from "classnames";
import React, { Component } from "react";
import RMD from "rm-dom";
import { autobind } from "core-decorators";

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
        const { top, left } = RMD.offset(RMD.parent(event.target));
        this.setLocation({ top: event.pageY - top, left: event.pageX - left });
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
