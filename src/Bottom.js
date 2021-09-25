import './App.css';
import './theme/variables.css'
import { Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { IonIcon, IonRouterOutlet, IonLabel, IonTabButton, IonTabs, IonTabBar } from '@ionic/react'
import { mapOutline, colorFillOutline } from "ionicons/icons";

function App() {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/map" exact={true} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton href="/" class="tab__map">
                        <IonIcon icon={mapOutline}></IonIcon>
                        <IonLabel>Map</IonLabel>
                    </IonTabButton>
                    <IonTabButton href="/stations" class="tab__stations">
                        <IonIcon icon={colorFillOutline}></IonIcon>
                        <IonLabel>Distributori</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
}

export default App;