import { getLogger } from "log4js";

const logger =  getLogger(__filename.replace(__dirname, ""));
logger.level = 'all';

export class CMainThread {

    timeout!:NodeJS.Timeout;

    mainLoopTimes:number;

    stopLoop:boolean;
    
    public constructor() {
        this.mainLoopTimes = 0;
        this.stopLoop = false;
    }

    public start () {
        this.timeout = setInterval(this.mainExec.bind(this), 500);
    }

    public mainExec() {
        if(this.stopLoop) {
            logger.info("mainExec stopLoop");
            clearInterval(this.timeout);
            process.exit(1);
        }
        this.mainLoopTimes++;
        logger.info("MainThread main exec times:", this.mainLoopTimes);
    }

    public stop() {
        this.stopLoop = true;
    }
}
