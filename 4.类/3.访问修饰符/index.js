/**
 * Created by YSP易水寒 on 2017/2/6.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(school) {
        _super.call(this, 'iwen', 88888888);
        this.school = school;
    }
    Student.prototype.print = function () {
        return this.name + ':' + this.age + ':' + this.school;
    };
    return Student;
}(Person));
var aa = new Student('大学校');
// aa.name = 'ime';
// aa.age = 88;
// aa.school = '大学';
alert(aa.print());
//# sourceMappingURL=index.js.map