import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import RNWebView from "react-native-webview";

export function WebView() {
  return (
    <ScrollView
      style={styles.scrollViewContainer}
      contentInsetAdjustmentBehavior="automatic"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <View style={styles.webviewContainer}>
          <RNWebView style={styles.webview} source={{ uri: WEBVIEW_URL }} nestedScrollEnabled />
        </View>
      </View>
    </ScrollView>
  );
}

// TODO: env 처리
const WEBVIEW_URL = "http://localhost:3000/";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: "#FAFAFA",
  },
  webviewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  webview: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
});
