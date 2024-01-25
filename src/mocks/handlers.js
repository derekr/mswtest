console.time('mocks/handlers.js imports')
import { http, HttpResponse } from 'msw'
console.timeEnd('mocks/handlers.js imports')

export const handlers = [
  http.get('https://api.github.com/users/octocat', () => {
    return new HttpResponse('Hello, World!')
  }),
]