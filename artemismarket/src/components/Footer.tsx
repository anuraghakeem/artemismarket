import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { logoTwitter, logoDiscord } from 'ionicons/icons';
import './Footer.css';

interface FooterProps { }

const FooterContainer: React.FC<FooterProps> = () => {
    return (
        <div className="container-footer">
            <IonGrid>
                <IonRow className='ion-align-items-top'>
                    <IonCol size="12" size-lg='3' className='ion-text-left vertical-list'>
                        <div>
                            <img src='https://www.artemismarket.io/assets/artemisLogoWhite.png' className='footer-image'></img>
                        </div>
                        <p>©2021 Artemis. All rights reserved.</p>
                        {/* <h3>Social</h3> */}
                        <IonRow className='ion-align-items-left'>
                            <IonButton className='social-link'>
                                <IonIcon slot="icon-only" icon={logoTwitter}/>
                            </IonButton>
                            <IonButton className='social-link'>
                            <IonIcon slot="icon-only" icon={logoDiscord}/>
                            </IonButton>
                        </IonRow>
                    </IonCol>
                    <IonCol size="12" size-lg='3' className='ion-text-left vertical-list'>
                        <h3>Category</h3>
                        <a href="#">Art</a>
                        <a href="#">Collectible</a>
                        <a href="#">Virtual World</a>
                        <a href="#">Trading Card</a>
                        <a href="#">Gaming</a>
                    </IonCol>
                    <IonCol size="12" size-lg='3' className='ion-text-left vertical-list'>
                        <h3>More</h3>
                        <a href="#">My Wallet</a>
                        <a href="#">About Us</a>
                        <a href="#">FAQ</a>
                        <a href="#">Settings</a>
                    </IonCol>
                    <IonCol size="12" size-lg='3' className='ion-text-left vertical-list'>
                        <h3>Profile</h3>
                        <button className='button-primary'>View Collection</button>
                    </IonCol>
                    {/* <IonCol size="12" size-lg='3' className='ion-text-left'>Test</IonCol> */}
                    {/* <IonCol size="12" size-lg='3' className='ion-text-left'>Test</IonCol> */}
                </IonRow>
            </IonGrid>
        </div>
    )

}

export default FooterContainer