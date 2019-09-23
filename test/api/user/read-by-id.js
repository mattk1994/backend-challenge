let should
let agent
let mockData

before(() => {
  should = require('should')
  agent = require('test/lib/agent')
  mockData = require('test/lib/mock-data')
})

describe('api', () => {
  describe('user', () => {
    describe('read-by-id', () => {

      let globalAuth

      before(async () => {
        globalAuth = await mockData.mockAuthAndUser()
      })

      it('should fail with invalid auth', () => {
        return agent.client()
          .get(`/user/${globalAuth.user}`)
          .expect(401)
          .promise()
      })

      it('should read user', async () => {
        const user = await agent.client()
          .get(`/user/${globalAuth.user}`)
          .set('authorization', globalAuth.token)
          .expect(200)
          .promise()
        should.exist(user)
        console.log(user)
        user.id.should.equal(globalAuth.user)
      })

      it('should match the user ID that is in the URL', async () => {
        const user = await agent.client()
          .put(`/user/${globalAuth.user}`)
          .set('authorization', globalAuth.token)
          .expect(500)
          .promise()
        await console.log(globalAuth.id, user)
        await user.id.should.equal(globalAuth.user)
      })

    })

  })
})
