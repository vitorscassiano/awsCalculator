const Mi = 1000000;
const edgeMonthPriceComputation = .00000625125;

export default class Lambda {
    static calculate(requestCount, computationTime = 50, requestPrice, freeTier = false) {
        requestCount = freeTier ? (requestCount - 1000000) : requestCount

        const totalComputationPrice = Math.round((requestCount * (computationTime/1000)) * monthPriceComputation);
        const totalRequestPrice = Math.round(requestCount * (requestPrice/Mi));

        return totalComputationPrice + totalRequestPrice;
    }
}