class NumberRange {
    constructor(min, max) {
        this._data = { min: min, max: max }
    }

    get min() { return this._data.min }
    get max() { return this._data.max }

    contains(arg) {
        return arg >= this.min && arg <= this.max
    }
}

const stations = [
    { index: 1, num: 2 },
    { index: 2, num: 2 },
    { index: 3, num: 2 },
    { index: 4, num: 2 }
]

const range = new NumberRange(2, 4)

function readingOutsideRange(station, ranges) {
    return station.filter(item => !ranges.contains(item.index))
}

console.log(readingOutsideRange(stations, range))
console.log(range.min)
console.log(range.max)