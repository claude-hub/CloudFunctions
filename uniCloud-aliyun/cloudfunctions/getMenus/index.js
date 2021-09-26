'use strict';

exports.main = async (event, context) => {
	const db = uniCloud.database();
	const data = await db.collection('menus').get();
	//返回数据给客户端
	return data;
};
