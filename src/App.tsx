import { useState } from "react";
import styles from "./App.module.css"
import poweredImagem from "./assets/powered.png"
import { levels, calculateImc } from "./helpers/imc";
import { GridItem } from "./components/GridItens/GridItem";

const App = () => {

  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      return
    } else {
      alert("Digite todos os campos.")
    }
  }

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImagem} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
        <h1>Calcule o seu IMC</h1>
        <p>IMC é a sigla para Índice de Massa Corpórea. parâmetrp
            adotado pela Organização Mundial da Saúde para
            calcular o peso ideal de cada pessoa.</p>

            <input 
              type="number"
              placeholder="Digita a sua altura. Ex: 1.5 (em metros)"
              value={heightField > 0? heightField : ""}  
              onChange={ e => setHeightField(parseFloat(e.target.value))} 
            />
              <input 
              type="number"
              placeholder="Digita o seu peso. Ex: 73.5 (em kg)"
              value={weightField > 0? weightField : ""}  
              onChange={ e => setWeightField(parseFloat(e.target.value))} 
            />

            <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} data={item}/>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App