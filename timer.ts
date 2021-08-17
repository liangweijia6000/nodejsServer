

import { getLogger } from 'log4js';
const logger =  getLogger(__filename.replace(__dirname, ""));
logger.level = 'all';


//脉冲调用update,所有需要的模块用add注册到Timer
export class CTimer {
    private interval:number = 0;    //TODO:啥用?
    private nextTime:number = 0;

    repeatTimes:number = 0;

    running:Boolean = false;

    callback!:any;

    //??
    static now:number = Date.now();

    static timerArr:CTimer[] = [];

    static update() {
        //logger.info("Timer.update static");
        for(let timer of this.timerArr)
        {
            timer.callback();
        }
    }

    static add(fun:any, thisObj?:object, args?:any)
    {
        let newTimer = new CTimer;
        newTimer.callback = fun;
        this.timerArr.push(newTimer);
    }

    static del()
    {
        //
    }
}
