export const parseData = (snapshot, id) => {
  const result = []
  if (snapshot.val()) {
    const values = snapshot.val()
    for (const value in values) {
      result.push({
        id: value,
        ...values[value]
      })
    }
    return result
  }
  return result
}
