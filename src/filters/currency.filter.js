export default function currencyFilter(number, currency='RUB') {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency,
        currencyDisplay: 'symbol'
    }).format(number)
}