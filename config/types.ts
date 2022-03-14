import { Routes } from "./navigation"

export type RootStackParamList = {
    list_screen: undefined,
    detail_screen: {
        item: DataListType
    },
    travel_screen: undefined,
    travel_detail_screen: {
        item: DataTravelListType
    }

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