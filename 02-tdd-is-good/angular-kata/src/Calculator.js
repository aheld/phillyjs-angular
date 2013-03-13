function AddSimple(numbers,delimeter) {
	var tmp = numbers.split(new RegExp(delimeter));
	var result =  0;
	tmp.forEach(function(x){
		var tmpNum = Number(x);
		if (tmpNum < 0) throw Error('negatives not allowed');
		result += tmpNum;
	});
	return result;
}

function Add(numbers){
	var tmp = returnDelimAndNumbers(numbers);
	return AddSimple(tmp.numbers,tmp.delimeter);
}

function returnDelimAndNumbers(numbers){
	var delimeter = ["\n",","];
	if (numbers.indexOf("//") === 0){
		delimeter.push(numbers.slice(2,3));
		numbers = numbers.slice(4);
	}
	delimeter = "[" + delimeter.join("") + "]";
	return {'numbers':numbers,'delimeter':delimeter};
}