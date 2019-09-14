import { isUndefined } from 'lodash';
export function genIds(arr) {
  let i = 0;
  return arr.map(x => {
    x.id = i++;
    return x;
  });
}
export function genKeyData(
  keyset: any,
  key: string,
  baseColors: string,
  content: string,
  subContent: string,
  thirdContent: string
) {
  let output = {
    key,
    content,
    subContent,
    thirdContent,
    colors: keyset.colors[baseColors],
    legendOverriden:false
  };
  if (keyset.specialKeys && keyset.specialKeys[key]) {
    const spKey = keyset.specialKeys[key];
    if (spKey.type && keyset.colors[spKey.type]) {
      output.colors = keyset.colors[spKey.type];
    }
    if (!isUndefined(spKey.content)) {
      output.content = spKey.content;
      output.legendOverriden=true;
    }
    if (!isUndefined(spKey.subContent)) {
      output.subContent = spKey.subContent;
      output.legendOverriden=true;
    }
    if (!isUndefined(spKey.thirdContent)) {
      output.thirdContent = spKey.thirdContent;
      output.legendOverriden=true;
    }
  }
  return output;
}
