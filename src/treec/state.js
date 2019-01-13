import {Service} from "adajs";

class TreecService extends Service {
    defaultData() {
        return {
            list: []
        };
    }

    onupdate(current, data) {
        return this.context.request.get("/static/tree.json").then(data => {
            current.list = data;
        });
    }
}

export default TreecService;