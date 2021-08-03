import { getLogger } from 'log4js';

import { CConfig } from './config'
import { CMainThread } from './mainthread';

//log输出文件名
const logger =  getLogger(__filename.replace(__dirname, ""));
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
    if(!CConfig.init()) {
        logger.error("Config.init error");
        return
    }

    //主循环定时器
    let mainThread = new CMainThread();
    mainThread.start();
}

//程序入口
main();