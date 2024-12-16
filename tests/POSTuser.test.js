const { test, expect } = require('@playwright/test');

test('POST /api/users', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'John Doe',
      job: 'Software Engineer'
    }
  });
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  expect(responseBody.name).toBe('John Doe');
  expect(responseBody.job).toBe('Software Engineer');
});
