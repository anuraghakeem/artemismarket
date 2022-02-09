import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonFabButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
// import {RouteComponentProps} from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
          <IonFabButton onClick={() => props.history.push('/')}></IonFabButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
