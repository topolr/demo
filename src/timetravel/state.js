import {Service, action} from "adajs";

class TimetravelService extends Service {
	defaultData() {
		return {
			step: 1
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}

	@action("steps")
	steps(current, size) {
		current.step = size;
	}
}

export default TimetravelService;