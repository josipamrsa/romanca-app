import { FC } from "react"
import {
    TextStyle,
    View,
    ViewStyle,
    TextInput,
    ImageStyle,
    TouchableOpacity,
} from "react-native"
import {
    Button,
    Screen,
    Text
} from "@/components"

import Ionicons from '@expo/vector-icons/Ionicons'
import { AppStackScreenProps } from "@/navigators"
import type { ThemedStyle } from "@/theme"
import { useHeader } from "@/utils/useHeader"
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle"
import { useAppTheme } from "@/utils/useAppTheme"
import { IconButton } from "@/components/IconButton"

interface IntroScreenProps extends AppStackScreenProps<"Intro"> { }

export const IntroScreen: FC<IntroScreenProps> = (_props: IntroScreenProps) => {
    const { themed, theme } = useAppTheme()
    const { navigation } = _props
    const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

    return (
        <Screen preset="fixed">
            <View style={themed($container)}>
                <Text style={themed($introCaption)}>Do you and your partner ever talk about that
                    one trip you'd like to take or that movie you’ve
                    been meaning to watch, only to forget about it later?
                    The Romanca app is here to give you gentle reminders
                    and help turn those plans into reality.
                </Text>

                <View style={themed($yourInfoContainer)}>

                    <TextInput
                        style={themed($textInput)}
                        placeholder="Your name..."
                        placeholderTextColor={themed($textInput).color} />

                    <TextInput
                        style={themed($textInput)}
                        placeholder="You identify as..."
                        placeholderTextColor={themed($textInput).color} />

                </View>

                <IconButton>
                    <Ionicons
                        name="arrow-forward"
                        size={48}
                        color={"brown"} />
                </IconButton>

            </View>
        </Screen>
    )
}

const $container: ThemedStyle<ViewStyle> = () => ({
    flexDirection: "column",
    flexBasis: "100%",
    justifyContent: "center",
    alignItems: "center",
})

const $yourInfoContainer: ThemedStyle<ViewStyle> = () => ({
    margin: "10%",
    width: "80%",
})

const $introCaption: ThemedStyle<TextStyle> = () => ({
    textAlign: "center",
    width: "75%",
    fontSize: 14
})

const $textInput: ThemedStyle<TextStyle> = () => ({
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    color: "white",
    margin: 10
})


