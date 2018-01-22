import "./Ripple.scss";
import classnames from "classnames";
import React, { Component } from "react";
import { autobind } from "core-decorators";

@autobind
class Ripple extends Component {
    state = {
        isRunning: false
    };

    onClick(event) {
        this.showRipple();
    }

    onAnimationEnd(event) {
        this.hideRipple();
    }

    showRipple() {
        this.setState({ isRunning: true });
    }

    hideRipple() {
        this.setState({ isRunning: false });
    }

    render() {
        const { isRunning } = this.state;

        return (
            <div
                className={classnames("u-ripple", { "is-active": isRunning })}
                onClick={this.onClick}
                onAnimationEnd={this.onAnimationEnd}
            ><div className="u-ripple-circle" /></div>
        );
    }
}

export default Ripple;
