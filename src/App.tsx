import React from 'react';
import { createStage, isColliding } from './gameHelpers';

//hooks
import { useInterval } from './hooks/useInterval';
import { usePlayer } from './hooks/usePlayer';
import { useStage } from './hooks/useStage';
//Components
import Stage from './components/Stage/Stage';
import Display from './components/Display/Display';
import StartButton from './components/StartButton/StartButton';
// Styles
import { StyledTetrisWrapper, StyledTetris } from './App.styles';

const App: React.FC = () => {
  const [dropTime, setDropTime] = React.useState<null | number>(null);
  const [gameOver, setGameOver] = React.useState(true);

  const gameArea = React.useRef<HTMLDivElement>(null);

  const {player, updatePlayerPos, resetPlayer} = usePlayer();
  const {stage, setStage} = useStage(player,resetPlayer);

  const movePlayer = (dir:number) => {
    if(!isColliding(player, stage, {x: dir, y:0})) {
      updatePlayerPos({ x:dir, y:0, collided: false});
    }
  };

  const keyUp = ({ keyCode }: {keyCode: number}): void => {
    if(keyCode === 40) {
      setDropTime(1000);
    }
  };

  const handleStartGame = (): void => {
    if(gameArea.current) gameArea.current.focus();
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
  };

  const move = ({ keyCode, repeat}: {keyCode: number, repeat:boolean}): void => {
    if(keyCode === 37) {
      movePlayer(-1);
    } else if(keyCode === 39) {
      movePlayer(1);
    } else if(keyCode === 40) {
      if(repeat) return;
      setDropTime(30);
    } else if(keyCode === 38) {
      //later
    }
  };

  const drop = (): void => {
    if(!isColliding(player, stage, {x: 0, y:1})) {
      updatePlayerPos({x: 0,y: 1,collided: false });
    } else {
      if(player.pos.y < 1) {
        console.log("Game Over");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided:true});
    }
  };

  useInterval(() => {
    drop();
  },dropTime);

  return (
    <StyledTetrisWrapper role='button' tabIndex={0} onKeyDown={move} onKeyUp={keyUp} ref={gameArea}>
      <StyledTetris>
        <div className='display'>
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text='Game Over'/>
              <StartButton callback={handleStartGame} />
            </>
          ) : (
            <>
              <Display text={`Score:`}/>
              <Display text={`Rows:`}/>
              <Display text={`Level:`}/>
            </>
          )}
        </div>
        <Stage stage={stage} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
