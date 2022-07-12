import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const CarouselTry = () => {
    return (
        <>
            {/*
            width:輪播強整體寬度
            useKeyboardArrows:是否可以用滑鼠方向鍵
            thumbWidth:下方小圖大小
            showThumbs:關閉小圖示(用空值)
            infiniteLoop:最後一張時移回第一張
            autoPlay:自動輪播
            interval:自動輪播的間隔(以毫秒為單位)
            stopOnHover:hover時要不要暫停輪播(默認為true)
            showIndicators:小白點 默認是true (關閉用空值)
            showStatus:右上狀態顯示 默認是true (關閉用空值)
            axis:輪播方向 horizontal水平 vertical垂直
             */}
            <Carousel
                width="50%"
                useKeyboardArrows="true"
                thumbWidth="0px"
                infiniteLoop="true"
                autoPlay="true"
                interval="3000"
                showThumbs=""
                showIndicators="true"
                showStatus=""
                axis="horizontal"
                className="d-flex justify-content-center"
            >
                <div>
                    <img src={require('./imgs/63683.jpg')} alt="" />
                    <p className="legend">完全體</p>
                </div>
                <div>
                    <img src={require('./imgs/63684.jpg')} alt="" />
                    <p className="legend">脫鞋鞋</p>
                </div>
                <div>
                    <img src={require('./imgs/63685.jpg')} alt="" />
                    <p className="legend">啊撕硬爆</p>
                </div>
            </Carousel>
        </>
    );
};

export default CarouselTry;
