import {handler, view, ViewGroup} from "adajs";
import CommunicateService from "./state.js";
import List from "../list";
import Container from "./container";

@view({
    className: "communicate",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: CommunicateService
    }
})
class Communicate extends ViewGroup {
    tags() {
        return {
            list: List,
            container: Container
        };
    }

    @handler("check")
    check({data}) {
        this.commit("check", data);
    }

    @handler("remove")
    remove({data}) {
        this.commit("remove", data);
    }
}

export default Communicate;