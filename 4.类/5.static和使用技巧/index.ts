
/**
 * Created by YSP易水寒 on 2017/2/6.
 */

class Person{
    static name: string;
    tell(){
        alert('aa的年龄是'+Person.name);
    }
}

var aa = new Person();
Person.name = '易水寒';
aa.tell();



class People{
    age: number;
    constructor(age: number){
        this.age = age;
    }
    tell(){
        return this.age;
    }
}

var bb: People;
bb = new People(888);
alert(bb.tell());





