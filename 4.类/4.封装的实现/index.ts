/**
 * Created by YSP易水寒 on 2017/2/6.
 */

class Person{
    private _age: number;
    tell(): number{
        return this._age;
    }
    get age():number{
        return this._age;
    }
    set age(newAge:number){
        this._age = newAge;
    }

}

var aa = new Person();
aa.age = 22;
alert(aa.tell());




