/**
 * Created by YSP易水寒 on 2017/2/5.
 */
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + ':' + this.age;
    };
    return Person;
}());
var p = new Person('yishuihan', 22);
alert(p.print());
//# sourceMappingURL=index.js.map