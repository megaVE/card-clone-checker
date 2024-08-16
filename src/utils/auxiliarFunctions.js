export function shortenString(string, maxSize) {
  if(string.length < maxSize)
    return string

  return `${string.slice(0, maxSize - 3)}...`
}
