import { Text, View, SafeAreaView, ScrollView, Button } from "react-native";
import React, { useRef, useState } from 'react';

export default function Index() {
  const [arr, setArr] = useState(Array.from(new Array(50).keys()));
  const scrollViewRef = useRef<ScrollView>() as React.MutableRefObject<ScrollView>;

  const handleButtonPress = () => {
    scrollViewRef.current!.scrollToEnd({ animated: true });
    setArr(Array.from(new Array(100).keys()));
  };

  const handleReset = () => {
    scrollViewRef.current.scrollTo(0);
    setArr(Array.from(new Array(50).keys()));
  };

  return (
    <View style={{ width: '100%', height: '100%', borderColor: 'red', borderWidth: 1, padding: 16, gap: 12 }}>
      <SafeAreaView style={{ display: 'flex', flexDirection: 'row', gap: 8, justifyContent: 'center' }}>
        <Button title="Press me!" onPress={handleButtonPress} />
        <Button title="Reset" onPress={handleReset} />
      </SafeAreaView>
      <ScrollView
        ref={scrollViewRef}
        style={{ width: '80%', marginLeft: '10%', height: 300, borderColor: 'black', borderWidth: 1 }}
      >
        {arr.map((i) => (
          <Text key={i}>
            Test {i}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
