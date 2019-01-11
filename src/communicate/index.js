import {view,ViewGroup} from "adajs";
import CommunicateService from "./state.js";

@view({
    className:"communicate",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:CommunicateService
    }
})
class Communicate extends ViewGroup{
}

export default Communicate;