import "./style/reset.scss";
import "./style/style.css";
import {StaticViewGroup, root} from "adajs";
import List from "./list";
import Todo from "./todo";
import TimeTravel from "./timetravel";
import SSR from "./ssr";
import Reactive from "./reactive";
import Communicate from "./communicate";
import TreeContainer from "./treec";

@root()
class Root extends StaticViewGroup {
    oncreated() {
        // this.addChild(List, {
        // 	parameter: [{id: "1", title: 'a'}]
        // });
        // this.addChild(Todo);
        // this.addChild(TimeTravel);
        // this.addChild(SSR);
        this.addChild(Reactive);
        // this.addChild(Communicate);
        // this.addChild(TreeContainer);
    }
}

export default Root;