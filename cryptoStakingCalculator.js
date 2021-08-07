
const currencyName = 'ALGO'
const crypto_AMOUNT = 7451.5233
const apy = 5.53
const pricePerCrypto = 0.732
const fiatCurrency = '€'

const LOGS_ON = false

// calculate interests based on crypto_amount and apy
const getAmountForMonth = (crypto_AMOUNT) => {
    const yearlyPercentage = (1 + (apy * 0.01))
    const dailyPercentage = 1 + ((yearlyPercentage - 1) / 365)

    const days = 30
    const amountPerYear = (((crypto_AMOUNT * yearlyPercentage)) - crypto_AMOUNT)
    if (LOGS_ON) console.log(`\nyearlyAmount: \t\t${amountPerYear} \t${currencyName}`)

    let currentCrypto = crypto_AMOUNT
    // get daily interests
    for (let i = 0; i < days; i++) {
        currentCrypto = currentCrypto * dailyPercentage
    }
    const profit = currentCrypto - crypto_AMOUNT
    return profit
}

const getAmountForYear = (crypto_AMOUNT) => {
    let currentCrypto = crypto_AMOUNT
    let profit = 0
    let lastProfit = 0
    if (LOGS_ON) console.log('\n\n----- new year -----')

    // get monthly interests
    for (let i = 0; i < 12; i++) {
        const cryptoPerMonth = getAmountForMonth(currentCrypto)
        const currentProfitIncrease = cryptoPerMonth - lastProfit
        lastProfit = cryptoPerMonth
        if (LOGS_ON) console.log(`month ${i + 1} - increase: \t${currentProfitIncrease} \t${currencyName}`)
        currentCrypto = currentCrypto + cryptoPerMonth
        if (LOGS_ON) console.log(`month ${i+1} - current: \t${currentCrypto} \t${currencyName}`)
        if (LOGS_ON) console.log(`month ${i+1} - profit: \t${cryptoPerMonth} \t${currencyName}`)
    }
    profit = currentCrypto - crypto_AMOUNT
    if (LOGS_ON) console.log(`\ntotal profit 1 year: \t${profit} \t${currencyName}\n`)
    return profit
}

const getAmountForTimespan = (years) => {
    let currentCrypto = crypto_AMOUNT

    // get yearly interests
    for (let i = 0; i < years; i++) {
        const cryptoPerYear = getAmountForYear(currentCrypto)
        currentCrypto = currentCrypto + cryptoPerYear
        if (LOGS_ON) console.log(`year ${i+1} - current: \t${currentCrypto} \t${currencyName}`)
        if (LOGS_ON) console.log(`year ${i+1} - profit: \t${cryptoPerYear} \t${currencyName}`)
    }
    console.log(`\nstarting amount: \t${crypto_AMOUNT} \t\t${currencyName}`)
    console.log(`current amount: \t${currentCrypto}\t${currencyName}`)
    console.log(`profit in ${years} years: \t${currentCrypto - crypto_AMOUNT} \t${currencyName}`)

    const startValue = crypto_AMOUNT * pricePerCrypto
    const endValue = currentCrypto * pricePerCrypto

    console.log(`\n\nstarting value: \t${startValue} \t\t${fiatCurrency}`)
    console.log(`end value: \t\t${endValue} \t${fiatCurrency}`)
    console.log(`profit in ${years} years: \t${endValue - startValue} \t${fiatCurrency}`)
}

getAmountForTimespan(15)