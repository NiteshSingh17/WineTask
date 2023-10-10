import { useMemo } from "react"
import { getFlavanoidsTableData } from "../utils/helper"
import { TableDataType } from "../types";
import { Table } from "./Table";

export const FlavanoidsTable = () : React.ReactElement => {
    const tableData: Array<TableDataType> = useMemo( () => getFlavanoidsTableData(),[]); 
    return <div>
        <h1>Flavanoids Table</h1>
       <Table type='Flavanoids' tableData={tableData}/>
    </div>
}