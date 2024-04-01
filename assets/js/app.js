new Vue({
    el: '#app',
    data: {
      expression: '',
      buttons: ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '/','%']
    },
    methods: {
      appendToExpression(button) {
        this.expression += button;
      },
      calculateResult() {
        try {
          this.expression = eval(this.expression).toString();
        } catch (error) {
          this.expression = 'Error';
        }
      },
      clearExpression() {
        this.expression = '';
      }
    }
});