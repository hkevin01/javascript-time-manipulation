/**
 * parses up the date and returns the utc time
 * @param date
 * @returns
 */
function parseDate(date){
	//2016-09-30 16:18:22
	var year = date.substring(0,4);
	
	var month = date.substring(5, 7);  month = month - 1; 
	var day = date.substring(8,10);
	var hours = date.substring(11,13);
	var minutes = date.substring(14,16);
    var seconds = date.substring(17,19);
    //*/
    var dDate = new Date(date);
    dDate = new Date(dDate - 10 * MS_PER_SECOND);
    dDate.setUTCDate(day);
    dDate.setUTCMonth(month);
    dDate.setUTCHours(hours);
    dDate.setUTCMinutes(minutes);
    dDate.setUTCSeconds(seconds);
    //Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])
    //var d2 = new Date( d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds() );
    //dDate.toUTCString();
    var utc = dDate.getTime(); //returns utc timestamp
    //1475244602814
    //alert(year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds);
    //alert(utc);
    //var utc = getCurrentTimeUTC(dDate);
    return utc;
}
