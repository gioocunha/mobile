import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"

import { s } from "./styles"
import { colors } from "@/app/styles/theme"
import { TextProps } from "react-native-svg"

function Button ({children}: TouchableOpacityProps){
    return  <TouchableOpacity style={s.container}> {children} </TouchableOpacity>
}

function Title ({children}: TextProps){
    return <Text style={s.title}>{children}</Text>
}

Button.Title = Title

export {Button}