var shipModule = (function () {
  var Ship = function (template) {
    var ship = {
      type: template.type, //'cutter', 'corvette', 'frigate'
      rating: 0, // parent property determined by quality of present pieces
      require: template.require,
      engine: {}, //engine type and pieces
      wing: {}, //wing type and pieces
      body: {} //body paneling and core pieces
    };

    return ship;
  };

  var createNewShip = function (template) {
    return new Ship(template);
  };

  return {
    createNewShip: createNewShip
  };
})();
