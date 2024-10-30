<script>
import Fieldset from '../components/CardProblem.vue';

export default {
  components: {
    Fieldset
  },
  data() {
    return {
      results: [],
      simulationDays: 300,
      eggPrice: 1.2, // Precio por defecto
      chickPrice: 20 // Precio por defecto
    };
  },
  computed: {
    totalIncome() {
      return this.results.reduce((acc, result) => acc + result.dailyIncome, 0);
    }
  },
  methods: {
    simulateFarm() {
      this.results = [];
      for (let day = 1; day <= this.simulationDays; day++) {
        const eggsLaid = this.poissonRandom(2);
        const eggsBroken = Math.round(eggsLaid * 0.2);
        const chicksBorn = Math.round((eggsLaid - eggsBroken) * 0.3);
        let chicksDied = 0;
        for (let i = 0; i < chicksBorn; i++) {
          if (Math.random() < 0.2) {
            chicksDied++;
          }
        }
        const dailyIncome = 
          (eggsLaid - eggsBroken) * this.eggPrice + (chicksBorn - chicksDied) * this.chickPrice;

        this.results.push({
          eggsLaid,
          eggsBroken,
          chicksBorn,
          chicksDied,
          dailyIncome
        });
      }
    },
    poissonRandom(lambda) {
      let L = Math.exp(-lambda);
      let k = 0;
      let p = 1;
      do {
        k++;
        p *= Math.random();
      } while (p > L);
      return k - 1;
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
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
