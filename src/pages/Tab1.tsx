import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tabone.css';

const Tabone: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab one</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab one</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab one page" />
      </IonContent>
    </IonPage>
  );
};

export default Tabone;
