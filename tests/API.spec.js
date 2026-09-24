import { test, expect } from '@playwright/test';
import { request } from 'node:http';
test('GET request to fetch Users', async({request})=>{
    
    const response= await request.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.ok()).toBeTruthy();

    // for converting the response code to JSON.
    const result= await response.json();
    console.log(result);
})

test('POST request to create User', async({request})=>{

    const response=await request.post('https://jsonplaceholder.typicode.com/users',{
        data:{
        name: 'deepak',
        email: 'abcd@gmail.com'
        }
    })
    expect(response.status()).toBe(201);

    // for validation of response body
    const result=await response.json();
    console.log(result);
})

// -----Patch Request : for updating Partial details-----------------

test('PATCH request: update request partially', async({request})=>{
    const response= await request.patch('https://jsonplaceholder.typicode.com/users/1',{
        data:{
            email: '12345@gmail.com'
        }
    })
    expect(response.status()).toBe(200);
})

test('PUT request: Fully update the user', async ({ request }) => {

    const response = await request.put(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            data: {
                "id": 1,
                "name": "ALBERT Graham",
                "username": "TONY",
                "email": "TONY@april.biz",
                "address": {
                    "street": "ABLERT Kulas Light",
                    "suite": "ALBERT. 556",
                    "city": "ALBERT Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-87.3159",
                        "lng": "71.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "Alberthildegard.org",
                "company": {
                    "name": "Tony Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            }
        }
    );
        expect(response.status()).toBe(200);
})


test.only('DELETE request: for deleteing the request', async ({ request }) => {
    const response= await request.delete('https://jsonplaceholder.typicode.com/users/1')
    expect(response.status()).toBe(200);

})
