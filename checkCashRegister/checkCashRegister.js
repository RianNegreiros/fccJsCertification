function checkCashRegister(price, cash, cid) {
    let change = cash - price
    let cidReversed = cid.reverse()
    let arrChange = []
    let arrCurrency = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100}

    cidReversed.forEach(el => {
        let bill = arrCurrency[el[0]]
        let curAmount = Math.min(Math.trunc(change/bill), el[1]/bill) * bill
        change -= curAmount
        change = change.toFixed(2)
        el[1] -=curAmount
        arrChange.push([el[0], curAmount])
    })

    if (change > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    else if (cidReversed.reduce((_, mySum) => {return mySum[1]},0) === 0) {
        return {status: "CLOSED", change: arrChange.reverse()};
    }
    else {
        return {status: "OPEN", change: arrChange.filter(item => item[1]>0)};
    }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))