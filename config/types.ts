import { Routes } from "./navigation"

export type RootStackParamList = {
    list_screen: undefined,
    detail_screen: {
        item: DataListType
    },
    travel_screen: undefined,
    travel_detail_screen: {
        item: DataTravelListType
    },
    travel_up_screen: undefined,
    travel_up_detail_screen: {
        item: DataTravelListType
    },
    photography_list_screen: undefined,
    photography_detail_screen: undefined,

}


export type DataListType = {
    imageUri: string,
    title: string,
    id: string
}



export type NavigationType = {
    label: string,
    name: Routes,
    component: () => JSX.Element
}

export type DataTravelListType = {
    key: string,
    locations: string,
    numberOfDays: number,
    image: string,
    color: string
}