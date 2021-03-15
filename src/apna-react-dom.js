import ApnaReact from "./apna-react";
import * as snabbdom from "snabbdom";
import propsModule from "snabbdom/modules/props";
import eventlistenersModule from "snabbdom/modules/eventlisteners";

const reconcile = snabbdom.init([propsModule, eventlistenersModule]);

let rootNode;

const render = (el, rootDomElement) => {
    if (rootNode == null) {
        rootNode = rootDomElement;
    }

    rootNode = reconcile(rootNode, el);
};

ApnaReact.__updater = (componentInstance) => {
    const oldVNode = componentInstance.__vNode;
    const newVNode = componentInstance.render();

    componentInstance.__vNode = reconcile(oldVNode, newVNode);
};

const ApnaReactDom = {
    render,
};

export default ApnaReactDom;
