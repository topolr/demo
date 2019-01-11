import {view, View, binder} from "adajs";
import ListService from "./state.js";

@view({
	className: "list",
	template: "./template.html",
	style: "./style.scss",
	dataset: {
		service: ListService
	}
})
class List extends View {
	@binder("check")
	check({item}) {
		if (!this.getParent()) {
			this.commit("check", item);
		} else {
			this.dispatchEvent("check", item);
		}
	}

	@binder("remove")
	remove({item}) {
		if (!this.getParent()) {
			this.commit("remove", item);
		} else {
			this.dispatchEvent("remove", item);
		}
	}
}

export default List;