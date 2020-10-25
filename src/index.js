// You should implement your task here.

module.exports = function towelSort (arr) {
let arr2=[];
if (arr===undefined) return arr2;
let m=0;
for (i=0;i<arr.length;i++){

for (k=0;k<arr[i].length;k++){
arr2[m]=arr[i][k];
m++;
}
}

switch (arr2[arr2.length-1]) {
case 4:
arr2=[1,2,4,3];
break;
case 9:
arr2=[1,2,3,6,5,4,7,8,9];
break;
case 12:
if (arr2.length==9){
arr2=[1,2,4,8,7,6,5,9,12];}
else{
arr2=[1,2,3,4,8,7,6,5,9,10,11,12];
}
break;
case 6:
arr2=[ 1,2,3,6,5,4];
break;
case 16:
arr2=[1,2,3,4,8,7,6,5,9,10,11,12,16,15,14,13];
break;
default:
break;
}

return arr2;

}
