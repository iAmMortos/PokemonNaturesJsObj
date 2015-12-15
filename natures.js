var pkmn_natures = {
  "atk" : {
    "up" : ["hardy", "lonely", "adamant", "naughty", "brave"],
    "down" : ["hardy", "bold", "modest", "calm", "timid"]
  },
  "def" : {
    "up" : ["bold", "docile", "impish", "lax", "relaxed"],
    "down" : ["lonely", "docile", "mild", "gentle", "hasty"]
  },
  "spatk" : {
    "up" : ["modest", "mild", "bashful", "rash", "quiet"],
    "down" : ["adamant", "impish", "bashful", "careful", "jolly"]
  },
  "spdef" : {
    "up" : ["calm", "gentle", "careful", "quirky", "sassy"],
    "down" : ["naughty", "lax", "rash", "quirky", "naive"]
  },
  "spd" : {
    "up" : ["timid", "hasty", "jolly", "naive", "serious"],
    "down" : ["brave", "relaxed", "quiet", "sassy", "serious"]
  },

  "all" : ["hardy", "lonely", "adamant", "naughty", "brave", "bold", "docile", "impish", "lax", "relaxed", "modest", "mild", "bashful", "rash", "quiet", "calm", "gentle", "careful", "quirky", "sassy", "timid", "hasty", "jolly", "naive", "serious"],

  "getEffect" : function(nat){
    var effect = {"up": "", "down": ""};
    var statNames = ["atk", "def", "spatk", "spdef", "spd"]
    statNames.forEach(function(stat){
      if (natures[stat].up.indexOf(nat) !== -1)
        effect.up = stat;
      if (natures[stat].down.indexOf(nat) !== -1)
        effect.down = stat;
    });
    return effect;
  },

  "getNatureStr" : function(nat){
    var statAbbrs = {"atk":"Atk", "def":"Def", "spatk":"SpAtk", "spdef":"SpDef", "spd":"Spd"};
    var str = nat.charAt(0).toUpperCase() + nat.slice(1);
    var effect = natures.getEffect(nat);
    if (effect.up !== effect.down)
      str += " : +" + statAbbrs[effect.up] + " -" + statAbbrs[effect.down];
    return str;
  }
};
