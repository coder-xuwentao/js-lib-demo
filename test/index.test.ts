import { clone } from '../src/index';

describe("function clone", function () {
  describe("param data", function () {
    it("正确用例", function () {
      // 基本数据类型
      expect(clone(1)).toEqual(1);
      expect(clone("abc")).toEqual("abc");

      // 数组
      const arr = [1, [2]];
      const cloneArr = clone(arr);
      expect(cloneArr).not.toBe(arr);
      expect(cloneArr).toEqual(arr);

      // 对象
      const obj = { a: { b: 1 } };
      const cloneObj = clone(obj);
      expect(cloneObj).not.toBe(obj);
      expect(cloneObj).toEqual(obj);
    });

    it("边界值用例", function () {
      expect(clone(undefined)).toEqual(undefined);

      expect(clone(null)).toEqual(null);
    });
  });
});

