export default function Register(){
    const headers  = {
        ' Content-type':'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    return new Response(null, {headers,status:204})
}