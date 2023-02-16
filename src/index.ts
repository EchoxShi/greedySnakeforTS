import './style/index.less'
class Food{
  element : HTMLElement;
  constructor(){
    this.element = document.querySelector('#food')!
  }
  get X(){
    return this.element.offsetLeft
  }
  get Y(){
    return this.element.offsetTop
  }
  //改变食物的位置
  change(){
    //随机位置：宽0-290，高0-290
    let left = Math.round(Math.random() * 29 ) * 10
    let top = Math.round(Math.random() * 29 ) * 10
    
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }

}

//测试代码
const food = new Food()
console.log(food.X,food.Y);
food.change()
console.log(food.X,food.Y);


