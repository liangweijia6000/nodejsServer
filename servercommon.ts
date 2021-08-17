
export function genGUID() {
    return 1;
}

export function singleton<T>(singletonClass:{new():T;_instance?:T}): T {
    let instance: T;

    if(singletonClass.hasOwnProperty("_instance")) {
        instance = singletonClass._instance;
    }

    if(!instance){
        instance = new singletonClass;
        Object.defineProperty(singletonClass, "_instance", {value:instance});
    }
    return instance;
}