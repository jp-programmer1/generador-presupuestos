'use client';
import React from "react";
import { useActions } from "./useActions";

export default function Home() {
  const {
    data,
    dataBasic,
    formValues,
    onAddItem,
    onChangeDataBasic,
    onChangeFirstField,
    onEditItem,
    onGenerate,
    onRemoveItem,
    onResetDataBasic,
    onResetAll
  } = useActions();

  return (
    <main className="p-10">
      <div className="md:flex items-center justify-between">
        <h1 className="text-xl font-bold">Generador de Presupuestos 🫣</h1>
        {data.length > 0 &&
          <div>
            <span className="mr-3">TOTAL: $ {formValues.total}</span>
            <button className={`btn btn-solid-warning mr-2`} onClick={onResetAll}>Limpiar</button>
            <button className={`btn btn-solid-success`} onClick={onGenerate}>Generar presupuesto</button>
          </div>
        }
      </div>

      <div className="md:flex md:justify-between">
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="">Fecha</label>
              <input value={formValues?.fecha} onChange={onChangeFirstField} className="input-block input" name="fecha" placeholder="Fecha" type="date" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="">Cliente</label>
              <input value={formValues?.cliente} onChange={onChangeFirstField} className="input-block input" name="cliente" placeholder="Cliente" type="text" />
            </div>
          </div>

          <div className="divider"></div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Items</h2>
            <div>
              <div className="grid grid-cols-2 mt-5 gap-5">
                <div className="col-span-2 md:col-span-1 inline-block">
                  <label htmlFor="cantidad">Cantidad</label>
                  <input onChange={onChangeDataBasic} value={dataBasic?.cantidad} className="input-block input" name="cantidad" placeholder="Cantidad" type="number" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="precioUnitario">P. Unitario</label>
                  <input onChange={onChangeDataBasic} value={dataBasic?.precioUnitario} className="input-block input" name="precioUnitario" placeholder="P. Unitario" type="number" />
                </div>
                <div className="col-span-2 md:col-span-2">
                  <label>Producto</label>
                  <input onChange={onChangeDataBasic} value={dataBasic?.producto} className="input-block input" name="producto" placeholder="Producto" type="text" />
                </div>
              </div>

              <button
                className="btn btn-secondary btn-sm mt-4"
                onClick={onAddItem}
                disabled={!dataBasic.producto}
              >
                {dataBasic?.edit ? 'Editar' : 'Agregar'}
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-auto max-w-2xl h-96 ml-2">
          <div className="mt-5">
            {data.map((d, index) => (
              <div key={index} className={`${dataBasic.index === index ? 'bg-slate-800' : 'bg-slate-600'}  rounded-md mb-2`}>
                <div className="p-4">
                  <div className="grid grid-cols-6 items-center gap-2">
                    <div className="col-span-6 md:col-span-1">
                      <p className="text-sm">{d.cantidad}</p>
                    </div>
                    <div className="col-span-6 md:col-span-2">
                      <p className="text-sm font-semibold">
                        {d.producto.length > 14 ? d.producto.slice(0, 14) + '...' : d.producto}
                      </p>
                    </div>
                    <div className="col-span-6 md:col-span-1">
                      <p className="text-sm font-semibold mr-2">$ {d.precioUnitario}</p>
                    </div>
                    <div className="col-span-6 md:col-span-2 self-end">
                      <div className="flex flex-1 items-center self-end justify-end gap-1">
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => {
                            onEditItem(index)
                            if (dataBasic.index === index) onResetDataBasic();
                          }}>{
                            dataBasic.index === index ? 'Cancelar' : 'Editar'
                          }</button>
                        <button
                          className="btn btn-error btn-sm"
                          disabled={dataBasic.index === index}
                          onClick={() => onRemoveItem(index)}
                        >Eliminar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}