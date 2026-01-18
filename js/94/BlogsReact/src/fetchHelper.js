export default async function fetchHelper(url) {
   
            const response = await fetch(url)
            //console.log(response)
            if (!response.ok) {
                throw new Error(`${response.status}-${response.statusText}`)
            }
           return response.json();
         
      
}
   