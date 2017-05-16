/**
 * Created by YSP易水寒 on 2017/2/5.
 */

interface info{
    name: string;
    age?: number;
}
function printeInfo(obj: info){
    console.log(obj.name);
    // console.log(obj.age);
}
var myInfo = {name: 'yishuihan易水寒'};
printeInfo(myInfo);




