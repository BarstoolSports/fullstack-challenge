const stale = (lastUpdated: string) => {
  const lastUpdatedDate = new Date(lastUpdated)
  const now = new Date()
  const d = (now - lastUpdatedDate) / 1e3

  const s = Math.floor((d % 3600) % 60)

  if (s > 15) return true
  return false
}

export default stale
