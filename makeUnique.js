//solution from the internet 
// makeUnique = (str) => {
//     let set = new Set(str.split(''))
//     // return [...set].join('')
//     return [...set].join(``)
//   }

//Lukas provided one liner 

// const makeUnique = str => [...new Set(str).join(``)]

////solution with Lukas
  const makeUnique=(str) =>{
    let unique = ""

    for(let i =0; i<str.length; i++){
        if (!unique.includes(str[i])){
            unique += str[i]
        }
    }
    return unique
  }
 
console.log(makeUnique('iwanttoclimbamountain'))
// iwantoclmbu

