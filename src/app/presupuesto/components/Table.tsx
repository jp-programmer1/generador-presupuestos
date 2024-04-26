import { View, StyleSheet, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  table: {
    margin: 5,
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid #EEE',
    paddingTop: 8,
    paddingBottom: 8,
  },
  header: {
    borderTop: 'none',
  },
  bold: {
    fontWeight: 'bold',
  },
  col1: {
    width: '50px',
    fontSize: 12
  },
  col2: {
    width: '250px',
    fontSize: 12
  },
  col3: {
    width: '100px',
    fontSize: 12
  },
  col4: {
    width: '100px',
    textAlign: 'right',
    fontSize: 12,
    justifyContent: 'flex-end',
  },
})

export const Table = ({ products = [] }: { products: any[] }) => {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.col1}>CANT.</Text>
        <Text style={[styles.col2, styles.bold]}>PRODUCTO</Text>
        <Text style={[styles.col3, styles.bold]}>P. UNITARIO</Text>
        <Text style={[styles.col4, styles.bold]}>TOTAL</Text>
      </View>
      {products.map((row, i) => (
        <View key={i} style={styles.row} wrap={false}>
          <Text style={styles.col1}>
            {row.cantidad}
          </Text>
          <Text style={styles.col2}>
            <Text style={styles.bold}>{row.producto}</Text>
          </Text>
          <Text style={styles.col3}>$ {row.precioUnitario}</Text>
          <Text style={styles.col4}>
            $ {row.cantidad * row.precioUnitario}
          </Text>
        </View>
      ))}
    </View>
  )
}
