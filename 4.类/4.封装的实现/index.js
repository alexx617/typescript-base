/**
 * Created by YSP易水寒 on 2017/2/6.
 */
var Person = (function () {
    function Person() {
    }
    Person.prototype.tell = function () {
        return this._age;
    };
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newAge) {
            this._age = newAge;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var aa = new Person();
aa.age = 22;
alert(aa.tell());
//# sourceMappingURL=index.js.map