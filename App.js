import { StyleSheet, Text, View,NativeModules } from 'react-native'
import React from 'react'

const App = () => {
  console.log('NativeModules',NativeModules);
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})