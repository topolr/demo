import {view, ViewGroup, binder, handler} from "adajs";
import TodoService from "./state.js";
import List from "./list";

@view({
	className: "todo",
	template: "./template.html",
	style: "./style.scss",
	dataset: {
		service: TodoService
	}
})
class Todo extends ViewGroup {
	tags() {
		return {list: List};
	}

	@binder("checkAll")
	checkAll() {
		this.commit("checkAll");
	}

	@binder("add")
	add({e}) {
		let target = e.target, value = target.value;
		if (value && e.keyCode === 13) {
			target.value = '';
			this.commit("add", value);
		}
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

export default Todo;