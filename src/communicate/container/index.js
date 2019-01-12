import {view, ViewGroup} from "adajs";
import ContainerService from "./state.js";
import Connector from "./../connector";

@view({
    className: "container",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: ContainerService
    }
})
class Container extends ViewGroup {
    tags() {
        return {
            connector: Connector
        };
    }
}

export default Container;