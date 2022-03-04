export type LandingsPageType = {
    Title: string,
    About: string,
    Ucls: UclsType[],
    Questionnaire: QuestionnaireType[],
    FeatureBox: FeatureType[],
}

export type UclsType = {
    id: number,
    Ucl: string
}

export type QuestionnaireType = {
    id: number,
    QuestionTitle: string
}

export type FeatureType = {
    id: number,
    FeatureName: string,
    FeatureDescription: string,
    FeatureHeaderText: string,
    FeatureTextLeft: boolean,
    FeatureBackgroundColorCode: string,
    FeatureImg: FeatureImgType
}

export type FeatureImgType = {
    data: FeatureImgDataType,
}

export type FeatureImgDataType = {
    id: number,
    attributes: FeatureImgUrlType
}

export type FeatureImgUrlType = {
    url: string
}