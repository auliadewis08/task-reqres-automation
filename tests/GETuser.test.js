const { test, expect } = require('@playwright/test');

test('Fetch users from API', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.data).toBeDefined();
});
