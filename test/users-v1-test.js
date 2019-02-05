const chai = require('chai')
const chaiHttp = require('chai-http')
const {app} = require('../app')

chai.use(chaiHttp)

describe('Users tests', () => {
    it('should list ALL users on /v1/users GET', (done) => {
        chai
            .request(app)
            .get('/v1/users')
            .end((err, res) => {
                res
                    .should
                    .have
                    .status(200)
                res.should.be.json;
                res
                    .body
                    .should
                    .be
                    .a('array');
                done();
            })
    })
    it('should list a SINGLE user on /v1/users/<id> GET')
    it('should add a SINGLE user on /v1/users POST')
    it('should update a SINGLE user on /v1/users/<id> PATCH')
    it('should delete a SINGLE user on /v1/users/<id> DELETE')
})