import { OPEN_PRICE_REPORT_FIELD, HIDE_PRICE_REPORT_FIELD} from './actionTypes'


export function openPriceReportField () {
    return {
        type: OPEN_PRICE_REPORT_FIELD
    }
}

export function hidePriceReportField () {
    return {
        type: HIDE_PRICE_REPORT_FIELD
    }
}

