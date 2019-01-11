import "./style/reset.scss";
import "./style/style.css";
import {StaticViewGroup, root} from "adajs";
import List from "./todo/list";
import Todo from "./todo";

@root()
class Root extends StaticViewGroup {
	oncreated() {
		// this.addChild(List, {
		// 	parameter: [{id: "1", title: 'a'}]
		// });
		this.addChild(Todo);
	}
}

export default Root;