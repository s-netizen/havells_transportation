// JavaScript Document
$(document).ready(function(){  
	
	$('.toggle-btn').click(function(){
		//alert('Hi');
		$('.dashboard').toggleClass('is-active');
		$('.toggle-btn').toggleClass('active');
	});	
	
	$('.tr-toggle-btn').click(function(e){ 
		e.stopPropagation();
		$(this).closest('tr').next('tr').toggleClass('active');
		$(this).closest('tr').next('tr').toggleClass('open');
		$(this).toggleClass('active');

	});	
});

