export let waAPI = {
  countryCode: 55,
  number: 92985986599,
  go: function (text) {
    if (this.number != false) {
      window.open(
        `https://api.whatsapp.com/send?phone=${this.countryCode}${
          this.number
        }&text=${window.encodeURIComponent(text)}`
      );
    }
  },
};
