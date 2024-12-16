const { test, expect } = require('@playwright/test');

test('POST /api/users', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'Aulia Dewi',
      job: 'Quality Assurance'
    }
  });
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  expect(responseBody.name).toBe('Aulia Dewi');
  expect(responseBody.job).toBe('Quality Assurance');
});
