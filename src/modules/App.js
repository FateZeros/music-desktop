import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './App.less'

import Header from 'src/components/header'
import Footer from 'src/components/footer'
import Side from 'src/components/side'
import PlayingMusic from 'src/components/playingMusic'

/* 发现音乐模块 */
import MusicFind from 'src/modules/musicFind'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <div className={styles.musicBody}>
          <Side />
          <div className={styles.pages}>
            <Router>
              <Switch>
                <Route path="/" exact component={MusicFind} />
              </Switch>
            </Router>
          </div>
        </div>
        <PlayingMusic />
        <Footer />
      </div>
    )
  }
}

export default App
