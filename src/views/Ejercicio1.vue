<template>
  <div>
    <h1>Ejercicio A</h1>
    <div class="flex-container">
      <div class="enunciado">
        <Fieldset>
          <p>
            Simular el problema de depósito a plazo fijo para un capital de 1000, ¿en cuantos años se duplicaría el capital?
          </p>
        </Fieldset>
      </div>
      <div class="controls">
        <label for="capitalInicial">Capital Inicial ($):</label>
        <input type="number" v-model="capitalInicial" id="capitalInicial" min="1">
        <label for="tiempoDeposito">Tiempo en años:</label>
        <input type="number" v-model="tiempoDeposito" id="tiempoDeposito" min="1">
        <button @click="simulateInvestment">Simular Depósito</button>
      </div>
    </div>
    <Fieldset v-if="results.length" class="results-container">
      <table>
        <thead>
          <tr>
            <th>Año</th>
            <th>Interés ($/año)</th>
            <th>Capital ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, index) in results" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ result.interest }}</td>
            <td>{{ result.capital }}</td>
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
      capitalInicial: 1000,
      tiempoDeposito: 10,
      results: []
    };
  },
  methods: {
    simulateInvestment() {
      this.results = [];
      let capital = this.capitalInicial;
      const interestRate = 0.035; // 3.5% tasa de interés anual

      for (let year = 1; year <= this.tiempoDeposito; year++) {
        let interest = capital * interestRate;
        capital += interest;
        this.results.push({
          interest: interest.toFixed(2),
          capital: capital.toFixed(2)
        });
      }
    }
  }
};
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
}

fieldset{
  width: 80%; /* Asegura que el Fieldset ocupe el 80% del ancho */
  text-align: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

Fieldset p {
  font-size: 20px;
  color: #333;
  margin: 0;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fff;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 50%; /* Ajuste el ancho del cuadro de ingreso */
  text-align: center;
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
  background-color: #3e0669; /* Purple */
  border: none;
  color: white;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 16px;
}

input {
  border-radius: 20px;
  text-align: center;
  font-size: 16px;
  padding: 5px 10px;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
  background-color: #f8f8f8;
}

th {
  background-color: #e9ecef;
}
</style>
