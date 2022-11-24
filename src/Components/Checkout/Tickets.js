/** @format */

// Unsupported react 18!!

import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-18-pdf/renderer";

// import ReactPDF from "@react-18-pdf/renderer";

// ReactPDF.render(<Tickets />, `${__dirname}/tickets.pdf`);

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

function Tickets({ data }) {
  const {} = data;

  console.log();

  //   -------------------
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
}

export default Tickets;
