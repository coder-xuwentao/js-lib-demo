import { type } from './type';

interface ObjectNeedKeys {
  [k: string]: any;
}

export function clone<T>(source: T): T {
  const t = type(source);
  if (t !== 'object' && t !== 'array') {
    return source;
  }

  let target: any;

  if (t == "object") {
    target = {};
    const sourceObj = source as ObjectNeedKeys; // 断言ts为source为对象
    for (const i in source) {
      if (Object.prototype.hasOwnProperty.call(sourceObj, i)) {
        target[i] = clone(sourceObj[i]);
      }
    }
  } else {
    
    target = [];
    const sourceArr = source as any[]; // 断言ts为source为数组
    for (let i = 0; i < sourceArr.length; i++) {
      target[i] = clone(sourceArr[i]);
    }
  }

  return target as T;
}
