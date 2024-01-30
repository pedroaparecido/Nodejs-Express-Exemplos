import * as express from 'express'

const app = express()

import userController from './Controller/userController'
import postController from './Controller/postController'

app.use('/user', userController)
app.use('/post', postController)

app.listen(3000, () => {console.log('ONLINE http://localhost:3000')})