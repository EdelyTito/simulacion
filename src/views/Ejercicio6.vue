<template>
  <div>
    <h1>Ejercicio G</h1>
    <div class="flex-container">
      <Fieldset>
        <p>
          Para el problema de la agencia de azúcar, realizar simulaciones y determinar los promedios de las variables endógenas definidas en el diagrama de flujo y a partir de esto i) Determinar cual seria la ganancia neta promedio de la agencia y cual su demanda insatisfecha promedio; ii) determinar cuál debería ser la capacidad de la bodega en función a la máxima ganancia neta.
        </p>
      </Fieldset>
      <div class="controls">
        <label for="simulationDays">Número de simulaciones:</label>
        <input type="number" v-model="simulationDays" id="simulationDays" min="1">

        <label for="maxDays">Número máximo de días:</label>
        <input type="number" v-model="maxDays" id="maxDays" min="1">

        <label for="warehouseCapacity">Capacidad de la bodega:</label>
        <input type="number" v-model="warehouseCapacity" id="warehouseCapacity" min="1">

        <label for="orderingCost">Costo de orden:</label>
        <input type="number" v-model="orderingCost" id="orderingCost" min="0">

        <label for="unitMaintenanceCost">Costo unitario de mantenimiento:</label>
        <input type="number" v-model="unitMaintenanceCost" id="unitMaintenanceCost" min="0">

        <label for="unitAcquisitionCost">Costo unitario de adquisición:</label>
        <input type="number" v-model="unitAcquisitionCost" id="unitAcquisitionCost" min="0">

        <label for="unitSellingPrice">Precio de venta unitario:</label>
        <input type="number" v-model="unitSellingPrice" id="unitSellingPrice" min="0">

        <button @click="simulateStore">Simular Tienda</button>
      </div>
    </div>
    <Fieldset v-if="results.length" class="results-container">
      <table>
        <thead>
          <tr>
            <th>Día</th>
            <th>Inventario Inicial</th>
            <th>Demanda</th>
            <th>Inventario Final</th>
            <th>Demanda Insatisfecha</th>
            <th>Costo de Ordenar</th>
            <th>Costo de Inventario</th>
            <th>Ganancia Neta</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, index) in results" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ result.initialInventory }}</td>
            <td>{{ result.demand }}</td>
            <td>{{ result.finalInventory }}</td>
            <td>{{ result.unmetDemand }}</td>
            <td>{{ result.orderingCost }}</td>
            <td>{{ result.inventoryCost }}</td>
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
      simulationDays: 1, // Valor por defecto para el número de simulaciones
      maxDays: 27, // Valor por defecto para los días
      warehouseCapacity: 700, // Capacidad de la bodega
      orderingCost: 100, // Costo de orden
      unitMaintenanceCost: 0.1, // Costo unitario de mantenimiento (porcentaje)
      unitAcquisitionCost: 3.5, // Costo unitario de adquisición
      unitSellingPrice: 5 // Precio de venta unitario
    };
  },
  methods: {
    simulateStore() {
      this.results = [];

      for (let sim = 0; sim < this.simulationDays; sim++) {
        let currentInventory = this.warehouseCapacity; // Inventario inicial

        for (let day = 1; day <= this.maxDays; day++) {
          let demand = Math.round(Math.random() * 100);
          let initialInventory = currentInventory;
          let unmetDemand = 0;
          let orderingCost = 0;
          let inventoryCost = Math.round(currentInventory * this.unitMaintenanceCost);
          let netGain = 0;

          // Costo de ordenar cada 7 días o si el inventario es cero
          if (day % 7 === 0 || currentInventory === 0) {
            orderingCost = this.orderingCost;
          }

          // Si la demanda excede el inventario
          if (demand > currentInventory) {
            unmetDemand = demand - currentInventory;
            currentInventory = 0; // Todo el inventario se vende
          } else {
            currentInventory -= demand; // Disminuir el inventario por la demanda
          }

          // Calcular ganancia neta
          netGain = (demand - unmetDemand) * this.unitSellingPrice - demand * this.unitAcquisitionCost - orderingCost - inventoryCost;

          // Agregar resultados a la lista
          this.results.push({
            initialInventory,
            demand,
            finalInventory: currentInventory,
            unmetDemand,
            orderingCost,
            inventoryCost,
            netGain
          });
        }
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
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  width: 90%;
  margin: 0 auto;
}

fieldset {
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

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
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
  display: inline-block;
  font-size: 16px;
}
</style>
