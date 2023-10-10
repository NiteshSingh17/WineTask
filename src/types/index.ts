export type WineDataType = {
    "Alcohol": number,
    "Malic Acid": number,
    "Ash": number,
    "Alcalinity of ash": number,
    "Magnesium": number,
    "Total phenols": number,
    "Flavanoids": number,
    "Nonflavanoid phenols": number,
    "Proanthocyanins": number,
    "Color intensity": number,
    "Hue": number,
    "OD280/OD315 of diluted wines":number,
    "Unknown": number
}

export type TableDataType = {
    className: string,
    mean: string,
    median: string,
    mode : Array<string>
}
