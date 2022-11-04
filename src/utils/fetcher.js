export function getFetcher(url){
    return fetch(url).then(data=>{
        if(data.status === 200) return data.json()
        if(data.status === 404) throw {status:"redirect"}
        throw {status:"error"}
    })
}