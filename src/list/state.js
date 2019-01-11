import {Service, action} from "adajs";

class ListService extends Service {
	defaultData() {
		return {
			list: []
		};
	}

	onupdate(current, list) {
		current.list = list;
	}
}

export default ListService;