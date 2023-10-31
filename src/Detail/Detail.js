import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import { styles } from "./styles";

interface DetailProps {
  navigation: any; // Update this type to match your navigation prop type
  route: any; // Update this type to match your route prop type
}

const Detail: React.FC<DetailProps> = ({ route }) => {
  const [userdata, setuserdata] = useState([]); // Update the type as per your data structure

  useEffect(() => {
    setuserdata(route.params.item);
  }, [route.params.item]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg',
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{userdata?.title}</Text>
          <Text style={styles.body}>{userdata?.body}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Detail;
