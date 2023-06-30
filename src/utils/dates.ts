export const formatDate = (date: string | null, year: number | undefined): string | undefined => {
  return date !== null && year !== undefined ? `${date}-${year}` : undefined
}
