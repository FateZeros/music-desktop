import React, { Component } from 'react'
import Swiper from 'react-id-swiper'

import styles from './index.less'
import test1 from 'assets/images/1.png'

import 'assets/css/swiper.css'

class MusicFind extends Component {
  render() {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false
      // }
    }

    return (
      <div className={styles.swiperCont}>
        <Swiper {...params} style={{ width: '470px', height: '170px' }}>
          <div style={{ width: '470px', height: '170px' }}>
            <img src={test1} alt="" className={styles.swiperItem} />
          </div>
          <div style={{ width: '470px', height: '170px' }}>
            <img src={test1} alt="" className={styles.swiperItem} />
          </div>
          <div style={{ width: '470px', height: '170px' }}>
            <img src={test1} alt="" className={styles.swiperItem} />
          </div>
          <div style={{ width: '470px', height: '170px' }}>
            <img src={test1} alt="" className={styles.swiperItem} />
          </div>
          <div style={{ width: '470px', height: '170px' }}>
            <img src={test1} alt="" className={styles.swiperItem} />
          </div>
        </Swiper>
      </div>
    )
  }
}

export default MusicFind
