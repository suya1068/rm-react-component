import React from "react";

import Ripple from "src/components/ripple/Ripple";

function ButtonPage() {
    return (
        <div>
            <p>
                <button style={{ position: "relative", width: "200px", height: "50px" }}>
                    <div style={{ width: "100%", height: "100%" }}>
                        <Ripple />
                    </div>
                </button>
            </p>
        </div>
    );
}

export default ButtonPage;
