export default function (time: number): string {
  return new Date(time).toLocaleString("ko-KR")
}
