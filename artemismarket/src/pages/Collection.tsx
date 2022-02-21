import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonSearchbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import TopBannerContainer from '../components/TopBannerContainer';
import CollectionSlider from '../components/CollectionSlider'
import NewCollectionSlider from '../components/NewCollectionSlider'
import ComingSoonSlider from '../components/ComingSoonSlider'
import CategorySlider from '../components/CategorySlider'
import FooterContainer from '../components/Footer';
import HeaderContainer from '../components/Header';

import './Collection.css';
// import {RouteComponentProps} from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

const Collection: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <HeaderContainer />
      <IonContent>
        <div className='grid-1100'>
          {/* <IonContent fullscreen> */}
          {/* <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank2</IonTitle>
            </IonToolbar>
          </IonHeader> */}
          {/* <TopBannerContainer />
          <CollectionSlider />
          <NewCollectionSlider />
          <ComingSoonSlider />
          <CategorySlider /> */}
          <h1>Collection Page</h1>
        </div>

        <FooterContainer />
      </IonContent>
    </IonPage>
  );
};

export default Collection;
