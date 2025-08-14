import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import {images} from "@/constants/images";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import {icons} from "@/constants/icons";
import useFetch from "@/services/useFetch";
import {fetchMovies} from "@/services/api";

const search = () => {
    const[searchQuery,setSearchQuery] = useState('');
    const {data:movies,loading,error,reset,refetch:MoviesFn} = useFetch(() => fetchMovies({query:searchQuery}),false);


    useEffect(() => {
            const setTimeoutId = setTimeout(() => {
                if (searchQuery.trim()) {
                    MoviesFn();

                } else {
                    reset();
                }
            }, 500);
            return () => clearTimeout(setTimeoutId);
        },
        [searchQuery]);

    return (
        <View className="flex-1 bg-primary">
            <Image
                source={images.bg}
                className="flex-1 absolute w-full z-0"
                resizeMode="cover"
            />

            <FlatList
                className="px-5"
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MovieCard {...item} />}
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: "flex-start",
                    gap: 16,
                    marginVertical: 16,
                }}
                contentContainerStyle={{ paddingBottom: 100 }}
                ListHeaderComponent={
                    <>
                        <View className="w-full flex-row justify-center mt-20 items-center">
                            <Image source={icons.logo} className="w-12 h-10" />
                        </View>

                        <View className="my-5">
                            <SearchBar
                                value={searchQuery}
                                onChangeText={(text:string) => {
                                    setSearchQuery(text);
                                }}
                                placeHolder="Search for a movie"
                            />
                        </View>

                        {loading && (
                            <ActivityIndicator
                                size="large"
                                color="#AB8BFF"
                                className="my-3"
                            />
                        )}

                        {error && (
                            <Text className="text-red-500 px-5 my-3">
                                Error: {error.message}
                            </Text>
                        )}

                        {!loading &&
                            !error &&
                            searchQuery.trim() &&
                            movies?.length! > 0 && (
                                <Text className="text-xl text-white font-bold">
                                    Search Results for{" "}
                                    <Text className="text-accent">{searchQuery}</Text>
                                </Text>
                            )}
                    </>
                }
                ListEmptyComponent={
                    !loading && !error ? (
                        <View className="mt-10 px-5">
                            <Text className="text-center text-appPink">
                                {searchQuery.trim()
                                    ? "No movies found"
                                    : "Start typing to search for movies"}
                            </Text>
                        </View>
                    ) : null
                }
            />
        </View>
    );
};

export default search;