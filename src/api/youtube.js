import axios from 'axios';

const KEY='AIzaSyAr1K-PvSKDIEPUIp-aTBkP3ILcOcxevVU'; 

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults:5,
    key:KEY
  }
});