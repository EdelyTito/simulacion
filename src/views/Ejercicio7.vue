<template>
  <div>
    <h1>Ejercicio E</h1>
    <div class="flex-container">
      <Fieldset>
        <p>
          Para el problema de la llegada de clientes que compran artículos realizar simulaciones y determinar la ganancia neta promedio de la tienda por día y la cantidad promedio de ventas por día.
        </p>
      </Fieldset>
      <div class="controls">
        <label for="simulationDays">Número de simulaciones:</label>
        <input type="number" v-model="simulationCount" id="simulationDays" min="1">

        <label for="maxHours">Número máximo de horas:</label>
        <input type="number" v-model="maxHours" id="maxHours" min="1">

        <label for="unitCost">Costo unitario del artículo:</label>
        <input type="number" v-model="unitCost" id="unitCost" min="0">

        <label for="unitPrice">Precio de venta unitario:</label>
        <input type="number" v-model="unitPrice" id="unitPrice" min="0">

        <label for="fixedCost">Costo fijo unitario:</label>
        <input type="number" v-model="fixedCost" id="fixedCost" min="0">

        <button @click="simulateStore">Simular Tienda</button>
      </div>
    </div>
    <Fieldset v-if="results.length" class="results-container">
      <table>
        <thead>
          <tr>
            <th>Simulación</th>
            <th>Personas Entraron</th>
            <th>Personas Compraron</th>
            <th>Artículos Vendidos</th>
            <th>Ganancia Neta</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, index) in results" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ result.totalCustomers }}</td>
            <td>{{ result.buyingCustomers }}</td>
            <td>{{ result.totalItemsSold }}</td>
            <td>{{ result.netGain }}</td>
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
      simulationCount: 1,
      maxHours: 10,  // Valor predeterminado
      unitCost: 50,  // Valor predeterminado
      unitPrice: 75, // Valor predeterminado
      fixedCost: 300 // Valor predeterminado
    };
  },
  methods: {
    simulateStore() {
      this.results = [];

      for (let sim = 0; sim < this.simulationCount; sim++) {
        let totalCustomers = 0;
        let buyingCustomers = 0;
        let totalItemsSold = 0;

        for (let hour = 0; hour < this.maxHours; hour++) {
          let customers = Math.floor(Math.random() * 5); // 2 ± 2
          totalCustomers += customers;

          for (let i = 0; i < customers; i++) {
            let randomValue = Math.random();

            if (randomValue <= 0.2) {
              // No items bought
            } else {
              buyingCustomers++;
              if (randomValue <= 0.5) {
                totalItemsSold += 1;
              } else if (randomValue <= 0.9) {
                totalItemsSold += 2;
              } else {
                totalItemsSold += 3;
              }
            }
          }
        }

        let totalRevenue = totalItemsSold * this.unitPrice;
        let totalCost = totalItemsSold * this.unitCost + this.fixedCost;
        let netGain = totalRevenue - totalCost;

        this.results.push({
          totalCustomers,
          buyingCustomers,
          totalItemsSold,
          netGain
        });
      }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
}

fieldset {
  width: 80%; /* Asegura que el Fieldset ocupe el 80% del ancho */
  text-align: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

Fieldset p {
  width: 100%;
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

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
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
  margin: 20px 0;
}
</style>
