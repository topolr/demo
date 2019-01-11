import {Service, action} from "adajs";

class ReactiveService extends Service {
	defaultData() {
		return {
			name: "Test"
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}

	@action("setName")
	setName(current, name) {
		current.name = name;
	}
}

export default ReactiveService;