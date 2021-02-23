import express from 'express'

const application = express()

application.get('/recipe', (request, response) => {
	response.send('Ditt API anrop gick igenom!')
})

application.get('/throwdice', (request, response) => {
	response.send(Math.random().toString())
})

application.listen(3001, () => {
	console.log('Servern är igång på port ' + 3001)
})