'use client';
import React from 'react'
import { Template } from './components/Template';
import { PDFViewer } from '@react-pdf/renderer';

const Page = (props:any) => {
  const {searchParams} = props || {};
  const {data} = searchParams || {};
  const parseData = JSON.parse(data);
  
  return (
    <PDFViewer style={{ height: '100vh', width: '100vh', margin: '0 auto' }}>
      <Template data={parseData} />
    </PDFViewer>)
}
export default Page;
