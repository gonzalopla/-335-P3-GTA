let selectionSort = (items) => {

	//Loop till the second last element
	for(let i = 0; i < items.length - 1; i++){
 
	   //Loop after the i till the last element
	   for(let j = i + 1; j < items.length; j++){
 
		  //if jth element is less than the ith element then swap
		  //change < to > for sorting in descending order
		  if(items[j] < items[i]){
			let temp = items[i];
			items[i] = items[j];
			items[j] = temp;
		  }
 
	   }
 
	}
	
	//return the sorted array
	return items;
 }
 if(items[j] < items[i]){
	[ items[i], items[j] ] = [ items[j], items[i] ];
  }

