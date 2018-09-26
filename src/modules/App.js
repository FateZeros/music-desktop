import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import styles from './App.less'

import Header from 'src/components/header'
import Footer from 'src/components/footer'
import Side from 'src/components/side'
import PlayingMusic from 'src/components/playingMusic'

/* 发现音乐模块 */
import MusicFind from 'src/modules/musicFind'
/* 私人FM模块 */
import PrivateFM from 'src/modules/privateFM'
/* MV 模块 */
import MV from 'src/modules/mv'
/* 朋友模块 */
import Friends from 'src/modules/friends'

const NoMatch = () => <div>No Match</div>

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
                <Route path="/" exact render={() => <Redirect to="/music" />} />
                <Route path="/music" component={MusicFind} />
                <Route path="/fm" component={PrivateFM} />
                <Route path="/mv" component={MV} />
                <Route path="/friends" component={Friends} />
                <Route component={NoMatch} />
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
