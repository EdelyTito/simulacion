<template>
  <div>
    <h1>Ejercicio 3</h1>
    <div class="flex-container">
      <Fieldset>
        <p>
          Max Z = 2X1 + 3X2 - X3<br>
          Sujeto a:<br>
          X1 + X2 &gt;= 2<br>
          1 &lt;= X3 &lt;= 2<br>
          X2 &gt;= 0 (Entero)<br>
          0 &lt;= X1 &lt;= 10
        </p>
      </Fieldset>
      <div class="controls">
        <label for="iterations">Iteraciones:</label>
        <input type="number" v-model="NUM_ITERACIONES" id="iterations" min="1" />
        <button @click="simulateMonteCarlo">Simular</button>
      </div>
    </div>
    <Fieldset v-if="results.length" class="results-container">
      <table>
        <thead>
          <tr>
            <th>Mejor Z Encontrado</th>
            <th>Iteración de Mejor Solución</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ Z }}</td>
            <td>{{ iteracion_mejor_solucion + 1 }}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Iteración</th>
            <th>X1</th>
            <th>X2</th>
            <th>X3</th>
            <th>Z (Función Objetivo)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, index) in results" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ result.x1 }}</td>
            <td>{{ result.x2 }}</td>
            <td>{{ result.x3 }}</td>
            <td>{{ result.z }}</td>
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
      NUM_ITERACIONES: 100000, // Cambiado a 100000 por defecto
      results: [],
      mejor_solucion: null,
      Z: -Infinity,
      iteracion_mejor_solucion: null,
    };
  },
  
  methods: {
    generar_rnd(min, max) {
      return Math.random() * (max - min) + min;
    },
    
    simulateMonteCarlo() {
      this.mejor_solucion = null;
      this.Z = -Infinity;
      this.iteracion_mejor_solucion = null;
      this.results = [];

      for (let i = 0; i < this.NUM_ITERACIONES; i++) {
        console.log(`Iteración: ${i + 1}`); // Log para rastrear el progreso

        const x1 = this.generar_rnd(0, 10); 
        const x2 = Math.floor(this.generar_rnd(0, 100)); 
        const x3 = this.generar_rnd(1, 2); 

        const isValid = (x1 + x2) <= 20;
        const z = isValid ? (2 * x1 + 3 * x2 - x3) : null;

        if (isValid && z > this.Z) {
          this.Z = z;
          this.mejor_solucion = { x1, x2, x3, z };
          this.iteracion_mejor_solucion = i;
        }

        // Almacenar el resultado para cada iteración, incluyendo inválidos
        this.results.push({ x1, x2, x3, z: isValid ? z : 'Invalido' });
      }
    },
  },
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
  display: inline-block;
  font-size: 16px;
}
th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}
</style>
