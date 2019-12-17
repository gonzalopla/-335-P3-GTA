var data = [5,3,7,6,2,9];

function swap(data, firstInd, secondInd){
    var holder = data[firstInd];
    data[firstInd] = data[secondInd];
    data[secondInd] = holder;}

function partition(data, first, second) {
    var pivot   = data[Math.floor((second + first) / 2)],
        i       = first, 
        j       = second; 
    while (i <= j) {
        while (data[i] < pivot) {
            i++;}
        while (data[j] > pivot) {
            j--;}
        if (i <= j) {
            swap(data, i, j); 
            i++;
            j--; }}
    return i;}

function quickSort(data, first, second) {
    var index;
    if (data.length > 1) {
        index = partition(data, first, second); 
        if (first < index - 1) { 
            quickSort(data, first, index - 1); }
        if (index < second) { quickSort(data, index, second);}}
    return data;}

var sortedArray = quickSort(data, 0, data.length - 1);
console.log(sortedArray);

