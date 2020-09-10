new Vue({
  el: "#app",
  data: {
    textInput: ''
  },
  computed: {
    identicon: function () {
      return jdenticon.toSvg(this.textInput, 100);
    }
  },
  methods: {
    onInput: function (event) {
      this.textInput = event.target.value;
    }
  },
  template: `
    <div>
      <h3>Identicon Generator</h3>
      <div>
        Input:
        <input v-on:input="onInput" />
      </div>
      <div>
        Output:
        <div v-html="identicon"></div>
      </div>
    </div>
    `

});


