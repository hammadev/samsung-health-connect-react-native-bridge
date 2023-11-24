import { StyleSheet, Text, View, NativeModules } from 'react-native'
import React, { useEffect } from 'react'

const App = () => {
  const { SamsungHealthSDKModule } = NativeModules;

  console.log('NativeModules', NativeModules);
  console.log('SamsungHealthSDKModule', SamsungHealthSDKModule);

  useEffect(() => {
    SamsungHealthSDKModule.onCreate();
  },[]);
  // SamsungHealthSDKModule.mySdkMethod(
  //   'Hello World!',
  //   (result) => {
  //     console.log('Success:', result);
  //   },
  //   (error) => {
  //     console.error('Error:', error);
  //   }
  // );

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})