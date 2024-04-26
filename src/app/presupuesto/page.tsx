'use client';
import React from 'react'
import { Template } from './components/Template';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import isMobile from 'ismobilejs';

const Page = (props: any) => {
  const { searchParams } = props || {};
  const { data } = searchParams || {};
  const parseData = JSON.parse(data);

  return (
    <>
      {isMobile().phone
        ? <PDFDownloadLink document={<Template data={parseData} />} fileName={`${parseData.fecha}-${parseData.cliente}-presupuesto.pdf`}>
          {({ blob, url, loading, error }) =>
            <div>
              {loading ? 'Loading document...' : 'Download now!'}<br />
              <a className='btn btn-success' download={url}>Descargar</a>
            </div>

          }
        </PDFDownloadLink>
        : <PDFViewer style={{ height: '100vh', width: '100vh', margin: '0 auto' }}>
          <Template data={parseData} />
        </PDFViewer>
      }
    </>
  )
}
export default Page;
