var cutterTemplate = {
  type: 'cutter', //'cutter', 'corvette', 'frigate'
  rating: 0, // parent property determined by quality of present pieces
  require: {
    engine: ['A'],
    wing: ['S'],
  },
  engine: {}, //engine type and pieces
  wing: {}, //wing type and pieces
  body: {} //body paneling and core pieces
};