import { daeguText } from "./daegu";
import { daejeonText } from "./daejeon";
import { fukuokaText } from "./fukuoka";
import { gyeongjuText } from "./gyeongju";
import { jejuText } from "./jeju";
import { osakaText } from "./osaka";
import { seogwipoText } from "./seogwipo";
import { seoulText } from "./seoul";
import { tokyoText } from "./tokyo";


export const roomData = [
    {
        key: 'seoul',
        title: '서울의 인기 숙소',
        data: seoulText,
    },
    {
        key: 'osaka',
        title: '다음 달에 예약 가능한 오사카시 숙소',
        data: osakaText,
    },
    {
        key: 'jeju',
        title: '제주도의 숙소',
        data: jejuText,
    },
    {
        key: 'daegu',
        title: '이번 주말에 예약 가능한 대구 숙소',
        data: daeguText
    },
    {
        key: 'gyeongju',
        title: '경주시의 숙소',
        data: gyeongjuText
    },
    {
        key: 'fukuoka',
        title: '이번 주말에 예약 가능한 후쿠오카시 숙소',
        data: fukuokaText
    },
    {
        key: 'tokyo',
        title: '도쿄의 숙소',
        data: tokyoText
    },
    {
        key: 'seogwipo',
        title: '서귀포시의 숙소를 확인해 보세요',
        data: seogwipoText
    },
    {
        key: 'daejeon',
        title: '대전의 숙소',
        data: daejeonText
    }
]