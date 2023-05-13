export default function getFormattedDate(dateString: string): string {
    const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' })
    return date.format(new Date())
}