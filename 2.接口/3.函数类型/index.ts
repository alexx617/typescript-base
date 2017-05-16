/**
 * Created by YSP易水寒 on 2017/2/5.
 */

interface searchFunc{
    (name: string, age: string): boolean;
}
var mySearch: searchFunc;
mySearch = function(src: string, sub: string){
    var result = src.search(sub);
    if(result != -1){
        console.log('true');
        return true;
    }else{
        console.log('false');
        return false;
    }
}





