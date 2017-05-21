/**
 * Created by YSP易水寒 on 2017/2/6.
 */

class Person{
    public name: string;
    private job: string;
    age: number;
    constructor(name: string, age: number, job: string){
        this.name = name;
        this.age  = age;
        this.job  = job;
    }
    print(){
        return this.name + ':'+ this.age + ':'+ this.job;
    }
}

class Student extends Person{
    school: string;
    constructor(school: string){
        super('iwen',88888888,'doctor');
        this.school = school;
    }
    print(){
        return this.name + ':' + this.age + ':' + this.school + ':' + this.job;
    }
}

var aa = new Student('大学校');
// aa.name = 'ime';
// aa.age = 88;
// aa.school = '大学';
alert(aa.print());








