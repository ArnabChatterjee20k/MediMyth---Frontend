export function getFetcher(url,options=null){
    return fetch(url,options).then(data=>{
        if(data.status === 200) return data.json()
        if(data.status === 404) throw {status:"redirect"}
        throw {status:"error"}
    })
}