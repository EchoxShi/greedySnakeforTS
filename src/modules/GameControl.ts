import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  direction: string = ''
  // 记录游戏是否结束
  isLive: boolean = true
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel(10,2)
    this.init()
  }
  //游戏初始化方法，调用即开始游戏
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }
  keydownHandler(event: KeyboardEvent) {
    console.log(event.key);
    this.direction = event.key

  }
  run() {
    //根据方向控制蛇的移动
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10
        break
      case 'ArrowDown':
      case 'Down':
        Y += 10
        break
      case 'ArrowLeft':
      case 'Left':
        X -= 10
        break
      case 'ArrowRight':
      case 'Right':
        X += 10
        break
    }
    //检查是否吃到食物
    this.checkEat(X,Y)
      // console.log('吃到食物了');
    
    //抛异常说明撞墙
    try {
      this.snake.X = X
      this.snake.Y = Y
    }catch(e:any){
      alert(e.message)
      this.isLive = false
    }
    this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level - 1) * 30)
  }
  checkEat(X:number,Y:number){
    if(X === this.food.X && Y === this.food.Y){
      this.food.change()
      this.snake.addBody()
      this.scorePanel.addScore()
      return true
    }
    return false
  }
}
export default GameControl