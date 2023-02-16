class ScorePanel{
  score = 0
  level = 1
  scoreEle:HTMLElement
  levelEle:HTMLElement
  maxLevel:number
  constructor(maxLevel:number = 10){
    this.maxLevel = maxLevel
    this.scoreEle = document.querySelector('#score')!
    this.levelEle = document.querySelector('#level')!

  }
  addScore(){
    this.score ++
    this.scoreEle.innerHTML = this.level + ''
    if(this.score % 10 == 0){
      this.levelUp()
    }
  }
  levelUp(){
    if(this.level < this.maxLevel){
      this.levelEle.innerHTML = ++this.score + ''
    }
  }

}
// const score = new ScorePanel()
// for(let i = 0;i < 10;i ++){
//   score.addScore()
// }

export default ScorePanel