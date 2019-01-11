import {Service, action, util} from "adajs";

class TodoService extends Service {
	defaultData() {
		return {
			list: [],
			checkAll: false
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}

	@action("checkAll")
	checkAll(current) {
		current.checkAll = !current.checkAll;
		current.list.forEach(item => item.check = current.checkAll);
	}

	@action("add")
	add(current, value) {
		current.list.push({
			id: util.randomid(),
			title: value,
			check: false
		});
	}

	@action("check")
	check(current, item) {
		let target = current.list.find(_item => _item.id === item.id);
		target.check = !target.check;
		if (current.list.length > 0) {
			current.checkAll = current.list.find(_item => _item.check === false) === undefined;
		} else {
			current.checkAll = false;
		}
	}

	@action("remove")
	remove(current, item) {
		let index = current.list.findIndex(_item => _item.id === item.id);
		current.list.splice(index, 1);
		if (current.list.length > 0) {
			current.checkAll = current.list.find(_item => _item.check === false) === undefined;
		} else {
			current.checkAll = false;
		}
	}
}

export default TodoService;