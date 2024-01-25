import { describe, it} from 'node:test'
import assert from 'node:assert'

import { server } from './mocks/server.js'
 
server.listen()

describe('msw server', () => {
  it('should return a 200 status code', async () => {
    const response = await fetch('https://api.github.com/users/octocat')
    assert.strictEqual(response.status, 200)
  })
})