enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

function isSummer(month: Month) {
  switch (month) {
      case Month.June:
      case Month.July:
      case Month.August:
          return true;
      default:
          return false
  }
}