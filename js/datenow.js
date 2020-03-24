var date = new Date();

	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();

	var hours = date.getHours();
	var minutes = date.getMinutes();

	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;

	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;

	var today = year + "-" + month + "-" + day;

	var TimeG = hours + ":" + minutes; 

	document.getElementById("DateTodayFrom").value = today;
	document.getElementById("DateTodayTill").value = today;

	document.getElementById("TimeNow1").value = TimeG;
	document.getElementById("TimeNow2").value = TimeG;
