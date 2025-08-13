import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useLocalSearchParams} from "expo-router";

const details = () => {
    const {id} = useLocalSearchParams();
    return (
        <View>
            <Text>movies is the : {id}</Text>
        </View>
    );
};

export default details;

const styles = StyleSheet.create({});
