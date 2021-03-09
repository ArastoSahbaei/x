import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import application from '../Server.js'
import StatusCode from '../configurations/StatusCode.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)

const testingNonExistentRoute = () => {
	test('HTTP Call against a route that does not exist in the API', done => {
		Chai.request(application)
			.get(`/${randomString}`)
			.end((request, response) => {
				response.should.have.a.status(404)
				done()
			})
	})
}

const getAllUsers = () => {
	test('Expecting a return of all users in database', done => {
		Chai.request(application)
			.get('/user')
			.end((request, response) => {
				response.should.have.a.status(StatusCode.OK)
				response.body.should.be.a('array')
				response.body.length.should.be.eq(12)
				done()
			})
	})
}

const updateUser = () => {
	const userID = '603d07360350134f489ec524'
	test('Should manipulate data of a current a object in the user entity', done => {
		Chai.request(application)
			.put(`/user/${userID}`)
			.send({ username: 'arre123' })
			.end((request, response) => {
				response.should.have.a.status(StatusCode.OK)
				response.should.have.be.a('object')
				response.body.should.have.property('_id').eq(userID)
				response.body.should.have.property('username').eq('arre123')
				done()
			})
	})
}

describe('TESTING THE USER API ENTITY', () => {
	testingNonExistentRoute()
	getAllUsers()
	updateUser()
})