import { CConfig } from './config'
import { CMainThread } from './mainthread';
import { CBiubiubiu } from './biubiubiu';
import { CTimer } from './timer';
import { CNetWork } from './network';
import { singleton } from './servercommon';

import { getLogger, Logger } from 'log4js';


//log输出文件名
const logger = getLogger(__filename.replace(__dirname, ""));
//分级
logger.level = 'all';

//可以使用以下函数输出不同级别和颜色的log
//logger.debug("debug");
//logger.error("error");
//logger.warn("warn");
//logger.fatal("fatal");
//logger.mark("mark");
//logger.trace("trace");

//
function main() {
    logger.info("server start");

    //加载config
    if (!CConfig.init()) {
        logger.error("Config.init error");
        return
    }

    //主循环定时器
    let mainThread = singleton(CMainThread);
    mainThread.start();

    //TimerTest
    //let abiu1 = new CBiubiubiu(1);
    //let abiu2 = new CBiubiubiu(2);

    //CTimer.add(abiu1.printId.bind(abiu1));
    //CTimer.add(abiu2.printId.bind(abiu2));
}

//程序入口
//main();


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function climbStairs(n: number): number {
    return n;
};

//

logger.debug(climbStairs(160));

