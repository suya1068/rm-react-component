import "./Progress.scss";
import React from "react";
import PropTypes from "prop-types";

export default function Progress() {
    return (
        <div className="u-progress">
            <div className="u-progress__bar">
                <div className="u-progress-status">50%</div>
            </div>
            <div className="u-progress__label">label</div>
        </div>
    );
}

Progress.propTypes = {
    value: PropTypes.number,
    className: PropTypes.shape({
        success: PropTypes.string,
        error: PropTypes.string
    }),
    animation: PropTypes.shape({
        duration: PropTypes.string
    })
};

Progress.defaultProps = {
    value: 0,
    className: {
        success: "u-progress--success",
        error: "u-progress--error"
    },
    animation: {
        duration: "600ms"
    }
};
