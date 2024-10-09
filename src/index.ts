import colors from 'colors'
import server from './server.js'


const port = process.env.PORT || 4000
server.listen(port, () => {
    console.log(colors.cyan(`server en el puerto ${port}`))
})