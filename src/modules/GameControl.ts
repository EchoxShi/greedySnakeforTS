import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
class GameControl{
  snake:Snake
  food:Food
  scorePanel:ScorePanel
  direction:string = ''
  constructor(){
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.init()
  }
  //游戏初始化方法，调用即开始游戏
  init(){
    document.addEventListener('keydown',this.keydownHandler)
  }
  keydownHandler(event:KeyboardEvent){
    console.log(event.key);
    this.direction = event.key

  }
}
export default GameControl