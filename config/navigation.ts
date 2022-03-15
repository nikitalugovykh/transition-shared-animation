import List from "../screens/List";
import TravelList from "../screens/TravelList";
import TravelUpList from "../screens/TravelUpList";
import { NavigationType } from "./types";

export const enum Routes{

    NAVIGATIONS_LIST_SCREEN = 'navigation_list_screen',

    LIST_SCREEN = 'list_screen',
    DETAIL_SCREEN = 'detail_screen',

    TRAVEL_SCREEN = 'travel_screen',
    TRAVEL_DETAIL_SCREEN = 'travel_detail_screen',


    TRAVEL_UP_LIST_SCREEN = 'travel_up_list_screen',
    TRAVEL_UP_DETAIL_SCREEN = 'travel_up_detail_screen',
}


export const navigation: NavigationType[] = [
    {
        label: 'Shared animation #1',
        name: Routes.LIST_SCREEN,
        component: List
    },
    {
        label: 'Shared animation #2',
        name: Routes.TRAVEL_SCREEN,
        component: TravelList
    },
    {
        label: 'Shared animation #3',
        name: Routes.TRAVEL_UP_LIST_SCREEN,
        component: TravelUpList
    },
] 



