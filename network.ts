import * as net from "net";
import { getLogger } from 'log4js';
const logger = getLogger(__filename.replace(__dirname, ""));
logger.level = 'all';

class CNetClient {

    openCallBack:any;   //TODO:

    socket:net.Socket;

    constructor(socket:any){
        this.socket = socket;
    }

    onOpen(callback:any) {
        this.openCallBack = callback;
    }

    onClose(callback:any) {
        this.socket.on("close", callback);
    }

    onError(callback:any) {
        this.socket.on("error", callback);
    }

    onMessage(callback:any) {
        this.socket.on("data", data=> {
            logger.debug(data.toString());
            var readSize = this.socket.bytesRead;
            logger.debug("the size of data is:" + readSize);
            callback.call();
        })
    }

    send(arrayburrer:ArrayBuffer) {
        this.socket.write(new Uint8Array(arrayburrer));
    }
}



export class CNetWork {
    static start() {
        let server = net.createServer();

        server.on("connection", function (socket) {
                logger.debug("CNetWork server connection");
                let client = new CNetClient(socket);

                client.onMessage(() => {
                    logger.debug("client.onMessage callback");
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
