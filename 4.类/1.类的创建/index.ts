/**
 * Created by YSP易水寒 on 2017/2/5.
 */

class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    print(){
        return this.name+':'+this.age;
    }
}

var p = new Person('yishuihan',22);
alert(p.print());





