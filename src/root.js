import "./style/reset.scss";
import "./style/style.css";
import {StaticViewGroup, root} from "adajs";
import List from "./list";
import Todo from "./todo";
import TimeTravel from "./timetravel";

@root()
class Root extends StaticViewGroup {
	oncreated() {
		// this.addChild(List, {
		// 	parameter: [{id: "1", title: 'a'}]
		// });
		// this.addChild(Todo);
		this.addChild(TimeTravel);
	}
}

export default Root;