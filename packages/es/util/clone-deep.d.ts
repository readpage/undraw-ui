/**
 * @param obj
 * @returns
 *
 * 适用于任何数组和对象的深拷贝
 * const arr = [1, 2, 3, { a: "b" }, [{ c: "d" }]];
 * const cloneArr = cloneDeep(arr);
 *
 * cloneArr[3].a = "u";
 * cloneArr[4][0].c = "uu";
 *
 * console.log(arr); // [1, 2, 3, { a: "b" }, [{ c: "d" }]]
 * console.log(cloneArr); // [1, 2, 3, { a: "u" }, [{ c: "uu" }]]
 */
declare function cloneDeep(value: any): any;
export { cloneDeep };
