/**
 * Created by YSP易水寒 on 2017/2/5.
 */

/*function printeLabel(labelObj: {label: string}){
    console.log(labelObj.label);
}
var myLabel = {label: 'yishuihan'};
printeLabel(myLabel);*/

interface arguments{
    label: string;
}
function printeLabel(labelObj: arguments){
    console.log(labelObj.label);
}
var myLabel = {label: 'yishuihan-001'};
printeLabel(myLabel);

