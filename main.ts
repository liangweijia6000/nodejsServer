import { getLogger } from 'log4js';

import { CConfig } from './config'

const logger =  getLogger(__filename.replace(__dirname, ""));

logger.level = 'all';

//logger.debug("debug");
//logger.error("error");
//logger.warn("warn");
//logger.fatal("fatal");
//logger.mark("mark");
//logger.trace("trace");

function main() {
    logger.info("server start");
    if(!CConfig.init())
    {
        logger.error("Config.init error");
        return
    }
}

main();