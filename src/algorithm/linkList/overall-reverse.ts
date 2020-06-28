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
    pre.next = next;
    return overallReverse(cur, next)
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
export default function overallReverse(pre, cur) {
  const linkedList = new LinkList([1, 2, 3, 4, 5]);
  linkedList.reverse(linkedList.head, linkedList.head.next);
  linkedList.toString();
}

overallReverse();
