/**
 * Created by YSP易水寒 on 2017/2/6.
 */

class Person{
    public name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age  = age;
    }
    print(){
        return this.name + ':'+ this.age;
    }
}

class Student extends Person{
    school: string;
    constructor(school: string){
        super('iwen',88888888);
        this.school = school;
    }
    print(){
        return this.name + ':' + this.age + ':' + this.school;
    }
}

var aa = new Student('大学校');
// aa.name = 'ime';
// aa.age = 88;
// aa.school = '大学';
alert(aa.print());








