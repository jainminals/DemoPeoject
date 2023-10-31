import {
    StyleSheet,
  } from "react-native";

  export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    width: '99%',
    margin: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  textContainer: {
    marginTop: 10,
  },
  title: {
    color: '#000',
    numberOfLines: 2,
  },
  body: {
    color: '#000',
  },
});

export default Detail;
