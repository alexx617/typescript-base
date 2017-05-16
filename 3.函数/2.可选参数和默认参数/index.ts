/**
 * Created by YSP易水寒 on 2017/2/5.
 */

/*function buildName(firstName:string, lastName?:string){
    if(lastName){
        return firstName+lastName;
    }else{
        return firstName;
    }
}
var person1 = buildName('ime','iwen');
var person2 = buildName('ime');*/
// var person3 = buildName('ime','iwen','imine');

function buildName(firstName:string, lastName="yishuihan"){
    return firstName+' and '+lastName;
}
var person1 = buildName('ime','iwen');
var person2 = buildName('ime');

document.getElementById('pid').innerHTML = person2;




