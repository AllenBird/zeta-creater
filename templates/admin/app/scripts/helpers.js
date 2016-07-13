(function() {

  Handlebars.registerHelper("formatDate", function(mills) {
    return moment(mills).format("YYYY-MM-DD HH:mm:ss");
  });

}).call(this);
