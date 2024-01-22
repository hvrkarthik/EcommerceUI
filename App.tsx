// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;

// HelloWorldScreen.tsx

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const App: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, World!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default App;

