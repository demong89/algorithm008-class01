var setZeroes = function(matrix) {
    let arrI = []
    let arrJ = []
    let M  = matrix.length,N = matrix[0].length
    for(let i = 0;i<M;i++){
        for(let j = 0;j< N;j++){
            if(matrix[i][j]===0){
               if(!arrI.includes(i)){
                   arrI.push(i)
               }
                if(!arrJ.includes(j)){
                   arrJ.push(j)
               }
            }
        }
    }
    for(let i =0;i<arrI.length;i++){
        for(let j = 0;j< N;j++){
            matrix[arrI[i]][j] = 0
        }
    }
    for(let i = 0;i<arrJ.length;i++){
       for(let j = 0;j<M ;j++){
            matrix[j][arrJ[i]] = 0
        }
    }
   
};