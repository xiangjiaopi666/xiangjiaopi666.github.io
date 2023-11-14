$(document).ready(
	function(){
		var obj = '';
		var message = '';
		for (k=new_message.length-1;k>0;k--) {
			obj = new_message[k]
			obj = '<div class="news"><h4>'+obj+'</h4></div>';
			message = message + obj;
		}
		message = '<div class="news"><h4>'+ new_message[0] +'</h4></div>' + message;
		$('.BulletinBoard').html(message);
	}
)