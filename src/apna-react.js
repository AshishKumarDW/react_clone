import { h } from "snabbdom";

const createElement = (type, props, ...children) => {
    if (typeof type == "function") {
        return type(props);
    }
    return h(type, { props }, children);
};

const ApnaReact = {
    createElement,
};

export default ApnaReact;
