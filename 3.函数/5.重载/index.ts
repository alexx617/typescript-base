/**
 * Created by YSP易水寒 on 2017/2/5.
 */

function attr(name: string):string;
function attr(age: number):number;
function attr(nameORage):any{
    if(nameORage && typeof nameORage === 'string'){
        alert('name 姓名');
    }else{
        alert('age 年龄');
    }
}

attr(22);
attr('yishuihan');








