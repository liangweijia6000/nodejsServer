import { getLogger } from "log4js";
import { CTimer } from "./timer";

const logger =  getLogger(__filename.replace(__dirname, ""));
logger.level = 'all';

export class CMainThread {

    //
    timeout:NodeJS.Timeout;

    //循环次数
    mainLoopTimes:number;

    //停止标记
    stopLoop:boolean;
    
    public constructor() {
        this.mainLoopTimes = 0;
        this.stopLoop = false;
    }

    //开始
    public start () {
        //500毫秒定时器
        this.timeout = setInterval(this.mainExec.bind(this), 500);
    }

    public mainExec() {
        
        //检查停止标记
        if(this.stopLoop) {
            logger.info("mainExec stopLoop");
            clearInterval(this.timeout);
            process.exit(1);
        }

        //更新次数
        this.mainLoopTimes++;
        //logger.info("MainThread main exec times:", this.mainLoopTimes);

        CTimer.update();
    }

    //停止
    public stop() {
        this.stopLoop = true;
    }
}
