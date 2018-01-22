export default {
    parent(node) {
        if (!node) {
            return null;
        }

        let element = node.parentNode;
        while (element && element.nodeType !== 1) {
            element = element.parentNode;
        }

        return element;
    },

    position(node) {
        let xPos = 0;
        let yPos = 0;

        while (node) {
            if (node.tagName === "BODY") {
                // deal with browser quirks with body/window/document and page scroll
                const xScroll = node.scrollLeft || document.documentElement.scrollLeft;
                const yScroll = node.scrollTop || document.documentElement.scrollTop;

                xPos += (node.offsetLeft - xScroll) + node.clientLeft;
                yPos += (node.offsetTop - yScroll) + node.clientTop;
            } else {
                xPos += (node.offsetLeft - node.scrollLeft) + node.clientLeft;
                yPos += (node.offsetTop - node.scrollTop) + node.clientTop;
            }

            node = node.offsetParent;
        }

        return { x: xPos, y: yPos };
    }
};
