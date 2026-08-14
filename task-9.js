const isStrictMatch = (input, target) => {

    if(input === target){

        return true;
    }else{

        return false;
    }
}

console.log(isStrictMatch("18", 18));
console.log(isStrictMatch(18, 18));
