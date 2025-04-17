
//npx playwright test --ui
import{test,expect} from '@playwright/test'


test('API PUT Request',async({request})=>{
   const response= await request.put('https://reqres.in/api/users/2',{
    data:{
        "name": "morpheus",
        "job": "leader"
    }
   })

   expect(response.status()).toBe(200)

   const text= await response.text();
   expect(text).toContain('morpheus');

   console.log(await response.json());
})