# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API.spec.js >> Patch request: update request partially
- Location: tests\API.spec.js:28:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { request } from 'node:http';
  3  | test('GET request to fetch Users', async({request})=>{
  4  |     
  5  |     const response= await request.get('https://jsonplaceholder.typicode.com/users/1');
  6  |     expect(response.ok()).toBeTruthy();
  7  | 
  8  |     // for converting the response code to JSON.
  9  |     const result= await response.json();
  10 |     console.log(result);
  11 | })
  12 | 
  13 | test('POST request to create User', async({request})=>{
  14 | 
  15 |     const response=await request.post('https://jsonplaceholder.typicode.com/users',{
  16 |         data:{
  17 |         name: 'deepak',
  18 |         email: 'dpk218@gmail.com'
  19 |         }
  20 |     })
  21 |     expect(response.status()).toBe(201);
  22 | 
  23 |     // for validation of response body
  24 |     const result=await response.json();
  25 |     console.log(result);
  26 | })
  27 | 
  28 | test.only('Patch request: update request partially', async({request})=>{
  29 |     const response= await request.patch('https://jsonplaceholder.typicode.com/users',{
  30 |         data:{
  31 |             name: 'alan'
  32 |         }
  33 |     })
> 34 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  35 | })
```