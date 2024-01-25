console.time('mocks/server.js imports')
import { setupServer } from 'msw/node'
import { handlers } from './handlers.js'
console.timeEnd('mocks/server.js imports')
 
export const server = setupServer(...handlers)