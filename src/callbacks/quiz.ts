export default async function Quiz (){
    const headers  = {
        ' Content-type':'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    const items = [{sample:"a"}, {sample:"b"}]
    return new Response(JSON.stringify(items))
}