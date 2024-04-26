import { View, Text } from '@react-pdf/renderer'
import React from 'react'

export const Footer = ({total}:any) => {
  return (
    <View style={{ padding: 20 }}>
      <View style={{ border: '1px solid #E1E1E1', padding: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 12, textDecoration: 'underline' }}>LOS PRECIOS PUEDEN SUFRIR CAMBIOS SIN PREVIO AVISO </Text>
          <Text style={{ fontSize: 15, marginLeft: 10 }}>TOTAL: $ {total}</Text>
        </View>
        <Text style={{fontSize: 10, marginTop: 10}}>De Roberto Leveque. Cuit: 20270932186 Boulevard Belgrano 371 Costa de Araujo</Text>
      </View>
    </View>
  )
}
