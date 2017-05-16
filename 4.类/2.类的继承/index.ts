/**
 * Created by YSP易水寒 on 2017/2/5.
 */

class Person{
    name: string;
    age: number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    tell(){
        return this.name +'&'+ this.age;
    }
}

class Student extends Person{
    school: string;
    constructor(school:string){
        super('yishuihan',222);
        //'super' must be called before accessing 'this' in the constructor of a derived class.
        this.school = school;
    }
    tell(){
        return this.name + this.age + this.school;
    }
}

var aa = new Student('大学');
// aa.name = 'ime';
// aa.age = 22;
// aa.school = '大学';
alert(aa.tell());









