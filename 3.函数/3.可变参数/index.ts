/**
 * Created by YSP易水寒 on 2017/2/5.
 */

function buildName(firstName: string, ...restName:string[]){
    return firstName + restName.join(' ');
}
var myName = buildName('yi','shui','han','-001');
document.getElementById('pid').innerHTML = myName;
console.log(123);







