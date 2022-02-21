import { IonList, IonItemSliding, IonItem, IonLabel, IonToggle, IonItemOptions, IonItemOption, IonIcon, IonNote, IonAvatar } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonSearchbar } from '@ionic/react';

import { heart, trash, star, archive, ellipsisHorizontal, ellipsisVertical, moon } from 'ionicons/icons';
import { IonGrid, IonRow, IonCol, IonImg, } from '@ionic/react';

import { useState, useEffect } from 'react';


import './Header.css';

interface HeaderProps { }

interface SearchResultData {
    name: string;
    logo_image: {
      url: string,
    };
    total_supply: number;
    // feature_image:string,
  }



const HeaderContainer: React.FC<HeaderProps> = () => {
    const toggleDarkModeHandler = () => {
        document.body.classList.toggle("dark");
      }
    
      const [data, setData] = useState<SearchResultData[]>([])
      const [searchText, setSearchText] = useState('');
      const [showSearchVar, updateShowSearch] = useState(false)
    
    
      const showSearch = () => {
        updateShowSearch(true)
        // console.log('show Searchbar')
      }
      const hideSearch = () => {
        updateShowSearch(false)
        // console.log('show Searchbar')
      }
    
      useEffect(() => {
        const url = "https://api.artemismarket.io/collections?_limit=30&_sort=created_at:desc&_start=0";
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            // console.log(json)
            // console.log(json[0].feature_image.url)
            setData(json)
          })
          // .then((json) => setData(json['results']))
          .catch((error) => console.log(error));
        // console.log(data)
      }, []);
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    {/* <IonTitle>Blank</IonTitle>
          <IonFabButton onClick={() => props.history.push('/')}></IonFabButton> */}
                    {/* <IonGrid> */}
                    <IonRow className='nav-row'>
                        <IonCol size-md="2">
                            <IonImg src='https://www.artemismarket.io/assets/artemisLogo_beta@2x.png' className='nav-image navbar-image-light' />
                            <IonImg src='https://www.artemismarket.io/assets/artemisLogoWhite.png' className='nav-image navbar-image-dark' />
                        </IonCol>
                        <IonCol size-md="4">
                            <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} onIonFocus={showSearch} onIonBlur={hideSearch} animated></IonSearchbar>
                        </IonCol>
                        <IonCol size-md="5" className='nav-links-container'>
                            <a className='nav-link' href='/collection'>Explore</a>
                            <a className='nav-link'>Stats</a>
                            <a className='nav-link'>Profile</a>
                            <a className='nav-link'>More</a>
                            <button className='connect-wallet'>Connect Wallet</button>
                        </IonCol>
                        <IonCol size-md="1">
                            <IonList>
                                <IonItem>
                                    {/* <IonIcon slot="start" icon={moon} /> */}
                                    {/* <IonLabel>
                      Dark Theme
                    </IonLabel> */}
                                    <IonToggle id="themeToggle" slot="end" name="darkMode"
                                        onIonChange={toggleDarkModeHandler}></IonToggle>
                                </IonItem>
                            </IonList>
                        </IonCol>
                    </IonRow>
                    {/* </IonGrid> */}
                </IonToolbar>
            </IonHeader>
            <div className={`search-suggestions ${showSearchVar ? ' show ' : ' '}`}>
                {/* <IonContent> */}
                <div>
                    <div>
                        <div>
                            <p className='collections'>Collections</p>
                            <ul>
                                {data.length > 0 ?
                                    data.map(item => {
                                        // console.log('item', item.logo_image.url)
                                        return (
                                            // <a href='' target="_blank">
                                            <li className='search-result-item'>
                                                {/* <div><IonImg src='https://content.artemismarket.io/content/assets/KFW_13_6edda30ed5.png' /></div> */}
                                                <div>
                                                    <IonAvatar className='search-result-avatar'><IonImg src={item.logo_image.url} className='search-result-icon' /></IonAvatar></div>
                                                <div className='search-result-item-name'>{item.name}</div>
                                                <p>{item.total_supply} items</p>
                                            </li>
                                            // </a>

                                        )
                                    }) :
                                    <div>Loading</div>}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* </IonContent> */}
            </div>
        </>
    )
}

export default HeaderContainer