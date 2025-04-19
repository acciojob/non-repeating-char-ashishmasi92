function firstNonRepeatedChar(str) {
 // Write your code here

    let map =new Map()
    for(let t of str.toLowerCase()){
        
       if(map.has(t)){
        let v = map.get(t)
        map.set(t,v+1)
       }
       else{
        map.set(t,1)
       }
       
    }

  let min = 0
  let key1 = ""

for(let [key,value] of map){

if(map.get(key)=="1"){
    return key
}

}
		return null
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
