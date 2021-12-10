const init = () => {
    console.log('---for each helper init---')

    const colors = ['red', 'green', 'blue']
    colors.forEach(color => console.log(color))

    const numbers = [1, 2, 3, 4, 5, 6]
    let sum = 0
    numbers.forEach(n => sum += n)
    console.log('sum=', sum)

    const doubleNumbers = numbers.map(n => n * 2)
    console.log('>>>doubleNumbers=', doubleNumbers)

    const evenNumbers = numbers.filter(n => n % 2 === 0)
    console.log('>>>evenNumbers=', evenNumbers)
}

export default init
