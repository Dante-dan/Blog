/**
 * @author: duanjl
 * @date: 2020/6/28
 * @description: desc
 */
class LinkNode {
  public val;
  public next;
  constructor(value) {
    this.val = value;
    this.next = null
  }
  toString() {
    let cur = this.next;
    const stringArr = [];
    while (cur) {
      stringArr.push(cur.val);
      cur = cur.next;
    }
    return stringArr.join(' -> ')
  }
}

class LinkList {
  public head = null;
  public length = 0;
  constructor(valueArr: any[]) {
    this.head = null;
    this.length = 0;
    let cur;
    let pre;
    valueArr.forEach((value, index) => {
      cur = new LinkNode(value);
      if(index === 0) {
        this.head = cur;
        pre = {};
      }
      pre.next = cur;
      pre = cur;
      cur = cur.next;
      this.length++;
    })
  }
  reverse(pre, cur) {
    if(!cur) {
      return pre;
    }
    let next = cur.next;
    cur.next = pre;
    // 改变头指针指向
    this.head = cur;
    this.reverse(cur, next)
  }
  toString() {
    let cur = this.head;
    const stringArr = [];
    while (cur) {
      stringArr.push(cur.val);
      cur = cur.next;
    }
    return stringArr.join(' -> ')
  }
}
export default function overallReverse() {
  const linkedList = new LinkList([1, 2, 3, 4, 5]);
  linkedList.reverse(null, linkedList.head);
  console.log(linkedList);
  console.log(linkedList.toString());
}

overallReverse();
