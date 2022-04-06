"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
const { $ } = require("edgedb");
const _ = __importStar(require("../imports"));
const $Account = $.makeType(_.spec, "2850b072-b539-11ec-9cf8-353617581602", _.syntax.literal);

const Account= _.syntax.$PathNode($.$toSet($Account, $.Cardinality.Many), null, true);

const $Content = $.makeType(_.spec, "2853f1d8-b539-11ec-872f-2956c0cfdb12", _.syntax.literal);

const Content= _.syntax.$PathNode($.$toSet($Content, $.Cardinality.Many), null, true);

const $Movie = $.makeType(_.spec, "2855d34a-b539-11ec-9b37-73d65a203cea", _.syntax.literal);

const Movie= _.syntax.$PathNode($.$toSet($Movie, $.Cardinality.Many), null, true);

const $Person = $.makeType(_.spec, "2858ab9c-b539-11ec-99a1-d1b57f143293", _.syntax.literal);

const Person= _.syntax.$PathNode($.$toSet($Person, $.Cardinality.Many), null, true);

const $Season = $.makeType(_.spec, "285d7f46-b539-11ec-a1c1-bd73b70d3649", _.syntax.literal);

const Season= _.syntax.$PathNode($.$toSet($Season, $.Cardinality.Many), null, true);

const $Show = $.makeType(_.spec, "285761b0-b539-11ec-8a13-6d388f6b72a7", _.syntax.literal);

const Show= _.syntax.$PathNode($.$toSet($Show, $.Cardinality.Many), null, true);



Object.assign(exports, { $Account: $Account, Account: Account, $Content: $Content, Content: Content, $Movie: $Movie, Movie: Movie, $Person: $Person, Person: Person, $Season: $Season, Season: Season, $Show: $Show, Show: Show });

const __defaultExports = {
  "Account": Account,
  "Content": Content,
  "Movie": Movie,
  "Person": Person,
  "Season": Season,
  "Show": Show
};
exports.default = __defaultExports;
