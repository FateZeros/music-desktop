import React, { Component } from 'react'
import styles from './App.less'

import Header from 'src/components/header'
import Footer from 'src/components/footer'
import Side from 'src/components/side'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <div className={styles.musicBody}>
          <Side />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
