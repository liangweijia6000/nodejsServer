import * as net from "net";
import { getLogger } from 'log4js';
const logger =  getLogger(__filename.replace(__dirname, ""));
logger.level = 'all';



export class CNetWork {
    static start() {
        let server = net.createServer();

        //TODO:收到消息后的动作 和 发送消息
        server.on("connection", function (socket) {
            socket.on('data',function(data){
                logger.debug( data.toString());
                var readSize = socket.bytesRead;
                logger.debug("the size of data is:"+readSize);
            })
        });

        server.on("listening", function () {
            logger.debug("start listen");
        })

        server.on("close", function () {
            logger.debug("server closed");
        })        

        server.listen(9527);
    }
}
