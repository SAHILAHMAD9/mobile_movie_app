import {View, Text, StyleSheet, Image, TextInput} from 'react-native'
import {icons} from "@/constants/icons";
import {text} from "node:stream/consumers";

interface props {
    onChangeText: (text: string) => void,
    onPressEnter?: () => void,
    placeHolder: string,
    value: string
}

const SearchBar = ({placeHolder,onPressEnter,value,onChangeText}:props) => {
    return (
        <View  className="flex flex-row overflow-hidden justify-evenly items-center">
            <Image source={icons.search} alt="search" className={"w-8 h-8  "} />
            <TextInput
                placeholder={placeHolder}
                // onPress={onPressEnter}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#AB8BFF"
                className={"text-accent border border-appPink rounded-md w-[290px] bg-secondary px-1"}
            />
        </View>
    )
}
export default SearchBar;