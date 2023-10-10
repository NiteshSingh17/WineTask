import { TableDataType } from "../types"

type  TableProps = {
    type: string,
    tableData: Array<TableDataType>
}

export  const Table = (props: TableProps) : React.ReactElement => {
    const { tableData, type } = props;
    return (
        <div className="light-scroll" style={{ marginTop: '10px', overflowX:'scroll' }}>
            <table>
                <thead>
                    <th>Measure</th>
                    {
                        tableData.map( (h: TableDataType) => <th key={h.className}>Class {h.className}</th> )
                    }
                </thead>
                <tbody>
                    <tr>
                        <td className="sticky-td">{type} Mean</td>
                        {
                            tableData.map( (h: TableDataType) => <td className="text-center td-min" key={h.className}>{h.mean}</td> )
                        }
                    </tr>
                    <tr>
                        <td className="sticky-td">{type} Median</td>
                        {
                            tableData.map( (h: TableDataType) => <td className="text-center td-min" key={h.className}>{h.median}</td> )
                        }
                    </tr>
                    <tr>
                        <td className="sticky-td">{type} Mode</td>
                        {
                            tableData.map( (h: TableDataType) => <td className="text-center td-min" key={h.className}>{h.mode.join(', ')}</td> )
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}