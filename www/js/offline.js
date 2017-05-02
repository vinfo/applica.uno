var checkCon= setInterval(function () {	
	if(localStorage.offline=="true")checkConnection();
}, 5000);
alert(localStorage.offline);
if(localStorage.offline=="false")clearInterval(checkCon);