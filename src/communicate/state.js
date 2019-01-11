import {Service} from "adajs";

class CommunicateService extends Service{
	defaultData(){
		return {};
	}

	onupdate(current,data){
		Object.assign(current,data);
	}
}

export default CommunicateService;