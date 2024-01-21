
let array=[]

for (let i =0; i<Infinity;i++){
    let word=prompt('Введите команду'); 'add, html'
    let commad =word.split(', ')['add', 'html']
    if(commad[0]=='add'){
        array.push(commad[1])
    }else if(commad[0] == 'del'){
        for(let i =0; i< array.length;i++){
            array[i] == commad[1] ? array.split(i,1) : ''   
          }
    }
}
