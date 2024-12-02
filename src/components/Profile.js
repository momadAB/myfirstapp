import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png",
        }}
        style={styles.profileImage}
      />
      <Text style={styles.titleText}>Mista White</Text>
      <Text style={styles.paragraphText}>New Mexico</Text>
      {/* Seperator line */}
      <View style={styles.seperatorLine}></View>
      {/* Line of info */}
      <View style={styles.line}>
        {/* Followers */}
        <View>
          <Text style={styles.titleText}>80K</Text>
          <Text style={styles.paragraphText}>Followers</Text>
        </View>
        {/* Likes */}
        <View>
          <Text style={styles.titleText}>803K</Text>
          <Text style={styles.paragraphText}>Likes</Text>
        </View>
        {/* Photos */}
        <View>
          <Text style={styles.titleText}>1.4K</Text>
          <Text style={styles.paragraphText}>Photos</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "70%",
    height: "40%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // flex: 1,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  paragraphText: {
    fontSize: 12,
    alignSelf: "center",
    opacity: 0.5,
  },
  seperatorLine: {
    width: "80%",
    height: 1,
    opacity: 0.5,
    backgroundColor: "gray",
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    alignItems: "center",
  },
});
