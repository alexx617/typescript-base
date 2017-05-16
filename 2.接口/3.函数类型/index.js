/**
 * Created by YSP易水寒 on 2017/2/5.
 */
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    if (result != -1) {
        console.log('true');
        return true;
    }
    else {
        console.log('false');
        return false;
    }
};
//# sourceMappingURL=index.js.map