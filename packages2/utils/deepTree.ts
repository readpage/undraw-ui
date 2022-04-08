import { isArray } from ".";

export function deepTree(list: Array<any>) {
	list = JSON.parse(JSON.stringify(list))
	const newList: Array<any> = [];
	const map: any = {};

	list.forEach((e) => (map[e.id] = e));

	list.forEach((e) => {
		const parent = map[e.parentId];

		if (parent) {
			(parent.children || (parent.children = [])).push(e);
		} else {
			newList.push(e);
		}
	});

	return newList;
}

export function revDeepTree(list: Array<any> = []) {
	const d: Array<any> = [];
	let id = 0;

	const deep = (list: Array<any>, parentId: any) => {
		list.forEach((e) => {
			if (!e.id) {
				e.id = id++;
			}

			e.parentId = parentId;

			d.push(e);

			if (e.children && isArray(e.children)) {
				deep(e.children, e.id);
			}
		});
	};

	deep(list || [], null);

	return d;
}

