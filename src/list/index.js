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
		this.dispatchEvent("check", item);
	}

	@binder("remove")
	remove({item}) {
		this.dispatchEvent("remove", item);
	}
}

export default List;