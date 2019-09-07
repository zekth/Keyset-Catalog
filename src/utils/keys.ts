import { isUndefined } from 'lodash'

export function genKeyData(
  keyset: any,
  key: string,
  baseColors: string,
  content: string,
  subContent: string,
  thirdContent: string
) {
  let output = {
    content,
    subContent,
    thirdContent,
    colors: keyset.colors[baseColors]
  }
  if (keyset.specialKeys && keyset.specialKeys[key]) {
    const spKey = keyset.specialKeys[key]
    if (spKey.type && keyset.colors[spKey.type]) {
      output.colors = keyset.colors[spKey.type]
    }
    if (!isUndefined(spKey.content)) {
      output.content = spKey.content
    }
    if (!isUndefined(spKey.subContent)) {
      output.subContent = spKey.subContent
    }
    if (!isUndefined(spKey.thirdContent)) {
      output.thirdContent = spKey.thirdContent
    }
  }
  return output
}
