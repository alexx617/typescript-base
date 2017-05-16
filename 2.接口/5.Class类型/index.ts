/**
 * Created by YSP易水寒 on 2017/2/5.
 */

interface clockInterFace{
    currentTime: Date;
    setTime(d: Date);
}
class clock implements clockInterFace{
    currentTime: Date;
    setTime(d: Date){
        this.currentTime = d;
    }
    constructor(h: number, m: number){
        
    }
}
