import {view, ViewGroup} from "adajs";
import SsrService from "./state.js";
import List from "./../listc";

@view({
	className: "ssr",
	template: "./template.html",
	style: "./style.scss",
	dataset: {
		service: SsrService
	}
})
class Ssr extends ViewGroup {
	onready() {
		this.context.snapshot();
	}

	tags() {
		return {
			list: List
		}
	}
}

export default Ssr;