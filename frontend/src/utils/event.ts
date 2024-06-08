export function formatDate(date: string) {
  return Intl.DateTimeFormat('id', {
    day: 'numeric',
    month: 'short',
  }).format(new Date(date))
}
