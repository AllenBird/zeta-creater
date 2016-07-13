module.exports = {
  urls: {
    "/api/now": function() {
      // return new String(Date.now());
      return new Date();
    },
    "/api/login": function() {
      return true;
    },
    "/api/logout": function() {
      return true;
    }
  },
  comps: {
    "random": function() {
      return {
        "No.1": 123,
        "No.2": 234,
        "No.3": 3456
      }
    }
  }
}
