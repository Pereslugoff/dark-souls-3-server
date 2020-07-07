const { gql } = require('apollo-server');

const typeDefs = gql`
  type Weapon {
    name: String
    weapon_type: String
    weight: Float
    bleed: Int
    poison: Int
    frost: Int
    strength_req: Int
    dex_req: Int
    intelligence_req: Int
    faith_req: Int
    physical_def: Int
    magic_def: Int
    fire_def: Int
    lightning_def: Int
    dark_def: Int
    infusable: Boolean
    dual_wield: Boolean
    id: String
    thumbnail: String
  }

  type Query {
    weapons: [Weapon]
  }
`;

module.exports = typeDefs;