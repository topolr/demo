import {handler, view, ViewGroup} from "adajs";
import ListcService from "./state.js";
import List from "./../list";

@view({
	className: "listc",
	template: "./template.html",
	style: "./style.scss",
	dataset: {
		service: ListcService
	}
})
class Listc extends ViewGroup {
	tags() {
		return {list: List};
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

export default Listc;