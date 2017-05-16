/**
 * Created by YSP易水寒 on 2017/2/5.
 */
var color;
(function (color) {
    color[color["red"] = 3] = "red";
    color[color["green"] = 4] = "green";
    color[color["blue"] = 5] = "blue";
})(color || (color = {}));
;
// var mycolor: string = color[5];
var c = color.green;
function tell() {
    alert(c);
}
tell();
//# sourceMappingURL=Enum.js.map