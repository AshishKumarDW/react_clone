import { h } from "snabbdom";

const createElement = (type, props, ...children) => {
    if (type.prototype && type.prototype.isApnaReactClassComponent) {
        const componentInstance = new type(props);

        componentInstance.__vNode = componentInstance.render();

        return componentInstance.__vNode;
    }

    if (typeof type == "function") {
        return type(props);
    }

    return h(type, { props }, children);
};

class Component {
    constructor() {}

    ComponentDidMount() {}

    setState(partialState) {
        this.state = {
            ...this.state,
            ...partialState,
        };

        ApnaReact.__updater(this);
    }

    render() {}
}

Component.prototype.isApnaReactClassComponent = true;

const ApnaReact = {
    createElement,
    Component,
};

export default ApnaReact;
