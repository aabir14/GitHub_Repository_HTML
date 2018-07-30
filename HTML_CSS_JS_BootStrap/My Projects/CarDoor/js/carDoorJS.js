function validate_pickup_form(){
	var  cityname , pickup_date , return_date , Car_type , pickup_submit , passengers ;

	/*cityname = document.getElementById("city_name").value;

	pickupdate = document.getElementById("pickupdate").value;

	returndate = document.getElementById('returndate').value;*/
	
	passengers = document.getElementById("noOfPssengers").value;
	
	//aler(cityname);

	/*if (pickupdate == date.getDate()) {
		alert("Invalid Pickup Date");
		return false;	
	}*/
	
	//alert(passengers);

	if (passengers >= 5) {
		document.getElementById("lnoOfPssengers").innerHTML ="Car cannot acomodate passengers more than 4 ";
		document.getElementById("noOfPssengers").value=passengers;
		return false;	
	}

	
}