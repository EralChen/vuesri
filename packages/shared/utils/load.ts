export function loadStyleString (css: string) {
  const style = document.createElement('style')
  style.appendChild(document.createTextNode(css))
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(style)

  return () => { style.parentNode === head && head.removeChild(style) }
}
