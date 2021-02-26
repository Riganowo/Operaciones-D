function operaciones(){
	var operacion;

	operacion=document.getElementById('operacion').value;
	pn = document.getElementById('pn').value;
	sn = document.getElementById('sn').value;


	switch(operacion){
		case "1" : alert(parseInt(pn)+parseInt(sn));
		break;
		case "2" : alert(parseInt(pn)-parseInt(sn));
		break;
		case "3" : alert(parseInt(pn)*parseInt(sn));
		break;
		case "4" : alert(parseInt(pn)/parseInt(sn));
		break;
	}


}