import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const MyPage = ({ navigation: { navigate } }) => {
  console.log("---------------------");
  useEffect(() => {
    console.log("Mount");
    return () => {
      console.log("Unmount");
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log("Focus");
      return () => {
        console.log("Blur");
      };
    }, [])
  );

  return (
    <TouchableOpacity
      onPress={() => navigate("Stacks", { screen: "One", params: { id: 1 } })}
    >
      <Text>One 페이지로 이동</Text>
      {/* <TouchableOpacity onPress={() => reset({...})}></TouchableOpacity> */}
    </TouchableOpacity>
  );
};

export default MyPage;
