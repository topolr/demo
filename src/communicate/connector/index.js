import {view, ViewConnector} from "adajs";
import CommunicateService from "./../state";
import List from "./../../list";

@view({
    className: "connector",
    template: "./template.html",
    style: "./style.scss"
})
class Connector extends ViewConnector {
    setContextDataSets(connect) {
        let list = connect(CommunicateService, current => {
            return current.list;
        }, (current, data) => {
            console.log(data);
            current.list = data;
        });
        return {list};
    }

    onupdate(current, data) {
        Object.assign(current, data);
    }

    tags() {
        return {
            list: List
        };
    }
}

export default Connector;