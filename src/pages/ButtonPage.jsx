import React from "react";

import Button from "src/components/button/Button";

function ButtonPage() {
    return (
        <div>
            <p>
                <Button>default</Button>
            </p>
            <p>
                <Button theme="primary">primay</Button>
            </p>
            <p>
                <Button theme="secondary">secondary</Button>
            </p>
            <p>
                <Button theme="positive">positive</Button>
            </p>
            <p>
                <Button theme="negative">negative</Button>
            </p>
            <p>
                <Button size="tiny">tiny</Button>
                <Button size="small">small</Button>
                <Button>default</Button>
                <Button size="large">large</Button>
                <Button size="big">big</Button>
            </p>
        </div>
    );
}

export default ButtonPage;
