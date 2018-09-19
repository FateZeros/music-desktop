import React, { Component } from 'react'
import styles from './App.less'

import Header from 'src/components/header'
import Footer from 'src/components/footer'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App
