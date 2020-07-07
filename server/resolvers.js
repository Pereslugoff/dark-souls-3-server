const getWeapons = require('./services/mungenmonkey-api');
const getThumbnail = require('./services/fextralife-thumbnail-api');

const resolvers = {
  Query: {
    weapons: async () => {
      const { ds3_weapons } = await getWeapons();
      const weapons_list = [];
      for (let weapon in ds3_weapons) {
        weapons_list.push(ds3_weapons[weapon]);
      }
      return weapons_list;
    }
  },

  Weapon: {
    name: weapon => weapon.name,
    weapon_type: weapon => weapon.weapon_type,
    weight: weapon => weapon.weight,
    bleed: weapon => weapon.bleed,
    poison: weapon => weapon.poison,
    frost: weapon => weapon.frost,
    strength_req: weapon => weapon.strength_req,
    dex_req: weapon => weapon.dex_req,
    intelligence_req: weapon => weapon.intelligence_req,
    faith_req: weapon => weapon.faith_req,
    physical_def: weapon => weapon.physical_def,
    magic_def: weapon => weapon.magic_def,
    fire_def: weapon => weapon.fire_def,
    lightning_def: weapon => weapon.lightning_def,
    dark_def: weapon => weapon.dark_def,
    infusable: weapon => weapon.infusable,
    dual_wield: weapon => weapon.dual_wield,
    id: weapon => weapon.id,
    thumbnail: weapon => {
      const name_snake_case = weapon
        .name
        .split(' ')
        .map(word => word.toLowerCase().replace('\'', ''))
        .join('_');
      const thumbnail_url = `https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/${name_snake_case}.png`
      return thumbnail_url;
    }
  }
};

module.exports = resolvers