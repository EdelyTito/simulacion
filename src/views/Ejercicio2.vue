<template>
  <div>
    <h1>Ejercicio B</h1>
    <div class="flex-container">
      <Fieldset>
        <p>
          Simula el crecimiento de la población desde un año inicial hasta un año final, con parámetros de población inicial, tasa de natalidad y tasa de mortalidad.
        </p>
      </Fieldset>
      <div class="controls">
        <label for="startYear">Año de Inicio:</label>
        <input type="number" v-model="startYear" id="startYear" min="1900" placeholder="Ejemplo: 2020">

        <label for="endYear">Año de Fin:</label>
        <input type="number" v-model="endYear" id="endYear" :min="startYear" placeholder="Ejemplo: 2030">

        <label for="initialPopulation">Población Inicial:</label>
        <input type="number" v-model="initialPopulation" id="initialPopulation" min="1" placeholder="Ejemplo: 1000000">

        <label for="birthRate">Tasa de Natalidad:</label>
        <input type="number" v-model="birthRate" id="birthRate" step="0.0001" min="0" placeholder="Ejemplo: 0.02">

        <label for="deathRate">Tasa de Mortalidad:</label>
        <input type="number" v-model="deathRate" id="deathRate" step="0.0001" min="0" placeholder="Ejemplo: 0.01">

        <button @click="simulatePopulationGrowth" :disabled="!isFormValid">Simular Crecimiento Poblacional</button>
        <button @click="resetResults">Limpiar</button>
      </div>
    </div>
    <Fieldset v-if="results.length" class="results-container">
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
      startYear: null,
      endYear: null,
      initialPopulation: null,
      birthRate: null,
      deathRate: null,
      results: []
    };
  },
  computed: {
    isFormValid() {
      return this.startYear && this.endYear && this.initialPopulation && this.birthRate >= 0 && this.deathRate >= 0;
    }
  },
  methods: {
    simulatePopulationGrowth() {
      this.results = [];
      let currentYear = this.startYear;
      let population = this.initialPopulation;

      this.results.push({
        year: currentYear,
        births: 0, // No hay nacimientos para el año inicial
        deaths: 0, // No hay muertes para el año inicial
        population: population
      });

      currentYear++; // Avanzar al siguiente año para los cálculos

      while (currentYear <= this.endYear) {
        const births = Math.round(population * this.birthRate);
        const deaths = Math.round(population * this.deathRate);
        population = population + births - deaths;

        this.results.push({
          year: currentYear,
          births: births,
          deaths: deaths,
          population: population
        });

        currentYear++;
      }
    },

    resetResults() {
      this.results = [];
      this.startYear = null;
      this.endYear = null;
      this.initialPopulation = null;
      this.birthRate = null;
      this.deathRate = null;
    },
    formatNumber(number) {
      return new Intl.NumberFormat().format(number);
    }
  }
};
</script>

<style scoped>
/* Estilos existentes */
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

fieldset {
  width: 80%;
  text-align: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fff;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 50%;
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

label, button {
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
  font-size: 16px;
  cursor: pointer;
}

input {
  border-radius: 20px;
  text-align: center;
  font-size: 16px;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
