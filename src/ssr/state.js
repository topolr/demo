import {Service} from "adajs";

class SsrService extends Service {
	defaultData() {
		return {
			list: []
		};
	}

	onupdate(current, data) {
		return this.context.request.get("/static/list.json").then(info => {
			current.list = info;
		});
	}
}

export default SsrService;