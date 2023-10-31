import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SetHomeData, SetHomeDataBackup } from "../store/action/auth/action";
import { styles } from "./styles";
interface HomeProps {
  navigation: any; // Update this type to match your navigation prop type
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [searchtext, setsearchtext] = useState("");
  const [count, setcount] = useState(10);
  const homedata = useSelector((state: any) => state.authReducer.homedata);
  const homedatabackup = useSelector(
    (state: any) => state.authReducer.homedatabackup
  );

  const FetchData = async () => {
    const fetchdata = await axios("https://jsonplaceholder.typicode.com/posts");
    const userdata = fetchdata.data.slice(0, count);
    dispatch(SetHomeData(userdata));
    dispatch(SetHomeDataBackup(fetchdata.data));
  };

  const searchFilterFunction = (text: string) => {
    const backupdata = homedatabackup;
    setsearchtext(text);
    if (text) {
      const searchdata = homedatabackup;
      const newData = searchdata.filter(function (item: any) {
        if (item.title) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : "".toUpperCase();
          const textData = text.toUpperCase();
          return itemData.startsWith(textData);
        }
        return false;
      });
      dispatch(SetHomeData(newData));
    } else {
      dispatch(SetHomeData(backupdata));
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => navigation.navigate("Detail", { item })}
        style={styles.itemcontainer}
      >
        <Image
          style={styles.itemconainerimage}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg",
          }}
        />
        <View>
          <Text style={styles.itemconatinertext} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const ListFooterComponent = () => {
    return (
      <TouchableOpacity onPress={onEndReached} style={styles.loadmoreview}>
        <Text style={styles.loadmoretext}>Load more</Text>
      </TouchableOpacity>
    );
  };

  const onEndReached = () => {
    setcount(count + 10);
    const loadmoredata = homedata.slice(0, count);
    dispatch(SetHomeData(loadmoredata));
  };
  const SearchInputBox = () => {
    return (
      <View style={styles.inputbox}>
        <View style={styles.inputview}>
          <TextInput
            placeholder="Search"
            style={styles.textinput}
            onChangeText={(text) => searchFilterFunction(text)}
            value={searchtext}
            placeholderTextColor="#000"
          />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.container}>
        {SearchInputBox()}
        <View style={{ paddingBottom: 70 }}>
          <FlatList
            ListFooterComponent={ListFooterComponent}
            numColumns={2}
            data={homedata}
            renderItem={renderItem}
            onEndReachedThreshold={0.5}
            onEndReached={onEndReached}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
