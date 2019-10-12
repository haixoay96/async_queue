module.exports.create = ()=>{
    const list_request = [];
    const list_data = [];
    return {
        push:(item)=>{
            if(list_request.length > 0 ){
                const callback = list_request.shift();
                callback(item);
                return;
            }
            list_data.push(item);
        },
        pop:()=>{
            return new Promise((resolve)=>{
                if(list_data.length > 0){
                    const item = list_data.shift();
                    setImmediate(()=>{
                        resolve(item);
                    });
                    return;
                }
                list_request.push((item)=>{
                    resolve(item);
                });
            })
        }
    }
}