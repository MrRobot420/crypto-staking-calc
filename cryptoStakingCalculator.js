
const currencyName = 'ALGO'
const crypto_AMOUNT = 7451.5233
const apy = 5.53

// calculate interests based on algo_amount and apy
const getAmountForMonth = (crypto_AMOUNT) => {
    const yearlyPercentage = (1 + (apy * 0.01))
    const dailyPercentage = 1 + ((yearlyPercentage - 1) / 365)

    const days = 30
    const amountPerYear = (((crypto_AMOUNT * yearlyPercentage)) - crypto_AMOUNT)
    console.log(`\namountPerYear: \t\t\t${amountPerYear} ${currencyName}`)

    let currentCrypto = crypto_AMOUNT
    for (let i = 0; i < days; i++) {
        currentCrypto = currentCrypto * dailyPercentage
    }
    const profit = currentCrypto - crypto_AMOUNT
    return profit
}

// getAmountForMonth(Crypto_AMOUNT)

const getAmountForYear = (crypto_AMOUNT) => {
    let currentCrypto = crypto_AMOUNT
    let profit = 0
    let lastProfit = 0
    console.log('\n\n----- new year -----')
    for (let i = 0; i < 12; i++) {
        const cryptoPerMonth = getAmountForMonth(currentCrypto)
        const currentProfitIncrease = cryptoPerMonth - lastProfit
        lastProfit = cryptoPerMonth
        console.log(`month ${i + 1} - profitIncrease: \t${currentProfitIncrease} ${currencyName}`)
        currentCrypto = currentCrypto + cryptoPerMonth
        console.log(`month ${i+1} - current: \t\t${currentCrypto} ${currencyName}`)
        console.log(`month ${i+1} - profit: \t\t${cryptoPerMonth} ${currencyName}`)
    }
    profit = currentCrypto - crypto_AMOUNT
    console.log(`\ntotal profit 1 year: \t\t${profit} ${currencyName}\n`)
    return profit
}

// getAmountForYear(crypto_AMOUNT)

const getAmountForTimespan = (years) => {
// getAmountForYear(crypto_AMOUNT)
    let currentCrypto = crypto_AMOUNT
    for (let i = 0; i < years; i++) {
        const cryptoPerYear = getAmountForYear(currentCrypto)
        currentCrypto = currentCrypto + cryptoPerYear
        console.log(`year ${i+1} - current: \t\t${currentCrypto} ${currencyName}`)
        console.log(`year ${i+1} - profit: \t\t${cryptoPerYear} ${currencyName}`)
    }
    console.log(`\ntotal profit after ${years} years: \t${currentCrypto - crypto_AMOUNT} ${currencyName}`)
    console.log(`starting value: \t\t${crypto_AMOUNT} ${currencyName}\n`)
}

getAmountForTimespan(65)