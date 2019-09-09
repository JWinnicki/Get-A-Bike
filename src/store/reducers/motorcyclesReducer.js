import * as actionTypes from '../actions/actionTypes';

//Logos
import hondaLogo from '../../img/Logos/Honda-Logo.jpg';
import kawasakiLogo from '../../img/Logos/Kawasaki-logo.png';
import suzukiLogo from '../../img/Logos/Suzuki-Logo.png';
import yamahaLogo from '../../img/Logos/Yamaha-logo2.jpg';

//Motorcycles imgs

//Honda
import CB500F from '../../img/Honda/CB500F.jpg';
import CB650F from '../../img/Honda/CB650F.jpg';
import CB1000R from '../../img/Honda/CB1000R.png';
import CBR125 from '../../img/Honda/CBR125.jpg';
import CBR500R from '../../img/Honda/CBR500R.jpg';
import CBR1000RR from '../../img/Honda/CBR1000RR.jpg';
//Kawasaki
import ZX6R from '../../img/Kawasaki/kawasaki-ZX6R.png';
import ZX10R from '../../img/Kawasaki/kawasaki-ZX10R.jpg';
import Ninja650 from '../../img/Kawasaki/ninja-650.png';
import Z125 from '../../img/Kawasaki/Z125.png';
import Z650 from '../../img/Kawasaki/Z650.png';
import Z1000 from '../../img/Kawasaki/Z1000.png';
//Suzuki
import GSX750 from '../../img/Suzuki/GSX-750.png';
import GSX1000 from '../../img/Suzuki/GSX-1000.jpg';
import GSXR125 from '../../img/Suzuki/GSX-R125.jpg';
import GSXR1000 from '../../img/Suzuki/GSX-R1000.png';
import GSXR250 from '../../img/Suzuki/GSX250R.jpg';
import SV650 from '../../img/Suzuki/SV650.jpg';
//Yamaha
import MT07 from '../../img/Yamaha/MT-07.jpg';
import MT10 from '../../img/Yamaha/MT-10.png';
import MT125 from '../../img/Yamaha/MT-125.jpg';
import R3 from '../../img/Yamaha/R3.jpg';
import R1 from '../../img/Yamaha/Yamaha-R1.png';
import R6 from '../../img/Yamaha/Yamaha-R6.png';

const initialState = {
    brands: [
        {name: 'Honda', color: 'red', logo: hondaLogo},
        {name: 'Kawasaki', color: 'green', logo: kawasakiLogo},
        {name: 'Suzuki', color: 'light-blue', logo: suzukiLogo},
        {name: 'Yamaha', color: 'dark-blue', logo: yamahaLogo}
    ],
    motorcycles: [
        {brand: 'Honda', model: 'CB500F', image: CB500F, type: 'naked', subType: 'commuter', engineSize: '500', hp: '47'},
        {brand: 'Honda', model: 'CB650F', image: CB650F, type: 'naked', subType: 'commuter', engineSize: '650', hp: '90'},
        {brand: 'Honda', model: 'CB1000R', image: CB1000R, type: 'naked', subType: 'power naked', engineSize: '1000', hp: '143'},
        {brand: 'Honda', model: 'CBR125', image: CBR125, type: 'sport', subType: 'commuter', engineSize: '125', hp: '14'},
        {brand: 'Honda', model: 'CBR500R', image: CBR500R, type: 'sport', subType: 'commuter', engineSize: '500', hp: '48'},
        {brand: 'Honda', model: 'CBR1000RR', image: CBR1000RR, type: 'super sport', subType: null, engineSize: '1000', hp: '189'},
        {brand: 'Kawasaki', model: 'ZX6R', image: ZX6R, type: 'super sport', subType: null, engineSize: '636', hp: '131'},
        {brand: 'Kawasaki', model: 'ZX10R', image: ZX10R, type: 'super sport', subType: null, engineSize: '1000', hp: '200'},
        {brand: 'Kawasaki', model: 'Ninja 650', image: Ninja650, type: 'sport', subType: 'commuter', engineSize: '650', hp: '68'},
        {brand: 'Kawasaki', model: 'Z125', image: Z125, type: 'naked', subType: 'commuter', engineSize: '125', hp: '15'},
        {brand: 'Kawasaki', model: 'Z650', image: Z650, type: 'naked', subType: 'commuter', engineSize: '650', hp: '68'},
        {brand: 'Kawasaki', model: 'Z1000', image: Z1000, type: 'naked', subType: 'power naked', engineSize: '1000', hp: '142'},
        {brand: 'Suzuki', model: 'GSX-750', image: GSX750, type: 'naked', subType: null, engineSize: '750', hp: '112'},
        {brand: 'Suzuki', model: 'GSX-1000', image: GSX1000, type: 'naked', subType: 'power naked', engineSize: '1000', hp: '150'},
        {brand: 'Suzuki', model: 'GSX-R125', image: GSXR125, type: 'sport', subType: 'commuter', engineSize: '125', hp: '15'},
        {brand: 'Suzuki', model: 'GSX-R1000', image: GSXR1000, type: 'super sport', subType: null, engineSize: '1000', hp: '199'},
        {brand: 'Suzuki', model: 'GSX-250R', image: GSXR250, type: 'sport', subType: 'commuter', engineSize: '250', hp: '25'},
        {brand: 'Suzuki', model: 'SV 650', image: SV650, type: 'naked', subType: 'commuter', engineSize: '650', hp: '72'},
        {brand: 'Yamaha', model: 'MT-07', image: MT07, type: 'naked', subType: 'commuter', engineSize: '689', hp: '75'},
        {brand: 'Yamaha', model: 'MT-10', image: MT10, type: 'naked', subType: 'power naked', engineSize: '1000', hp: '160'},
        {brand: 'Yamaha', model: 'MT-125', image: MT125, type: 'naked', subType: 'commuter', engineSize: '125', hp: '15'},
        {brand: 'Yamaha', model: 'R3', image: R3, type: 'sport', subType: 'commuter', engineSize: '321', hp: '42'},
        {brand: 'Yamaha', model: 'R1', image: R1, type: 'super sport', subType: null, engineSize: '1000', hp: '190'},
        {brand: 'Yamaha', model: 'R6', image: R6, type: 'super sport', subType: null, engineSize: '600', hp: '120'}
    ],
    selectedBrand: null,
    selectedBikes: null
};

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SELECT_BRAND:
            return {
                ...state,
                selectedBrand: action.payload
            };
        case actionTypes.SELECT_BIKES:
            return {
                ...state,
                selectedBikes: action.payload
            };
        default: 
            return state
    }
    
};