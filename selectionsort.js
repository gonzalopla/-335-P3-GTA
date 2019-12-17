let selectionSort = (data) => {

	for(let i = 0; i < data.length - 1; i++){
 
	   for(let j = i + 1; j < data.length; j++){

		  if(data[j] < data[i]){
			let holder = data[i];
			data[i] = data[j];
			data[j] = holder; }}}

	return data; }
 if(data[j] < data[i]){
	[ data[i], data[j] ] = [ data[j], data[i] ]; }

