import './App.css';
import './theme/variables.css'
import {IonHeader, IonToolbar, IonSegment, IonSegmentButton, IonSearchbar} from '@ionic/react'


function Top() {
    return (
        <IonHeader>
            <IonToolbar>
                <IonSearchbar showCancelButton="never" inputmode="search" mode="ios" />
            </IonToolbar>

            <IonToolbar>
                <IonSegment mode="ios" value="Benzina" onChange={(e) => console.log(`${e.detail.value} segment selected`)}>
                    <IonSegmentButton class="segment__benzina" mode="ios" value="Benzina">Benzina</IonSegmentButton>
                    <IonSegmentButton class="segment__diesel" mode="ios" value="Diesel"> Diesel</IonSegmentButton>
                    <IonSegmentButton class="segment__gpl" mode="ios" value="GPL"> GPL</IonSegmentButton>
                    <IonSegmentButton class="segment__metano" mode="ios" value="Metano"> Metano </IonSegmentButton>
                </IonSegment>
            </IonToolbar>
        </IonHeader>
    );
}

export default Top;
