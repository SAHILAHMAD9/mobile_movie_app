import React from 'react';
import { View, Text, StyleSheet , Image, ImageBackground} from 'react-native';
import {Stack, Tabs} from "expo-router";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import {returnStatement} from "@babel/types";

const TabIcon = ({focused, icon , text} : any) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
            >
                <Image source={icon}  className="size-4" />
                <Text className="text-[#d81159] font-semibold ml-2">
                    {text}
                </Text>
            </ImageBackground>
        );
    }

    return (
        <View className="size-full justify-center items-center mt-4 rounded-full">
            <Image source={icon}
                   tintColor="#A8B5DB"
                   className="size-4" />
        </View>
    );
}

const layout = () => {
    return (
        <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarIconStyle: {
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
            },
            tabBarStyle : {
                display: "flex",
                flexDirection: "row",
                overflow: "hidden",
                position: "absolute",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#0f0D23",
                borderRadius : 50,
                height : 52,
                marginBottom : 32,
                marginHorizontal : 16,
            }

        }}>
            <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                headerShown: false ,// this will hide the header of this file eg index/home
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused}
                    icon={icons.home}
                    text={"Home"}
                    />
                )
            }}/>
            <Tabs.Screen
            name="search"
            options={{
                title: "Search",
            headerShown: false, // this will hide the header of this file eg index/home
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused}
                             icon={icons.search}
                             text={"Search"}
                    />
                )
            }}/>
            <Tabs.Screen
            name="saved"
            options={{
                title: "Saved",
            headerShown: false ,// this will hide the header of this file eg index/home
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused}
                             icon={icons.save}
                             text={"Profile"}
                    />
                )
            }}/>

            <Tabs.Screen
            name="profile"
            options={{
                title: "Profile",
                headerShown: false ,// this will hide the header of this file eg index/home
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused}
                             icon={icons.person}
                             text={"home"}
                    />
                )
            }}/>
        </Tabs>
    );
};

export default layout;

const styles = StyleSheet.create({});
