import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import App from 'src/modules/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
