import React from "react";
import { View, WebView, Text } from "react-native";
import * as Highcharts from "./highcharts";

export default class App extends React.Component {
  render() {
    const html = `
    <html>
      <body>
        <div id="container"></div>
        <script src="./highcharts.js"></script>
        <script>Highcharts.chart('container', { series: [{ data: [30, 50, 100, 60] }] });</script>
      </body>
    </html>`;

    return (
      <View style={{ height: 300, marginTop: 30 }}>
        <WebView source={{ html }} />
      </View>
    );
  }
}
