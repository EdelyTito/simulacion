<template>
  <div>
    <h1>Ejercicio D</h1>
    <div class="flex-container">
      <Fieldset>
        <p>
          Para el juego del lanzamiento de dados realizar 30 simulaciones de 100 juegos y determinar: la ganancia promedio neta del dueño, el número de veces que gana la casa, la probabilidad de ganar de la casa en cada simulación.
        </p>
      </Fieldset>
      <div class="controls">
        <label for="gamesCount">Número de juegos:</label>
        <input type="number" v-model="gamesCount" id="gamesCount" min="1">
        <button @click="simulateGame">Simular Juego</button>
      </div>
    </div>
    <Fieldset v-if="results.length" class="results-container">
      <table>
        <thead>
          <tr>
            <th>Lanzamiento</th>
            <th>Dado 1</th>
            <th>Dado 2</th>
            <th>Suma</th>
            <th>Ganancia/Pérdida</th>
            <th>Total Acumulado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, index) in results" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ result.die1 }}</td>
            <td>{{ result.die2 }}</td>
            <td>{{ result.sum }}</td>
            <td>{{ result.gain }}</td>
            <td>{{ result.total }}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Total de Juegos</th>
            <th>Juegos Ganados por la Casa</th>
            <th>Porcentaje Ganado por la Casa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ gamesCount }}</td>
            <td>{{ houseWins }}</td>
            <td>{{ houseWinPercentage }}</td>
          </tr>
        </tbody>
      </table>
    </Fieldset>
  </div>
</template>
<script>
import Fieldset from '../components/CardProblem.vue';

export default {
  components: {
    Fieldset
  },
  data() {
    return {
      results: [],
      gamesCount: 10
    };
  },
  computed: {
    houseWins() {
      return this.results.filter(result => result.gain === -2).length;
    },
    playerWins() {
      return this.results.filter(result => result.gain === 5).length;
    },
    totalHouseGain() {
      return (this.houseWins * 2) + (this.playerWins * -5);
    },
    houseWinPercentage() {
      if (this.gamesCount > 0) {
        return (this.houseWins / this.gamesCount * 100).toFixed(2) + '%';
      }
      return '0%';
    }
  },
  methods: {
    simulateGame() {
      this.results = [];
      let total = 0;
      for (let i = 0; i < this.gamesCount; i++) {
        const die1 = this.rollDie();
        const die2 = this.rollDie();
        const sum = die1 + die2;
        const gain = sum === 7 ? 5 : -2;
        total += gain;
        this.results.push({
          die1,
          die2,
          sum,
          gain,
          total
        });
      }
    },
    rollDie() {
      return Math.floor(Math.random() * 6) + 1;
    }
  }
}
</script>
<style scoped>
h1 {
  font-size: 50px;
  color: #fff;
  text-align: center;
  margin-top: 10px;
  text-shadow: 2px 2px 4px #000000;
}
.flex-container {
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  width: 90%;
  margin: 0 auto;
}

fieldset{
  margin-right: -10px;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 1.1);
  margin-left: -10px;
}
.results-container {
  margin: 20px auto;
  width: 80%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
label {
  font-size: 20px;
  color: #1c0c39;
  font-weight: bold;
}
button {
  background-color: #3e0669;
  border: none;
  color: white;
  border-radius: 20px;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
input {
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}
</style>
