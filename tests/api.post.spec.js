//npx playwright test --ui
import{test,expect} from '@playwright/test'


test('API POST Request',async({request})=>{
   const response= await request.post('https://reqres.in/api/users',{
    data:{
        "name": "morpheus",
        "job": "leader"
    }
   })

   expect(response.status()).toBe(201)

   const text= await response.text();
   expect(text).toContain('morpheus');

   console.log(await response.json());
})
