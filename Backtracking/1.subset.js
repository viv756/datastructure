var subset = (nums)=>{
  let res = []
  let backTrack = (path, start) => {
    result.push([...path])
    
    for (let i = start; i < nums.length; i++){
      path.push(arr[i])
      backTrack(path, i + 1)
      path.pop()
    }
  }
  
  backTrack([], 0)
  return res
}