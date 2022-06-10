const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/Schemas')

router.post('/signup', (request, response) =>{
    const signedUpUser = new signUpTemplateCopy({
        username:request.body.username,
        password:request.body.password,
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
    //response.send('send')
})

//router.get('/signin')

module.exports = router