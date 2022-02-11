import './TopBannerContainer.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IonContent, IonPage } from '@ionic/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Navigation } from 'swiper';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { useState, useEffect } from 'react';

import '../../node_modules/swiper/swiper.min.css';
import '../../node_modules/swiper/modules/autoplay/autoplay.min.css';
import '../../node_modules/swiper/modules/keyboard/keyboard.min.css';
import '../../node_modules/swiper/modules/pagination/pagination.min.css';
import '../../node_modules/swiper/modules/scrollbar/scrollbar.min.css';
import '../../node_modules/swiper/modules/zoom/zoom.min.css';
import 'swiper/css/navigation';
import '@ionic/react/css/ionic-swiper.css';

interface TopBannerContainerProps { }

interface BannerData {
  banner_collection: {
    name: string;
    total_supply: number;
    feature_image: {
      url: string;
    }
    more: {
      item_views: number;
    };
  };
}

const TopBannerContainer: React.FC<TopBannerContainerProps> = () => {

  const [bannerData, updateBannerData] = useState<BannerData[]>([])

  useEffect(() => {
    const url = "https://api.artemismarket.io/banner-collections?_sort=order_seq:asc&_limit=20";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json)
        console.log('json image', json[0].banner_collection.feature_image.url)
        updateBannerData(json)
      })
      // .then((json) => setData(json['results']))
      .catch((error) => console.log(error));
    console.log(bannerData)
  }, []);

  return (
    <div className="container-topbanner">
      {/* <IonContent> */}
      <Swiper
        modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Navigation]}
        // autoplay={true}
        keyboard={true}
        pagination={{clickable:true}}
        navigation ={true}
      // scrollbar={true}
      // zoom={true}
      >

        {

          bannerData.length > 0
            ?
            bannerData.map(item => {
              return (
                <SwiperSlide>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="12" size-lg='7'>
                        <div className='banner-image'>
                          <img src={item.banner_collection.feature_image.url}></img>
                        </div>
                      </IonCol>
                      <IonCol size="12" size-lg='5' className='ion-align-self-center'>
                        <IonRow className='banner-title'>
                          <h2>{item.banner_collection.name}</h2>
                        </IonRow>
                        <IonRow className='banner-stats'>
                          <div className='banner-stats-items'>
                            <h5>Items</h5>
                            <h3>{item.banner_collection.total_supply}</h3>
                          </div>
                          <div className='banner-stats-views'>
                            <h5>Views</h5>
                            <h3>{item.banner_collection.more.item_views}</h3>
                          </div>
                        </IonRow>
                        <IonRow className='banner-button-container'>
                          <button className='button-primary'>View Collection</button>
                        </IonRow>
                      </IonCol>
                    </IonRow>
                  </IonGrid>

                </SwiperSlide>
              )
            })
            :
            <h2>Loaading</h2>
        }
      </Swiper>
    </div>
  );
};

export default TopBannerContainer;
