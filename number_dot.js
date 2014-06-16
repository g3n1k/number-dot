(function( $ ) {
$.fn.number_dot = function(){
var t = this;
var c = $(t).clone();
var id = c.attr('id')+'__rp';
c.attr('id',id);
c.removeAttr('name'); /* this if you plan to use form */
t.css('display','none');

c.insertAfter(t);
c.val(formatdecimal2('.', ',', c.val()));

c.keyup(function(){ 
	var v = formatdecimal2('.', ',', c.val());
	c.val(v);
	t.val(v.replace(/[^\/\d]/g,''));
});

function formatdecimal2(sep, dec, value){
	var nilai = value + "";
	
	var split = nilai.split(dec);
	nilai = split[0].replace(/[\Wa-zA-Z]/g,'').replace(/\./g,'');
	var afterdec = split[1];
	
	var counter = 0;
	var arrcounter = 0;
	var arr = new Array();
	var result = '';

	for (var i=nilai.length-1 ; i >=0 ; i--){
		counter++;
		if (counter == 3){
			arr[arrcounter] = nilai.substr(i,3);
			counter = 0;
			arrcounter++;
		}
		if (i == 0)	{
			if (nilai.substr(i,counter).length > 0)
			arr[arrcounter] = nilai.substr(i,counter);
		}
	}
	
	for (var i in arr) {
		if (i == 0) result = arr[i] + result;
		else result = arr[i] + sep + result;
	}
		
	if (split.length > 1) {
		afterdec = afterdec.replace(/[\Wa-zA-Z]/g,'');
		value = result + dec + afterdec;
	}
	else value = result;
	return value;
}

}}( jQuery ));
