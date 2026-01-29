import { artText } from "./art";
import { beachText } from "./beach";
import { hotText } from "./hot";
import { injoyText } from "./injoy";
import { mountainText } from "./mountain";
import { outdoorText } from "./outdoor";


export const recommData = [
    {
        key: 'hot',
        title: '인기',
        data: hotText,
    },
    {
        key: 'art',
        title: '예술 및 문화',
        data: artText,
    },
    {
        key: 'beach',
        title: '해변',
        data: beachText,
    },
    {
        key: 'mountain',
        title: '산맥',
        data: mountainText,
    },
    {
        key: 'outdoor',
        title: '야외',
        data: outdoorText,
    },
    {
        key: 'injoy',
        title: '즐길거리',
        data: injoyText,
    },
]