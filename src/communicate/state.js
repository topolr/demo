import {Service} from "adajs";

class InteractiveService extends Service{
	defaultData(){
		return {};
	}

	onupdate(current,data){
		Object.assign(current,data);
	}
}

export default InteractiveService;