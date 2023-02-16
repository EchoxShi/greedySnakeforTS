class Snake{
  //蛇的容器
  element:HTMLElement
  head:HTMLElement
  bodies:HTMLCollection //queryselector 返回的是nodelist并且是不会变的，而集合可以增减
  constructor(){
    this.element = document.getElementById('#snake') !
    this.head = document.querySelector('#snake > div') ! 
    this.bodies = this.element.getElementsByTagName('div') !

  }
  //获取蛇的坐标，只看蛇头的坐标
  get X(){
    return this.head.offsetLeft
  }
  get Y(){
    return this.head.offsetTop
  }
  set X(value:number){
    this.head.style.left = value + 'px'
  }
  set Y(value:number){
    this.head.style.top = value + 'px'
  }
  //给蛇添加身体的方法
  addBody(){
    this.element.insertAdjacentHTML('beforeend',"<div></div>")
  }
}
export default Snake