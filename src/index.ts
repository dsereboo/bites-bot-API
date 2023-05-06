import {Router} from "itty-router"
import Register from "./callbacks/registers";
import Quiz from "./callbacks/quiz";

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
}


const router=Router()

const animals =[{sample:"!"},{sample:"22"}]
router.get('/animals', async(req)=>{
	return new Response(JSON.stringify(animals))
})


router.post('/api/v1/register', Register)
router.get('/api/v1/quiz', Quiz)



// export default {
// 	async fetch(request:Request){
// 		return router.handle(request)
// 	}
// }
export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		// return new Response(JSON.stringify(animals))
		return await router.handle(request)
	},
};
