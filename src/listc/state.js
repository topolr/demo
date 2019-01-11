import {action, Service} from "adajs";

class ListcService extends Service {
	defaultData() {
		return {
			list: []
		};
	}

	onupdate(current, data) {
		current.list = data;
	}

	@action("check")
	check(current, item) {
		let target = current.list.find(_item => _item.id === item.id);
		target.check = !target.check;
	}

	@action("remove")
	remove(current, item) {
		let index = current.list.findIndex(_item => _item.id === item.id);
		current.list.splice(index, 1);
	}
}

export default ListcService;