import "./Button.scss";
import classnames from "classnames";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const hasOwnProperty = Object.prototype.hasOwnProperty;
const toString = Object.prototype.toString;

class Button extends PureComponent {
    render() {
        const { children, theme, size, width, height, className, style, ...rest } = this.props;
        const buttonProps = {
            ...rest,
            className: classnames("u-button", Button.theme[theme], Button.size[size], className)
        };

        if (style || width || height) {
            buttonProps.styles = Object.assign({}, style, Button.createStyles({ width, height }));
        }

        return React.createElement("button", buttonProps, children);
    }
}

Button.theme = {
    "primary": "u-button-primary",
    "secondary": "u-button-secondary",
    "positive": "u-button-positive",
    "negative": "u-button-negative",
    "info": "u-button-info",
    "dark": "u-button-dark"
};

Button.size = {
    "tiny": "u-button-tiny",
    "small": "u-button-small",
    "large": "u-button-large",
    "big": "u-button-big"
};

Button.createStyles = function createStyles(data = {}) {
    const sheet = Object.keys(data).reduce((box, key) => {
        const value = data[key];

        if (value !== undefined && value !== null && value !== "") {
            box[key] = typeof value === "string" ? value : `${value}px`;
        }

        return box;
    }, {});

    return Object.keys(sheet).length > 0 ? sheet : null;
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.oneOf(Object.keys(Button.theme)),
    size: PropTypes.oneOf(Object.keys(Button.size)),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    style: PropTypes.shape({})
};

Button.defaultProps = {
    theme: null,
    size: null,
    width: null,
    className: "",
    style: null
};

export default Button;
