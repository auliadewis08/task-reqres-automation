const { test, expect } = require('@playwright/test');

test('PUT /api/users/{id}', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    data: {
      name: 'Aulia Dewi',
      job: 'QA Analyst'
    }
  });
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.name).toBe('Aulia Dewi');
  expect(responseBody.job).toBe('QA Analyst');
});
