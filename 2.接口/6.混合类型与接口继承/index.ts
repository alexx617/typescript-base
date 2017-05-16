/**
 * Created by YSP易水寒 on 2017/2/5.
 */

//混合类型
interface mixture{
    age: number;
    reset(): void;
    (start: number): string;
}
var M: mixture;
M(10);
M.reset();


//接口继承
interface shape{
    color: string;
}
interface circle{
    width: number;
}
interface square extends shape,circle{
    height: number;
}






