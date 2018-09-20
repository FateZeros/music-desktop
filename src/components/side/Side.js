import React, { Component } from 'react'

import styles from './Side.less'
import { likeList, collectList } from './SongList'

/**
 * @description 播放器左边菜单栏
 */
class Side extends Component {
  render() {
    return (
      <div className={styles.sideMenu}>
        <div className={styles.sideCategory}>推荐</div>
        <ul className={styles.ulList}>
          <li className={styles.ulItem}>
            <div className={styles.ulItemActive}>
              <i className={styles.activeBorder} />
            </div>
            <i className={styles.iconMusic} />
            发现音乐
          </li>
          <li className={styles.ulItem}>
            <i className={styles.iconRadio} />
            私人FM
          </li>
          <li className={styles.ulItem}>
            <i className={styles.iconMV} />
            MV
          </li>
          <li className={styles.ulItem}>
            <i className={styles.iconFriend} />
            朋友
          </li>
        </ul>
        <div className={styles.sideCategory}>
          我的音乐
          <i className={styles.iconRightArraw} />
        </div>
        <ul className={styles.ulList}>
          <li className={styles.ulItem}>
            <i className={styles.iconItunes} />
            iTunes音乐
          </li>
          <li className={styles.ulItem}>
            <i className={styles.iconDownMusic} />
            下载的音乐
          </li>
          <li className={styles.ulItem}>
            <i className={styles.iconMine} />
            我的歌手
          </li>
          <li className={styles.ulItem}>
            <i className={styles.iconMV} />
            我的MV
          </li>
        </ul>
        <div className={styles.sideCategory}>
          创建的歌单 <i className={styles.iconRightAdd} />
        </div>
        <ul className={styles.ulList}>
          <li className={styles.ulItem}>
            <i className={styles.iconLike} />
            我喜欢的音乐
          </li>
          {likeList.map(list => {
            return (
              <li className={styles.ulItem} key={list.id}>
                <i className={styles.iconList} />
                {list.name}
              </li>
            )
          })}
        </ul>
        <div className={styles.sideCategory}>收藏的歌单</div>
        <ul className={styles.ulList}>
          {collectList.map(list => {
            return (
              <li className={styles.ulItem} key={list.id}>
                <i className={styles.iconList} />
                {list.name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Side
