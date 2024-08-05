import React from 'react';
import FirstPart from "./section/FirstPart";
import SecondPart from "./section/SecondPart";
import ThirdPart from "./section/ThirdPart";
import styles from "./styles.module.scss"

function App() {
  return (
    <div className={styles.app}>
      <FirstPart />
      <SecondPart />
      <ThirdPart />
    </div>
  );
}

export default App;
