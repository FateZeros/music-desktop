import React, { Component } from 'react'

import styles from './Footer.less'

/**
 * @description 播放器 Footer 组件
 */
class Footer extends Component {
  constructor() {
    super()

    this.state = {
      // 音乐是否在播放
      musicPlaying: false
    }
  }

  handleMusicPre = () => {
    console.log('上一首')
  }

  handleMusicPlay = () => {
    this.setState({
      musicPlaying: !this.state.musicPlaying
    })
  }

  handleMusicNext = () => {
    console.log('下一首')
  }

  render() {
    const { musicPlaying } = this.state
    return (
      <div className={styles.footer}>
        <div className={styles.handleConts}>
          <div className={styles.preMusic} onClick={this.handleMusicPre} />
          <div
            className={musicPlaying ? styles.playMusic : styles.pauseMusic}
            onClick={this.handleMusicPlay}
          />
          <div className={styles.nextMusic} onClick={this.handleMusicNext} />
        </div>
      </div>
    )
  }
}

export default Footer
