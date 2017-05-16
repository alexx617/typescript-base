/**
 * Created by YSP易水寒 on 2017/2/6.
 */
var Person = (function () {
    function Person() {
    }
    Person.prototype.tell = function () {
        alert('aa的年龄是' + Person.name);
    };
    return Person;
}());
var aa = new Person();
Person.name = '易水寒';
aa.tell();
var People = (function () {
    function People(age) {
        this.age = age;
    }
    People.prototype.tell = function () {
        return this.age;
    };
    return People;
}());
var bb;
bb = new People(888);
alert(bb.tell());
//# sourceMappingURL=index.js.map