import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, } from '@react-pdf/renderer';
import { Table } from './Table';
import { Header } from './Header';
import { Footer } from './Footer';

// Create styles
const styles = StyleSheet.create({
  page: {
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  section: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 10
  }
})
export const Template = ({ data }: { data: any }) => {
  return (
    <Document title={`Presupuesto - ${data.cliente}`} >
      <Page size="A4" style={styles.page} orientation='portrait'>
        <Header fecha={data.fecha} cliente={data.cliente} />
        <View style={styles.section}>
          <Table products={data.items} />
        </View>
        <Footer total={data.total} />
      </Page>
    </Document>
  );
}