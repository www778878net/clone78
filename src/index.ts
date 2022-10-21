export default function clone78(obj:any) {
    if (typeof obj != 'object')
        return obj;
    //  null,object,array  ='object'; 
    if (obj === null) {// 
        return null;
    }

    let o:any
    //  
    if (obj instanceof Array) {
        o = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            o.push(clone78(obj[i]));
        }
        return o
    }
    //   
    o = {};
    for (var j in obj) {
        o[j] = clone78(obj[j]);
    }

    return o;


}