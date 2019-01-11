import {view, ViewGroup, handler, binder} from "adajs";
import TimetravelService from "./state.js";
import Todo from "./../todo";

@view({
	className: "timetravel",
	template: "./template.html",
	style: "./style.scss",
	dataset: {
		service: TimetravelService
	}
})
class Timetravel extends ViewGroup {
	tags() {
		return {
			todo: Todo
		}
	}

	@handler("change")
	change() {
		let size = this.getChildrenByType(Todo)[0].getDataSet().getCommitSize();
		this.commit('steps', size);
	}

	@binder("travel")
	travel({e}) {
		let target = e.target;
		this.getChildrenByType(Todo)[0].getDataSet().travel(target.value);
	}
}

export default Timetravel;