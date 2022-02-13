import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Navigation } from 'swiper';
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonAvatar, IonImg } from '@ionic/react';
import React, { useState, useEffect } from 'react';

import '../../node_modules/swiper/swiper.min.css';
import '../../node_modules/swiper/modules/autoplay/autoplay.min.css';
import '../../node_modules/swiper/modules/keyboard/keyboard.min.css';
import '../../node_modules/swiper/modules/pagination/pagination.min.css';
import '../../node_modules/swiper/modules/scrollbar/scrollbar.min.css';
import '../../node_modules/swiper/modules/zoom/zoom.min.css';
import 'swiper/css/navigation';
import '@ionic/react/css/ionic-swiper.css';

import './CollectionSlider.css'

interface CollectionSliderProps { }

// interface CollectionData {
//     trending_collection: {
//         name: string;
//         description: string;
//         banner_image: {
//             url: string;
//         };
//         logo_image: {
//             url: string;
//         };
//     };
// }

type CollectionData= {
    trending_collection: {
        name: string;
        description: string;
        banner_image: {
            url: string;
        };
        logo_image: {
            url: string;
        };
    };
}


// interface CollectionSliderProps {
//     name:string;
// }

// const CollectionSlider = ({name}:CollectionSliderProps) => {
const CollectionSlider :React.FC<CollectionSliderProps> = () => {

    const [collectionData, updateCollectionData] = useState<CollectionData[]>([])

    useEffect(() => {
        const url = "https://api.artemismarket.io/trending-collections?_sort=order_seq:asc&_limit=8";
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log('json', json)
                console.log('trending name: ', json[0].trending_collection.name)
                updateCollectionData(json)
            })
            // .then((json) => setData(json['results']))
            .catch((error) => console.log(error));
        // console.log(collectionData)
    }, []);

    return (
        <div className="container-collectionslider">
            <IonGrid>
                <IonRow className='ion-align-items-center'>
                    <IonCol size="8">
                        <h3>
                            Trending Collections
                        </h3>
                    </IonCol>
                    <IonCol size="4" className='ion-text-right'>
                        <a href="#" className='collection-link'>See All</a>
                    </IonCol>
                </IonRow>
                <IonRow>
                    {collectionData.length > 0 ?
                        <Swiper
                            modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Navigation]}
                            keyboard={true}
                            pagination={{ clickable: true }}
                            navigation={true}
                            slidesPerView={4}
                        >
                            {collectionData.map(item => {
                                return (
                                    <SwiperSlide>
                                        <IonCard className='collection-Card'>
                                            <img src={item.trending_collection.banner_image.url} className='collection-banner'></img>

                                            <IonCardHeader>
                                                <div className='collectionlogo-container'>
                                                    {/* <IonAvatar className='collectionlogo-avatar'><IonImg src={collectionData[0].trending_collection.logo_image.url} className='collectionlogo-icon' /></IonAvatar> */}
                                                    <img className='collectionlogo-icon' src={item.trending_collection.logo_image.url}></img>
                                                </div>
                                                {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                                                <IonCardTitle className='collection-title'>{item.trending_collection.name}</IonCardTitle>
                                            </IonCardHeader>

                                            <IonCardContent className='collection-desc'>
                                                {item.trending_collection.description.slice(0, 97)}...
                                            </IonCardContent>
                                        </IonCard>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        :
                        "loading"
                    }
                </IonRow>
            </IonGrid>
        </div>
    )
}

export default CollectionSlider