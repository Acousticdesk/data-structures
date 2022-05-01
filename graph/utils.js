class Utils {
  previousId = 0;

  generateUniqueId() {
    return ++this.previousId;
  }
}

module.exports = { Utils };
