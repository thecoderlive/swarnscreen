import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const swarnListItem = ({ item }) => (
<View style={styles.swarn_list_item}>
<Image
    style={styles.checkin_icon}
    source={{uri: item.checkin_icon}}
   />
<Text style={styles.checkin_detail}>{item.checkin_detail}</Text>
<Image
    style={styles.alarm_icon}
    source={{uri: item.alarm_icon}}
   />
<Text style={styles.alarm_detail}>{item.alarm_detail}</Text>
<Image
    style={styles.fire_icon}
    source={{uri: item.fire_icon}}
   />
<Text style={styles.about_gym}>{item.about_gym}</Text>
<Text style={styles.about_places}>{item.about_places}</Text>
</View>
  );

const SwarnList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.swarn_list}
    data={item}
    renderItem={swarnListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default SwarnList;

const styles = StyleSheet.create({
    'checkin_icon': {
        'width': '10vw',
        'height': '10vw',
        'margin': 5
    },
    'checkin_detail': {
        'fontSize': 14,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'alarm_icon': {
        'width': '10vw',
        'height': '10vw',
        'margin': 5
    },
    'alarm_detail': {
        'fontSize': 14,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'fire_icon': {
        'width': '10vw',
        'height': '10vw',
        'margin': 5
    },
    'about_gym': {
        'fontSize': 14,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'about_places': {
        'fontSize': 14,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});