import * as express from 'express'

const app = express()
app.use(express.json())

import userController from './Modules/user/userController'
import postController from './Modules/post/postController'

app.use('/user', userController)
app.use('/post', postController)

app.listen(3000, () => {console.log('ONLINE http://localhost:3000')})