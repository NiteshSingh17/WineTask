import React, { useMemo } from "react"
import { getFlavanoidsTableData, getGammaTableData } from "../utils/helper"
import { TableDataType } from "../types";
import { Table } from "./Table";

export const GammaTable = (): React.ReactElement => {
    const tableData: Array<TableDataType> = useMemo( () => getGammaTableData(),[]); 
    return <div style={{  marginTop: '100px' }}>
        <h1>Gammas Table</h1>
       <Table type='Gamma' tableData={tableData}/>
    </div>
}