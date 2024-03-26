import axios from "axios"

export async function GET() {
 
  const {data} = await axios.get("https://xesque.rocketseat.dev/platform/1698253675111-attachment.json")
   
  const featuredProducts = data.products.filter((product) => product.featured)

  return Response.json({products : featuredProducts})
}
