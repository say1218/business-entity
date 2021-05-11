export const getFormattedDate = (input) => {
	let date = new Date(input);
	var year = date.getFullYear();
	var month = (1 + date.getMonth()).toString();
	month = month.length > 1 ? month : "0" + month;
	var day = date.getDate().toString();
	day = day.length > 1 ? day : "0" + day;
	return year + "-" + month + "-" + day;
};