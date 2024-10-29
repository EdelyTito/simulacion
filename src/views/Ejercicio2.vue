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
        <input type="number" v-model="initialPopulation" id="initialPopulation" min="1" placeholder="Ejemplo: 10059856">
        
        <button @click="simulatePopulationGrowth" :disabled="!initialPopulation">Simular Crecimiento Poblacional</button>
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
            <td>{{ formatNumber(result.births) }}</td>
            <td>{{ formatNumber(result.deaths) }}</td>
            <td>{{ formatNumber(result.population) }}</td>
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
      initialPopulation: null, // Inicialmente vacío para permitir la entrada del usuario
      results: []
    };
  },
  methods: {
    simulatePopulationGrowth() {
      let population = Number(this.initialPopulation); // Asegurarse de que sea un número
      const birthRate = 0.02493; // Tasa de natalidad anual
      const deathRate = 0.00743; // Tasa de mortalidad anual
      const startYear = 2012; // Año de inicio
      const endYear = 2023; // Año de fin

      // Reiniciar resultados para cada simulación
      this.results = [{
        year: startYear,
        births: 0, // Sin nacimientos en 2012
        deaths: 0, // Sin muertes en 2012
        population: population // Población inicial ingresada por el usuario
      }];

      // Calcular para los años restantes (2013-2023)
      for (let year = startYear + 1; year <= endYear; year++) {
        const births = Math.round(population * birthRate);
        const deaths = Math.round(population * deathRate);
        population += births - deaths;
        this.results.push({
          year: year,
          births: births,
          deaths: deaths,
          population: Math.round(population)
        });
      }
    },
    formatNumber(number) {
      return new Intl.NumberFormat().format(number);
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
  cursor: pointer;
}
button:disabled {
  background-color: #ccc; /* Deshabilitado */
  cursor: not-allowed;
}
input {
  border-radius: 20px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
}
th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}
</style>
