import { getLogger } from "log4js";

const logger =  getLogger(__filename.replace(__dirname, ""));
logger.level = 'all';

export class CBiubiubiu {
    id:number

    constructor(id:number){
        this.id = id;
    }

    printId(){
        logger.log("CBiubiubiu id:", this.id);
    }
}
