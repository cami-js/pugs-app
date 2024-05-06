import React, { useState, useEffect } from "react";
import { View, Image, FlatList, StyleSheet, Dimensions, RefreshControl } from "react-native";
import { moderateScale } from "react-native-size-matters";

export default function Home() {
    const [images, setImages] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false); 

    useEffect(() => {
        fetchImages(); 
    }, []);

    const fetchImages = () => {
        setIsRefreshing(true); 
        fetch("https://dog.ceo/api/breed/pug/images")
            .then(response => response.json())
            .then(data => {
                setImages(data.message);
            })
            .catch(error => {
                console.error("Error fetching images: ", error);
            })
            .finally(() => {
                setIsRefreshing(false); 
            });
    };

    const renderImageItem = ({ item }) => (
        <Image source={{ uri: item }} style={styles.image} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                renderItem={renderImageItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.imageContainer}
                numColumns={3}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={fetchImages} 
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(1),
    },
    image: {
        width: moderateScale((Dimensions.get("window").width - 30) / 3),
        height: moderateScale((Dimensions.get("window").width - 30) / 3),
        margin: moderateScale(5),
    },
});

