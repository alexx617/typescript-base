/**
 * Created by YSP易水寒 on 2017/2/5.
 */
function buildName(firstName) {
    var restName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restName[_i - 1] = arguments[_i];
    }
    return firstName + restName.join(' ');
}
var myName = buildName('yi', 'shui', 'han', '-001');
document.getElementById('pid').innerHTML = myName;
console.log(123);
//# sourceMappingURL=index.js.map