<template>
  <div>
    <h1>Simulación Demográfica de Bolivia</h1>
    <div class="flex-container">
      <Fieldset legend="Modelo Demográfico para Bolivia 2012-2024">
        <p>
          '¿Cómo se puede determinar la población de Bolivia en base a los resultados del censo 2012?'
        </p>
      </Fieldset>
      <div class="controls">
        <label for="initialPopulation">Población Inicial en 2012:</label>
        <input type="number" v-model="initialPopulation" id="initialPopulation" min="1">
        
        <button @click="simulatePopulationGrowth">Simular Crecimiento Poblacional</button>
      </div>
    </div>
    <Fieldset v-if="results.length" legend="Resultados" class="results-container">
      <table>
        <thead>
          <tr>
            <th>Año</th>
            <th>Nacimientos</th>
            <th>Muertes</th>
            <th>Población</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result in results" :key="result.year">
            <td>{{ result.year }}</td>
            <td>{{ result.births }}</td>
            <td>{{ result.deaths }}</td>
            <td>{{ result.population }}</td>
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
      initialPopulation: 12169055, // Población inicial ajustada
      results: []
    };
  },
  methods: {
    simulatePopulationGrowth() {
      const T = 2024; // Extender hasta 2024
      const TN = 0.02493; // Tasa de nacimientos
      const TM = 0.00743; // Tasa de mortalidad
      let CT = 2012; // Contador inicial de periodos
      let PB = this.initialPopulation; // Población base inicial

      this.results = [];

      // Bucle de simulación
      while (CT <= T) {
        // Cálculo de nacimientos y muertes
        const births = Math.round(PB * TN); // Número de nacimientos
        const deaths = Math.round(PB * TM); // Número de muertes

        // Actualización de la población base
        PB = PB + (births - deaths);

        // Almacenar el resultado
        this.results.push({
          year: CT,
          births: births,
          deaths: deaths,
          population: Math.round(PB) // Población redondeada
        });

        // Incremento del contador de periodos
        CT++;
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
  align-items: start;
  gap: 20px;
  margin-top: 20px;
}
.controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 1.1);
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
label, button {
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
