
const currencyName = 'ALGO'
const crypto_AMOUNT = 7451.5233
const apy = 5.53

// calculate interests based on algo_amount and apy
const getAmountForMonth = (crypto_AMOUNT) => {
    const yearlyPercentage = (1 + (apy * 0.01))
    const dailyPercentage = 1 + ((yearlyPercentage - 1) / 365)

    const days = 30
    const amountPerYear = (((crypto_AMOUNT * yearlyPercentage)) - crypto_AMOUNT)
    console.log(`\nyearlyAmount: \t\t${amountPerYear} \t${currencyName}`)

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
        console.log(`month ${i + 1} - increase: \t${currentProfitIncrease} \t${currencyName}`)
        currentCrypto = currentCrypto + cryptoPerMonth
        console.log(`month ${i+1} - current: \t${currentCrypto} \t${currencyName}`)
        console.log(`month ${i+1} - profit: \t${cryptoPerMonth} \t${currencyName}`)
    }
    profit = currentCrypto - crypto_AMOUNT
    console.log(`\ntotal profit 1 year: \t${profit} \t${currencyName}\n`)
    return profit
}

// getAmountForYear(crypto_AMOUNT)

const getAmountForTimespan = (years) => {
// getAmountForYear(crypto_AMOUNT)
    let currentCrypto = crypto_AMOUNT
    for (let i = 0; i < years; i++) {
        const cryptoPerYear = getAmountForYear(currentCrypto)
        currentCrypto = currentCrypto + cryptoPerYear
        console.log(`year ${i+1} - current: \t${currentCrypto} \t${currencyName}`)
        console.log(`year ${i+1} - profit: \t${cryptoPerYear} \t${currencyName}`)
    }
    console.log(`\nstarting value: \t${crypto_AMOUNT} \t\t${currencyName}`)
    console.log(`current amount: \t${currentCrypto}\t${currencyName}`)
    console.log(`profit after ${years} years: \t${currentCrypto - crypto_AMOUNT} \t${currencyName}\n`)
}

getAmountForTimespan(5)