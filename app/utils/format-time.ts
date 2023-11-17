export default function (time: number | string): string {
  return new Date(time).toLocaleString("ko-KR")
}
