import List from "../screens/List";
import TravelList from "../screens/TravelList";
import { NavigationType } from "./types";

export const enum Routes{

    NAVIGATIONS_LIST_SCREEN = 'navigation_list_screen',

    LIST_SCREEN = 'list_screen',
    DETAIL_SCREEN = 'detail_screen',

    TRAVEL_SCREEN = 'travel_screen',
    TRAVEL_DETAIL_SCREEN = 'travel_detail_screen',
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
] 



