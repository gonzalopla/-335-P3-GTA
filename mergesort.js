function mergeSort (data) {
	if (data.length <= 1) {
	  return data;}
	const getMid = Math.floor(data.length / 2);
	const first = data.slice(0, getMid);
	const second = data.slice(getMid);
	return merge(
	  mergeSort(first), mergeSort(second)); }
  
  function merge (first, second) {
	let mergeArray = [], firstInd = 0, seconInd = 0;
	while (firstInd < first.length && seconInd < second.length) {
	  if (first[firstInd] < second[seconInd]) {
		mergeArray.push(first[firstInd]);
		firstInd++;
	  } else {
		mergeArray.push(second[seconInd]);
		seconInd++;}}
	return mergeArray
			.concat(first.slice(firstInd))
			.concat(second.slice(seconInd));}
  if (data.length <= 1) { 
	  return data; }
