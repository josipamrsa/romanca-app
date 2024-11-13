import {
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle,
    StyleProp
} from "react-native"

import { useAppTheme } from "@/utils/useAppTheme"
import { ThemedStyle } from "@/theme"

interface IconButtonProps extends TouchableOpacityProps {
    alignItem?: "flex-start" | "center" | "flex-end",
    containerStyle?: StyleProp<ViewStyle>,
    onPress?: TouchableOpacityProps["onPress"],
}


export const IconButton = (props: IconButtonProps) => {
    const { 
        alignItem,
        containerStyle: $iconButtonStyleOverride
    } = props
    const { themed, theme } = useAppTheme()

    const $iconButtonStyle: StyleProp<ViewStyle> = [
        $iconButtonStyleBase,
        { justifyContent: alignItem ? alignItem : "flex-end"},
        { alignItems: alignItem ? alignItem : "flex-end" },
        $iconButtonStyleOverride
    ]

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={themed($iconButtonStyle)}>
            {props.children}
        </TouchableOpacity>
    )
}

const $iconButtonStyleBase: ViewStyle = {
    display: "flex",
    width: "80%",
}