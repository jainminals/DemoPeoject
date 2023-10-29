import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {SetHomeData} from '../store/action/auth/action';
import {useDispatch, useSelector} from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const homedata = useSelector(state => state.authReducer.homedata);
  const FetchData = async () => {
    const fetchdata = await axios('https://jsonplaceholder.typicode.com/posts');
    dispatch(SetHomeData(fetchdata.data));
  };
  useEffect(() => {
    FetchData();
    return () => {};
  }, []);
  const renderItem = ({item}) => {
    console.log('==>', item);
    return (
      <TouchableOpacity
      onPress={()=> navigation.navigate("Detail",{item})}
        style={{
          backgroundColor: '#fff',
          width: '49%',
          margin: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <Image
          style={{height: 100, width: 100, borderRadius: 50}}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg',
          }}
        />
        <View>
          <Text style={{color: '#000'}} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
        {/* <TouchableOpacity
          style={{
            width: '50%',
            borderRadius: 50,
            backgroundColor: '#4CC0F8',
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff'}}>Follow</Text>
        </TouchableOpacity> */}
        {/* <Text>{item.body}</Text> */}
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: 'lightgray'}}>
      <View style={{marginHorizontal: 10}}>
        <FlatList numColumns={2} data={homedata} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
}
