import {util} from "adajs";

const fns = {
	initAll(data, level = 1) {
		return data.map(item => {
			item = Object.assign({}, item);
			item._opened = false;
			item._actived = false;
			item._id = util.randomid(8);
			item._level = level;
			item._isleaf = item.list.length === 0;
			item._type = item.type;
			item._icon = item.type === 0 ? ':pmk-folder_open' : ':pmk-web';
			if (item.type === 0) {
				if (level === 1) {
					item.btns = [
						{action: 'addFolder', icon: ':pmk-playlist_add', title: "Add Folder"},
						{action: 'addPageTemplate', icon: ':pmk-note_add', title: "Add Page From Templates"},
						{action: 'addPage', icon: ':pmk-add', title: "Add Empty Page"}
					];
				} else {
					item.btns = [
						{action: 'addPageTemplate', icon: ':pmk-note_add', title: "Add Page From Templates"},
						{action: 'addPage', icon: ':pmk-add', title: "Add Empty Page"}
					];
				}
			} else {
				item.btns = [
					{action: 'removePage', icon: ':pmk-close',title:"Remove Page"}
				];
			}
			let list = this.initAll(item.list, level + 1);
			let alist = [], blist = [];
			list.forEach(ele => {
				if (ele.type === 0) {
					alist.push(ele);
				} else {
					blist.push(ele);
				}
			});
			item.list = [...alist, ...blist];
			return item;
		});
	},
	findItem(current, item) {
		let target = null;
		let find = (list) => {
			for (let i = 0; i < list.length; i++) {
				if (list[i]._id !== item._id) {
					find(list[i].list || []);
				} else {
					target = list[i];
					break;
				}
			}
		};
		find(current.list);
		return target;
	},
	initSelectAll(data, parent = null) {
		data.forEach(item => {
			item._opened = false;
			item._actived = false;
			item._selected = false;
			item._parent = parent;
			this.initSelectAll(item.list, item);
		});
	},
	unactiveAll(data) {
		data.forEach(item => {
			item._actived = false;
			this.unactiveAll(item.list);
		});
	},
	selectCascade(data, item) {
		if (item._selected) {
			item._selected = false;
			this.unselectAllSubs(item.list);
			this.unselectAllParents(item);
		} else {
			item._selected = true;
			this.selectAllSubs(item.list);
			this.selectAllParents(item);
		}
	},
	selectAllParents(item) {
		let a = item._parent;
		while (a) {
			a._selected = true;
			a = a._parent;
		}
	},
	unselectAllParents(item) {
		let a = item._parent;
		while (a) {
			if (a.list.some(item => item._selected === true)) {
				a._selected = true;
			} else {
				a._selected = false;
			}
			a = a._parent;
		}
	},
	selectAllSubs(data) {
		data.forEach(item => {
			item._selected = true;
			this.selectAllSubs(item.list);
		});
	},
	unselectAllSubs(data) {
		data.forEach(item => {
			item._selected = false;
			this.unselectAllSubs(item.list);
		});
	}
};

export default fns;