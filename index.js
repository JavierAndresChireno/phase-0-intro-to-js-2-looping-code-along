
const names = ['Lisa', 'Kaitlin','Jan']
const party = ['Surprise']

function writeCards(names, event){
    let newArr = [];
    for (let i = 0; i < names.length; i++){
        newArr.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return newArr;
}
writeCards(['Lisa','Kaitlin','jan'],'surprise');

function countDown(i){
    while (i >=0){
        console.log(i);
        i--;
;    }

}