
const currencyName = 'ALGO'
const ALGO_AMOUNT = 7451.5233
const apy = 5.53

// calculate interests based on algo_amount and apy
const getAmountForMonth = (ALGO_AMOUNT) => {
    const yearlyPercentage = (1 + (apy * 0.01))
    const dailyPercentage = 1 + ((yearlyPercentage - 1) / 365)

    const days = 30
    const amountPerYear = (((ALGO_AMOUNT * yearlyPercentage)) - ALGO_AMOUNT)
    console.log(`\namountPerYear: \t\t\t${amountPerYear}`)

    let currentALGO = ALGO_AMOUNT
    for (let i = 0; i < days; i++) {
        currentALGO = currentALGO * dailyPercentage
    }
    const profit = currentALGO - ALGO_AMOUNT
    return profit
}

// getAmountForMonth(ALGO_AMOUNT)

const getAmountForYear = (ALGO_AMOUNT) => {
    let currentALGO = ALGO_AMOUNT
    let profit = 0
    let lastProfit = 0
    console.log('\n\n----- new year -----')
    for (let i = 0; i < 12; i++) {
        const algoPerMonth = getAmountForMonth(currentALGO)
        const currentProfitIncrease = algoPerMonth - lastProfit
        lastProfit = algoPerMonth
        console.log(`month ${i + 1} - profitIncrease: \t${currentProfitIncrease} ${currencyName}`)
        currentALGO = currentALGO + algoPerMonth
        console.log(`month ${i+1} - current: \t\t${currentALGO} ${currencyName}`)
        console.log(`month ${i+1} - profit: \t\t${algoPerMonth} ${currencyName}`)
    }
    profit = currentALGO - ALGO_AMOUNT
    console.log(`\ntotal profit 1 year: \t\t${profit} ${currencyName}\n`)
    return profit
}

// getAmountForYear(ALGO_AMOUNT)

const getAmountForTimespan = (years) => {
// getAmountForYear(ALGO_AMOUNT)
    let currentALGO = ALGO_AMOUNT
    for (let i = 0; i < years; i++) {
        const algoPerYear = getAmountForYear(currentALGO)
        currentALGO = currentALGO + algoPerYear
        console.log(`year ${i+1} - current: \t\t${currentALGO} ${currencyName}`)
        console.log(`year ${i+1} - profit: \t\t${algoPerYear} ${currencyName}`)
    }
    console.log(`\ntotal profit after ${years} years: \t${currentALGO - ALGO_AMOUNT} ${currencyName}`)
    console.log(`starting value: \t\t${ALGO_AMOUNT} ${currencyName}\n`)
}

getAmountForTimespan(65)