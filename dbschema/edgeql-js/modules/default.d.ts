import { $ } from "edgedb";
import * as _ from "../imports";
import type * as _std from "./std";
export declare type $AccountλShape = $.typeutil.flatten<_std.$Object_e3d474f6b47a11ec86ef4b7e0fb7045bλShape & {
  "username": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "watchlist": $.LinkDesc<$Content, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $Account = $.ObjectType<"default::Account", $AccountλShape, null>;
declare const $Account: $Account

declare const Account: $.$expr_PathNode<$.TypeSet<$Account, $.Cardinality.Many>, null, true> 

export declare type $ContentλShape = $.typeutil.flatten<_std.$Object_e3d474f6b47a11ec86ef4b7e0fb7045bλShape & {
  "title": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "actors": $.LinkDesc<$Person, $.Cardinality.Many, {
    "@character_name": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne>;
  }, false, false, false, false>;
  "<watchlist[is Account]": $.LinkDesc<$Account, $.Cardinality.Many, {}, false, false,  false, false>;
  "<filmography[is Person]": $.LinkDesc<$Person, $.Cardinality.Many, {}, false, false,  false, false>;
  "<filmography": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<watchlist": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $Content = $.ObjectType<"default::Content", $ContentλShape, null>;
declare const $Content: $Content

declare const Content: $.$expr_PathNode<$.TypeSet<$Content, $.Cardinality.Many>, null, true> 

export declare type $MovieλShape = $.typeutil.flatten<$ContentλShape & {
  "release_year": $.PropertyDesc<_std.$int32, $.Cardinality.AtMostOne, false, false, false, false>;
}>;
declare type $Movie = $.ObjectType<"default::Movie", $MovieλShape, null>;
declare const $Movie: $Movie

declare const Movie: $.$expr_PathNode<$.TypeSet<$Movie, $.Cardinality.Many>, null, true> 

export declare type $PersonλShape = $.typeutil.flatten<_std.$Object_e3d474f6b47a11ec86ef4b7e0fb7045bλShape & {
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "filmography": $.LinkDesc<$Content, $.Cardinality.Many, {}, false, true,  false, false>;
  "<actors[is Content]": $.LinkDesc<$Content, $.Cardinality.Many, {}, false, false,  false, false>;
  "<actors[is Movie]": $.LinkDesc<$Movie, $.Cardinality.Many, {}, false, false,  false, false>;
  "<actors[is Show]": $.LinkDesc<$Show, $.Cardinality.Many, {}, false, false,  false, false>;
  "<actors": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $Person = $.ObjectType<"default::Person", $PersonλShape, null>;
declare const $Person: $Person

declare const Person: $.$expr_PathNode<$.TypeSet<$Person, $.Cardinality.Many>, null, true> 

export declare type $SeasonλShape = $.typeutil.flatten<_std.$Object_e3d474f6b47a11ec86ef4b7e0fb7045bλShape & {
  "show": $.LinkDesc<$Show, $.Cardinality.One, {}, false, false,  false, false>;
  "number": $.PropertyDesc<_std.$int32, $.Cardinality.One, false, false, false, false>;
}>;
declare type $Season = $.ObjectType<"default::Season", $SeasonλShape, null>;
declare const $Season: $Season

declare const Season: $.$expr_PathNode<$.TypeSet<$Season, $.Cardinality.Many>, null, true> 

export declare type $ShowλShape = $.typeutil.flatten<$ContentλShape & {
  "num_seasons": $.PropertyDesc<_std.$int64, $.Cardinality.One, false, true, false, false>;
  "<show[is Season]": $.LinkDesc<$Season, $.Cardinality.Many, {}, false, false,  false, false>;
  "<show": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
declare type $Show = $.ObjectType<"default::Show", $ShowλShape, null>;
declare const $Show: $Show

declare const Show: $.$expr_PathNode<$.TypeSet<$Show, $.Cardinality.Many>, null, true> 



export { $Account, Account, $Content, Content, $Movie, Movie, $Person, Person, $Season, Season, $Show, Show };

declare type __defaultExports = {
  "Account": typeof Account;
  "Content": typeof Content;
  "Movie": typeof Movie;
  "Person": typeof Person;
  "Season": typeof Season;
  "Show": typeof Show
};
declare const __defaultExports: __defaultExports;
export default __defaultExports;
