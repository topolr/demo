import {view, ViewGroup} from "adajs";
import TreecService from "./state.js";
import Tree from "./../tree";

@view({
    className: "treec",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TreecService
    }
})
class Treec extends ViewGroup {
    tags() {
        return {
            tree: Tree
        }
    }
}

export default Treec;