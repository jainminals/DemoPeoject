import { View, Text, SafeAreaView } from 'react-native'
import React ,{useEffect}from 'react'

export default function Detail({navigation ,route}) {
  const [userdata, setuserdata] = useState([])
  useEffect(() => {
    setuserdata(route.params.item)
  }, [])
  
  return (
    <SafeAreaView style={{justifyContent:"center",alignItems:"center"}}>
       <View
        style={{
          backgroundColor: '#fff',
          width: '99%',
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
            {userdata.title}
          </Text>
          <Text style={{color: '#000'}}>{userdata.body}</Text>
        </View>
       
      </View>
    </SafeAreaView>
  )
}