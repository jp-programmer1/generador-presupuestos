import { useCallback, useEffect, useState } from 'react'

const initialValues = {
  producto: '',
  precioUnitario: 0,
  cantidad: 0
}
const initialFormValues = {
  fecha: '',
  cliente: ''
}
export const useActions = () => {
  const [formValues, setFormValues] = useState<any>(initialFormValues);

  const [dataBasic, setDataBasic] = useState<any>({});
  const [data, setData] = useState<any[]>([]);

  const onAddItem = useCallback((e: any) => {
    let copyData = [...data];
    const { producto, precioUnitario, cantidad, edit } = dataBasic;
    if (edit) {
      copyData[dataBasic.index] = { producto, precioUnitario, cantidad };
    } else {
      copyData.push({ producto, precioUnitario, cantidad });
    }
    setData(copyData);
    setDataBasic(initialValues);
  }, [dataBasic]);

  const onGenerate = useCallback((e: any) => {
    e.preventDefault();
    const payload = {
      items: data,
      fecha: formValues.fecha,
      cliente: formValues.cliente,
      total: formValues.total
    }
    const queryString = encodeURIComponent(JSON.stringify(payload));
    const url = `/presupuesto?data=${queryString}`;
    window.open(url, '_blank');
  }, [data, formValues]);

  const onChangeDataBasic = useCallback((e: any) => {
    const { target: { name, value } } = e;
    const copyData = { ...dataBasic };
    copyData[name] = value;
    setDataBasic(copyData);
  }, [dataBasic]);

  const onEditItem = useCallback((index: number) => {
    const findItem = data[index];
    setDataBasic({ ...findItem, index, edit: true });
  }, [data]);

  const onRemoveItem = useCallback((index: number) => {
    const findItem = data[index];
    if (findItem) {
      let copyData = [...data];
      copyData.splice(index, 1);
      setData(copyData);
    }
  }, [data]);

  const onChangeFirstField = useCallback((e: any) => {
    const { target: { value, name } } = e;
    setFormValues((current: any) => ({ ...current, [name]: value }));
  }, []);

  const onResetDataBasic = useCallback(() => {
    setDataBasic(initialValues);
  }, []);

  const onResetAll = useCallback(() => {
    setData([]);
    setFormValues(initialFormValues);
    setDataBasic(initialValues);
  }, []);

  useEffect(() => {
    let total = 0;
    if (data.length > 0) {
      data.forEach(item => {
        total += item?.cantidad * item?.precioUnitario
      });
      setFormValues((current: any) => ({...current, total}));
    }
  }, [data]);


  return {
    onChangeDataBasic,
    onChangeFirstField,
    onGenerate,
    onRemoveItem,
    onEditItem,
    onAddItem,
    onResetDataBasic,
    onResetAll,
    data,
    dataBasic,
    formValues
  }
}
