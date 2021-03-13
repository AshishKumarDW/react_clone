import * as snabbdom from "snabbdom";
import propsModule from "snabbdom/modules/props";

const reconcile = snabbdom.init([propsModule]);

let rootNode;

const render = (el, rootDomElement) => {
    if (rootNode == null) {
        rootNode = rootDomElement;
    }

    rootNode = reconcile(rootNode, el);
};

const ApnaReactDom = {
    render,
};

export default ApnaReactDom;
