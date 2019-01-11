import {view,ViewGroup} from "adajs";
import InteractiveService from "./state.js";

@view({
    className:"interactive",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:InteractiveService
    }
})
class Interactive extends ViewGroup{
}

export default Interactive;