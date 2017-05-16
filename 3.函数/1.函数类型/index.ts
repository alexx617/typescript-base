/**
 * Created by YSP易水寒 on 2017/2/5.
 */

/*function func(x,y){
    return x+y;
}
var myFunc = function(x,y){
    return x+y;
};*/

function func(x:number, y:number):string{
    return x+y+'string';
}

var myFunc = function(x:number, y:string):string{
    return x+y;
};

var youFunc:(name:string, age:number)=>number = function(n:string, a:number):number{
    return a;
}
