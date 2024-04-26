import React from 'react'
import { Page, Text, View, Document, StyleSheet, Image, } from '@react-pdf/renderer';
import logo from '../../../logo.png';

export const Header = ({fecha, cliente}:any) => {
  return (
    <View style={{ padding: 20 }}>
      <View style={{ border: '1px solid #E1E1E1', width: '542px' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <View style={{ width: '400px', padding: 5 }}>
            <Image source={logo.src} style={{ width: 113, height: 132 }} />
            <Text style={{ fontSize: 14, marginTop: 10 }}>RL. ELECTRICIDAD Y REFRIGERACIÓN  </Text>
            <Text style={{ fontSize: 12, marginTop: 5 }}>Cel: 2616826392 / 2612401922</Text>
          </View>

          <View style={{ width: '50px', backgroundColor: '#E1E1E1' }}>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '80px' }}>
              <Text style={{ fontSize: 34 }}>X</Text>
            </View>
          </View>


          <View style={{ width: '200px', padding: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'right', marginTop: 20 }}>DOCUMENTO NO VALIDO</Text>
            <View style={{ display: 'flex', alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 12, marginTop: 5, }}>COMO FACTURA</Text>
            </View>
            <Text style={{ marginTop: 100, fontSize: 14 }}>Fecha: {fecha}</Text>
            <Text style={{ marginTop: 5, fontSize: 14 }}>PRESUPUESTO</Text>
          </View>
        </View>
      </View>
      <Text style={{fontSize: 12, marginTop:10}}>Cliente: {cliente}</Text>
    </View>
  )
}
