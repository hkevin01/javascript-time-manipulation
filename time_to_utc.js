function setTime(time){
	//string coming in 
	//"Y-m-d H:i:s"
	var YMD = time.split("-");
	var daytime = YMD[2].split(" "); 
	var HIS = daytime[1].split(":");
	var year = YMD[0];
	var month = YMD[1] -1;
	var day = daytime[0];
	var hour = HIS[0];
	var minutes = HIS[1];
	//alert( "Time is: " + year + "/" + month + "/" + day + " " + hour +":" + minutes);

		date_obs_end.setFullYear(year);
		date_obs_end.setUTCMonth(month);
		date_obs_end.setUTCHours(hour);
		date_obs_end.setUTCDate(day);
		date_obs_end.setUTCMinutes(minutes);
		document.cookie ="end="+date_obs_end.toString(); 
	    end_time = new Date(Date.UTC(date_obs_end.getFullYear(), date_obs_end.getUTCMonth() , date_obs_end.getUTCDate(), 
	    		date_obs_end.getHours(), date_obs_end.getUTCMinutes() ) );
	    end_time = end_time.getTime();
	
}
