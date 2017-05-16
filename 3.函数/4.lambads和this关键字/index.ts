/**
 * Created by YSP易水寒 on 2017/2/5.
 */

var people = {
    name: ['yishuihan','易水寒','杨轩','穆依依'],
    getName: function(){
        return ()=>{
            var i = Math.floor(Math.random()*4);
            return {
                n: this.name[i]
            }
        }
    }
};
var myName = people.getName();
alert('姓名: '+myName().n);









