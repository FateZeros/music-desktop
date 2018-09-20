import React, { Component } from 'react'

import styles from './PlayingMusic.less'

import demoImg from 'assets/images/demo.png'

/**
 * @description 正在播放的音乐 模块
 * @param { 歌名，专辑，图片 }
 */
class PlayingMusic extends Component {
  handleMaxMusicPlay = () => {
    console.log('max music playing')
  }

  handleLikeMusic = () => {
    console.log('like music')
  }

  render() {
    return (
      <div>
        <div className={styles.playingMusicMin}>
          <div className={styles.musicImg}>
            <div
              className={styles.musicMax}
              onClick={this.handleMaxMusicPlay}
            />
            <img src={demoImg} alt="" />
          </div>
          <div className={styles.musicCont}>
            <div className={styles.musicName}>歌名</div>
            <div className={styles.Album}>专辑</div>
          </div>
          <div className={styles.musicHandle}>
            <div className={styles.musicShare} />
            <div className={styles.musicLike} onClick={this.handleLikeMusic} />
          </div>
        </div>
        <div className={styles.playingMusicMax} />
      </div>
    )
  }
}

export default PlayingMusic
