import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get('window')
export const ITEM_WIDTH = width * .6
export const SPACING = 16
export const ICON_SIZE = 56


const s = width * 0.68;

export const Travel2Spec = {
    ITEM_WIDTH: s,
    ITEM_HEIGHT: s * 1.5,
    RADIUS: 18,
    SPACING,
    FULL_SIZE: s + SPACING * 2
}