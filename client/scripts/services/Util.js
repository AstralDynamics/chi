module.exports = function() {
  return {
    createId: function(id) {
      return CryptoJS.SHA1.apply(CryptoJS, arguments)
      .toString();
    }
  }
}
