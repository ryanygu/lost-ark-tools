export const utils = {
  sortByCreatedDate,
}

// Sort by [oldest, ..., newest]
function compareByDate( a, b ) {
  return new Date(a.created) - new Date(b.created)
}

function sortByCreatedDate(data) {
  const sorted = data.sort(compareByDate)
  return sorted
}