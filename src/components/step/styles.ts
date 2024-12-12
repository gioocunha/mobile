import { StyleSheet } from "react-native"
import {colors, fontFamily} from "@/app/styles/theme"

export const s = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 16,
    },
    title: {
        fontSize: 16,
        fontFamily: fontFamily.bold,
        color: colors.gray[600],
    },
    description:{
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 4,
    },
})