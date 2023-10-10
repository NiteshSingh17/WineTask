import { TableDataType, WineDataType } from "../types";
import { WINE_DATA } from "./data";

const getGroupAlcohol = (): Map<number, Array<WineDataType>> => {
    let groupData: Map<number, Array<WineDataType>> = new Map;
    for(let i in WINE_DATA){
        const alcohol = WINE_DATA[i];
        const alcoholClass = alcohol.Alcohol;
        let alcoholData = groupData.get(alcoholClass);
        if(!alcoholData){
            groupData.set(alcoholClass,[alcohol]);
        }else{
            groupData.set(alcoholClass,[...alcoholData, alcohol]);
        }
    }
    return groupData;
}

export const getFlavanoidsTableData = () : Array<TableDataType> => {
    const GroupAlcoholData = getGroupAlcohol();
    let tableData: Array<TableDataType> = [];
    for (const [key, value] of GroupAlcoholData.entries()) {
        let flavanoids = value.map(f => f.Flavanoids);
        tableData.push({
            className: String(key),
            mean: calculateMean(flavanoids),
            median: calculateMedian(flavanoids.sort()),
            mode : calculateMode(flavanoids)
        })
      }
    return tableData;
}


export const getGammaTableData = () : Array<TableDataType> => {
    const GroupAlcoholData = getGroupAlcohol();
    let tableData: Array<TableDataType> = [];
    for (const [key, value] of GroupAlcoholData.entries()) {
        let gammas = value.map(f => convertToGamma(f));
        // console.log("gammas",gammas)
        tableData.push({
            className: String(key),
            mean: calculateMean(gammas),
            median: calculateMedian(gammas.sort()),
            mode : calculateMode(gammas)
        })
      }
    return tableData;
}


const convertToGamma = (data: WineDataType) : number => {
    return (data.Ash * data.Hue) / data.Magnesium
}

const calculateMean = (array: Array<number>) : string => {
    let sum : number = array.reduce( (pre,next) => pre + next,0);
    return parseFloat((sum / array.length ) + '').toFixed(3);
}   
const calculateMedian = (array: Array<number>) : string => {
    return parseFloat((array.length % 2 === 1 ? array[ (array.length - 1) / 2 ] : (array[ (array.length / 2)  - 1 ] +  array[ (array.length / 2)  + 1 ]) / 2) + '').toFixed(3);
}   


const calculateMode = (array: Array<number>) : Array<string> => {
    let counts:  {
        [key: string]: number;
      } = array.reduce( (pre: any, next) => { pre[next] = pre[next] ? pre[next] + 1 : 1; return pre;  },{})
    let maxCount = Math.max(...Object.values(counts));
    let maxMedians: Array<string> = [];
    Object.keys(counts).map( (k : any) => {
        if(counts[k] === maxCount ){
            maxMedians.push(parseFloat(k).toFixed(3));
        }
    } );
    return maxMedians;
}   
