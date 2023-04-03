import "./StartScreen.css"

const StartScreen = ({startGame}) => {
    return (
      <div className = "start">
          <h1>Secret Word Game</h1>
          <p>Clique no botão abaixo para iniciar</p>
          <button onClick={startGame}>Começar o jogo</button>
      </div>
    )
  }

export default StartScreen