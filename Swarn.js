import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import SwarnList from './SwarnList'

const Swarn = () => (
<ScrollView style={styles.swarn} showsVerticalScrollIndicator={false}>
<SwarnList item={item.swarn_list}/>
</ScrollView>
)

export default Swarn;

const styles = StyleSheet.create({
    
});