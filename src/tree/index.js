import {view, binder, View} from "adajs";
import TreeService from "./state";

@view({
	className: "simpletree",
	template: "./template.html",
	style: "./style.scss",
	dataset: {
		service: TreeService
	}
})
class SimpleTree extends View {
	@binder("toggle")
	toggle({item}) {
		this.commit("toggle", item);
	}

	@binder("active")
	active({item}) {
		this.commit("active", item);
		this.dispatchEvent('openPage', item);
	}

	@binder("action")
	action({btn, item}) {
		this.dispatchEvent('treeAction', {btn, item});
	}
}


export default SimpleTree;