<template>
  <div>
    <h1>Simulación Demográfica de Bolivia</h1>
    <div class="flex-container">
      <!--<Fieldset legend="Modelo Demográfico para Bolivia 2012-2023">-->
        <p>
          ¿Cómo se puede determinar la población de Bolivia en base a los resultados del censo 2012?
        </p>
      <!--</Fieldset>-->
      <div class="controls">
        <label for="initialPopulation">Población Inicial:</label>
        <input type="number" v-model="initialPopulation" id="initialPopulation" min="1" placeholder="Ejemplo: 10059856">
        
        <button @click="simulatePopulationGrowth" :disabled="!initialPopulation">Simular Crecimiento Poblacional</button>
      </div>
    </div>
    <!--<Fieldset v-if="results.length" legend="Resultados" class="results-container">-->
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
    <!--</Fieldset>-->
  </div>
</template>

<script>
//import Fieldset from '../components/CardProblem.vue';

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
      let CT = 2013; // Año inicial
      const T = 2024; // Año final (ajustado a 2024)
      const TN = 0.02493; // Tasa de nacimientos
      const TM = 0.00743; // Tasa de mortalidad
      let PB = Number(this.initialPopulation); // Población inicial ingresada por el usuario

      // Reiniciar resultados para cada simulación
      this.results = [];

      // Ciclo para calcular la población desde 2013 hasta 2024
      while (CT <= T) {
        let NAC = Math.round(PB * TN); // Cálculo de nacimientos
        let MUE = Math.round(PB * TM); // Cálculo de muertes

        // Agregar el resultado para el año actual
        this.results.push({
          year: CT,
          births: NAC,
          deaths: MUE,
          population: Math.round(PB) // Población redondeada
        });

        // Actualización de la población
        PB = PB + NAC - MUE;

        // Incrementar el año
        CT++;
      }

      // Imprimir el valor final de PB en la consola
      console.log(`Valor final de PB: ${PB}`);
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
