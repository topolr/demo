import {view,ViewConnector} from "adajs";

@view({
    className:"connector",
    template:"./template.html",
    style:"./style.scss"
})
class Connector extends ViewConnector{
	setContextDataSets(connect){
		return {};
	}

	onupdate(current,data){
		Object.assign(current,data);
	}
}

export default Connector;