class Cash {
  // 完成Cash类， 使打印结果为： 1元6角7分 1元6角7分 3元3角4分 167
  constructor(num) {
    this.num = num;
  }
  plus(a) {
    let plus = this.num + a.num;
    plus = String(plus);
    let str = `${plus[0]}元${plus[1]}角${plus[2]}分`;
    return str;
  }

  static sum(...objs) {
    let sum = 0;
    let len = objs.length;
    for (let i = 0; i < len; i++) {
      if (objs[i].num) {
        sum = sum + objs[i].num;
      } else {
        sum = sum + Number(objs[i].replace(/[^0-9]/gi, "")); //利用正则表达式提取字符串中的数字
      }
    }
    sum = String(sum);
    let str = `${sum[0]}元${sum[1]}角${sum[2]}分`;
    return str;
  }

  valueOf() {
    //object.valueOf()：返回值为该对象的原始值，会返回对象本身，将其进行改写
    return this.num;
  }
}

const cash = new Cash(101);
const cash2 = new Cash(66);
const cash3 = cash.plus(cash2);
const cash4 = Cash.sum(cash, cash2);
const cash5 = Cash.sum(cash, cash2, cash3);
console.log(`${cash3} ${cash4} ${cash5} ${cash + cash2}`);
