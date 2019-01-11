import {view, View, binder} from "adajs";
import ReactiveService from "./state.js";

@view({
	className: "reactive",
	template: "./template.html",
	style: "./style.scss",
	dataset: {
		service: ReactiveService
	}
})
class Reactive extends View {

	@binder("setName")
	setName() {
		let val = this.finder("input").getElement().value;
		this.commit("setName", val);
	}
}

export default Reactive;