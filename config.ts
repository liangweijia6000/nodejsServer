import { getLogger } from "log4js";

const logger =  getLogger(__filename.replace(__dirname, ""));
logger.level = 'all';

console.log("config.ts");

export class CServerConfig {
    ip:string;
    port:number;

    constructor() {
        this.ip = "";
        this.port = 0;
    }

}

export class CConfig {
    
    static gameServerConfig:CServerConfig;
    static loginServerConfig:CServerConfig;

    static init() {
        logger.info("Config init");
        const serverConfig = require("../config/serverConfig.json");
        if (!serverConfig)
        {
            logger.fatal("serverConfig.json error");
            return false;
        }

        //logger.debug("ServerConfig gameServer:", serverConfig["gameserver"]);
        //logger.debug("ServerConfig loginServer:", serverConfig["loginserver"]);

        this.gameServerConfig = new CServerConfig();
        this.gameServerConfig.ip = serverConfig["gameserver"]["ip"];
        this.gameServerConfig.port = serverConfig["gameserver"]["port"];

        this.loginServerConfig = new CServerConfig();
        this.loginServerConfig.ip = serverConfig["loginserver"]["ip"];
        this.loginServerConfig.port = serverConfig["loginserver"]["ip"];

        logger.debug("Config Test gameServerConfig", this.gameServerConfig);
        logger.debug("Config Test loginServerConfig", this.loginServerConfig);

        return true;
    }
}