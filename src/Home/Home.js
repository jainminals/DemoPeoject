import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {SetHomeData,SetHomeDataBackup} from '../store/action/auth/action';
import {useDispatch, useSelector} from 'react-redux';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const [searchtext, setsearchtext] = useState("")
  const [count, setcount] = useState(10)
  const homedata = useSelector(state => state.authReducer.homedata);
  const homedatabackup = useSelector(state => state.authReducer.homedatabackup);

  const FetchData = async () => {
    const fetchdata = await axios('https://jsonplaceholder.typicode.com/posts');
    const userdata = fetchdata.data.splice(0,count)
    dispatch(SetHomeData(userdata));
    dispatch(SetHomeDataBackup(fetchdata.data));
  };
  const searchFilterFunction = text => {
    const backupdata = homedatabackup;
    setsearchtext(text);
    if (text) {
      const searchdata = homedatabackup;
      const newData = searchdata.filter(function (item) {
        if (item.title) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.startsWith(textData);
        }
      });
      console.log(newData);
      dispatch(SetHomeData(newData));
    } else {
      dispatch(SetHomeData(backupdata));
    }
  };
  useEffect(() => {
    FetchData();
    return () => {};
  }, []);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
      key={item.it}
        onPress={() => navigation.navigate('Detail', {item})}
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
  const ListFooterComponent = ({item}) => {
    return (
     
       <TouchableOpacity
            onPress={()=>onEndReached()}
          style={{
            width: '50%',
            borderRadius: 50,
            backgroundColor: '#4CC0F8',
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf:"center"
          }}>
          <Text style={{color: '#fff'}}>Load more</Text>
        </TouchableOpacity>
    );
  };
  const onEndReached = () => {
    setcount(count+10)
    const loadmoredata = homedata.slice(0,count)
    dispatch(SetHomeData(loadmoredata));
  }
  return (
    <SafeAreaView style={{backgroundColor: 'lightgray',flex:1}}>
      <View style={{marginHorizontal: 10,flex:1}}>
      <View style={styles.inputbox}>
          {/* <AntDesign name={'search1'} size={20} color="#B5B7B9" /> */}
          <View style={{height: 40, width: '90%'}}>
            <TextInput
              placeholder="Search"
              style={{height: 40, paddingLeft: 2,color:"#000"}}
              onChangeText={text => searchFilterFunction(text)}
              value={searchtext}
              placeholderTextColor={"#000"}
            />
          </View>
        </View>
        <View style={{paddingBottom:70}}>
        <FlatList  ListFooterComponent={ListFooterComponent} numColumns={2} data={homedata} renderItem={renderItem} onEndReachedThreshold={0.5} onEndReached={onEndReached} />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  inputbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#fff",
    width: '100%',
    paddingHorizontal: 5,
    borderRadius:5,
    marginVertical:10

  },
});