import React, { useMemo } from 'react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import {
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    EffectCards,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

import slide1 from './imgs/63683.jpg';
import slide2 from './imgs/63684.jpg';
import slide3 from './imgs/63685.jpg';

const datas = [{ src: slide1 }, { src: slide2 }, { src: slide3 }];

const SwiperTry = () => {
    return (
        <>
            <Swiper
                // 動畫速度
                speed={500}
                // 滑鼠拖動carousel的指標圖示改變
                grabCursor={true}
                // 無限輪播
                loop={true}
                // 每張圖之間的padding空白
                spaceBetween={0}
                // 一頁顯示幾張 可以改2 3 4 5試看看
                slidesPerView={1}
                // 額外的模組 除了寫在inline還需要在上方import才能用
                modules={[
                    EffectCube,
                    // EffectFade,
                    // EffectFlip,
                    // EffectCoverflow,
                    // EffectCards,
                    Autoplay,
                    Pagination,
                    Navigation,
                    Scrollbar,
                ]}
                // effect屬性預設為slide 不需引入其他module
                effect="cube"
                // 自動播放
                autoplay={{
                    // 時間間隔
                    delay: 1000,
                    // 用戶互動後是否關閉自動播放
                    disableOnInteraction: false,
                    // 滑鼠移入停止自動播放
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    // 點擊可以跳頁
                    clickable: true,
                    // 圓點className 左邊是預設 右邊className可以加自訂的 然後去.css檔調整顏色
                    bulletClass: 'swiper-pagination-bullet dot',
                    // 圓點active的className 同上
                    bulletActiveClass:
                        'swiper-pagination-bullet-active dot_active',
                }}
                // 左右箭頭
                navigation={{
                    // 左右箭頭的樣式在css檔裡面用偽元素定義
                    // 輪播到底鎖住按鈕的className 同上左邊預設 右邊自訂
                    disabledClass: 'swiper-button-disabled button_disabled',
                }}
                // 下方小圓點
                // 最下方的scrollbar
                scrollbar={{
                    // scrollbar寬度 輸入數字或使用auto
                    dragSize: 'auto',
                    // scrollbar是否可以拖拉
                    draggable: true,
                    // 同上scrollbar className 左邊預設 右邊自訂
                    dragClass: 'swiper-scrollbar-drag drag_bar',
                }}
            >
                {datas.map((data) => (
                    <SwiperSlide key={data.src}>
                        <div>
                            <img
                                src={data.src}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SwiperTry;
