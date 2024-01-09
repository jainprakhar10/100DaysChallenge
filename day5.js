function longestCommonPrefix(arr){
    if(!arr.length) return ""
    let longestPrefix = ""
    for(let i = 0; i < arr[0].length; i++){
      if(arr.every(str => i < str.length && str[i]=== arr[0][i])){
         longestPrefix += arr[0][i]
      }else{
        break
      }
    }
    return longestPrefix
  }
  console.log(longestCommonPrefix(["flower","flow","flight"]))
  console.log(longestCommonPrefix(["dog","racecar","car"]))