const Mi = 1000000;
const monthPriceComputation = .00000625125;

class Lambda {
    static calculateLambda(requestCount, computationTime = 50, requestPrice, freeTier = false) {
        requestCount = freeTier ? (requestCount - 1000000) : requestCount

        const totalComputationPrice = Math.round((requestCount * (computationTime/1000)) * monthPriceComputation);
        const totalRequestPrice = Math.round(requestCount * (requestPrice/Mi));

        return totalComputationPrice + totalRequestPrice;
    }
}

console.log(Lambda.calculateLambda(268000000, 150, .60))