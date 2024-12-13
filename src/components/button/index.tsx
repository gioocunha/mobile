import { 
    TouchableOpacity, 
    TouchableOpacityProps, 
    Text,
    TextProps,
    ActivityIndicator,
} from "react-native"

import { s } from "./styles"
import { colors } from "@/app/styles/theme"

type Buttonprops = TouchableOpacityProps & {
    isLoading?: boolean
}


function Button ({children, style, isLoading = false}: Buttonprops){
    return  (
    <TouchableOpacity 
    style={[s.container, style]}
    disabled={isLoading}
    > 
    {isLoading ? <ActivityIndicator size="small" color={colors.gray[100]} />
     : children}
     </TouchableOpacity>
    )
}

function Title ({children}: TextProps){
    return <Text style={s.title}>{children}</Text>
}

Button.Title = Title

export {Button}