This project uses Playwright to perform automated API testing for the dummy REST API service: https://reqres.in.

🧪 Features
API testing using Playwright's request context

Covers all CRUD operations:

GET - Fetch a user

POST - Create a user

PUT - Update a user

DELETE - Delete a user

Includes basic assertions using Playwright's built-in expect

Console logs response JSON for quick inspection

📁 Project Structure:
.
├── tests/
│   └── api.spec.js       # API test file with GET, POST, PUT, DELETE
├── package.json
└── README.md

▶️ Getting Started: 
1. Install Dependencies
npm install

2. Run Tests with UI Mode
  npx playwright test --ui

3. Or run all tests in headless mode:
  npx playwright test


🧾 Example Code (in tests/api.spec.js)
import { test, expect } from '@playwright/test';

test('GET user details', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2');
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain('Janet');
  console.log(await response.json());
});

test('POST create user', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'Ankita',
      job: 'Tester'
    }
  });
  expect(response.status()).toBe(201);
  console.log(await response.json());
});

test('PUT update user', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    data: {
      name: 'Ankita',
      job: 'Senior Tester'
    }
  });
  expect(response.status()).toBe(200);
  console.log(await response.json());
});

test('DELETE user', async ({ request }) => {
  const response = await request.delete('https://reqres.in/api/users/2');
  expect(response.status()).toBe(204);
  console.log('User deleted successfully');
});

📚 Resources
Playwright API Testing Docs

Reqres Fake API
