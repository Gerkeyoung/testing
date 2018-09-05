module.exports = {
    add: (...args) => {
        return args.reduce((total, curr) => {
            return total + curr
        })
    },
    mul: (...args) => {
        return args.reduce((total, curr) => {
            return total * curr
        })
    },
}