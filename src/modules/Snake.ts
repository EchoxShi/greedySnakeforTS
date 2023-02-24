class Snake {
  //蛇的容器
  element: HTMLElement
  head: HTMLElement
  bodies: HTMLCollection //queryselector 返回的是nodelist并且是不会变的，而集合可以增减
  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!
    console.log(this.element);
    
    this.bodies = this.element.getElementsByTagName('div')!

  }
  //获取蛇的坐标，只看蛇头的坐标
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  set X(value: number) {
    //新的值没什么变化就不修改
    if (this.X === value) {
      return
    }
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了')
    }
    //蛇禁止掉头，思路 如果有第二个身体，并且第二个身体和要设置的 x 值是一样的，则是掉头，此时让蛇继续往相反方向走
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      if (value > this.X) {
        value = value - 10
      } else {
        value = value + 10
      }
    }
    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkBodyHead()
  }
  set Y(value: number) {
    if (this.Y === value) {
      return
    }
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了')
    }
    //蛇禁止掉头，思路 如果有第二个身体，并且第二个身体和要设置的 x 值是一样的，则是掉头，此时让蛇继续往相反方向走
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = value - 10
      } else {
        value = value + 10
      }
    }
    this.moveBody()  //更新身体
    this.head.style.top = value + 'px' //更新头
    this.checkBodyHead()
  }
  //给蛇添加身体的方法
  addBody() {
    this.element.insertAdjacentHTML('beforeend', "<div></div>")
  }
  //思路是 最后一个身体移到前一个的位置
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }
  //检查蛇头和身体有没有相撞
  checkBodyHead(){
    for(let i=this.bodies.length - 1; i>0; i--){
      let bd = this.bodies[i] as HTMLElement
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
        throw new Error('蛇撞到自己身体了')
      }
    }
  }
}
export default Snake