const handler = (request, response) => {
	if (request.method === 'OPTIONS') {
		return response.status(200).send('ok')
	}
}
