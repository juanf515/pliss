//console.log("hola mundo")

import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from '../playlist/components/playlist';
import data from '../api.json';
 
const homeContainer = document.getElementById('home-container')
 
// render(<Media type="video" title="¿que es resp design?" author="AlejoJuan" image="./images/covers/responsive.jpg"/>,app);
// render(<Media type="video" title="¿que es resp design?" author="AlejoJuan" image="./images/covers/responsive.jpg"/>,app);
render(<Home data={data}/> , homeContainer);

 
