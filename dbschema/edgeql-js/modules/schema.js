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
const $CardinalityλEnum = {
  One: "One",
  Many: "Many",
}
const Cardinality = $.makeType(_.spec, "e45bdc34-b47a-11ec-a187-db425b516264", _.syntax.literal);

const $OperatorKindλEnum = {
  Infix: "Infix",
  Postfix: "Postfix",
  Prefix: "Prefix",
  Ternary: "Ternary",
}
const OperatorKind = $.makeType(_.spec, "e45d666c-b47a-11ec-9a81-7f6d9f13da8c", _.syntax.literal);

const $ParameterKindλEnum = {
  VariadicParam: "VariadicParam",
  NamedOnlyParam: "NamedOnlyParam",
  PositionalParam: "PositionalParam",
}
const ParameterKind = $.makeType(_.spec, "e45ee654-b47a-11ec-9234-710e30eebe47", _.syntax.literal);

const $TargetDeleteActionλEnum = {
  Restrict: "Restrict",
  DeleteSource: "DeleteSource",
  Allow: "Allow",
  DeferredRestrict: "DeferredRestrict",
}
const TargetDeleteAction = $.makeType(_.spec, "e45ca2a4-b47a-11ec-a8b2-0dc80d0b795a", _.syntax.literal);

const $TypeModifierλEnum = {
  SetOfType: "SetOfType",
  OptionalType: "OptionalType",
  SingletonType: "SingletonType",
}
const TypeModifier = $.makeType(_.spec, "e45fab98-b47a-11ec-bec5-6bac272fde5f", _.syntax.literal);

const $VolatilityλEnum = {
  Immutable: "Immutable",
  Stable: "Stable",
  Volatile: "Volatile",
}
const Volatility = $.makeType(_.spec, "e45e28e0-b47a-11ec-b104-8d0244f12f0e", _.syntax.literal);

const $Object_e460ad90b47a11ecaf6c07879d7ca8d5 = $.makeType(_.spec, "e460ad90-b47a-11ec-af6c-07879d7ca8d5", _.syntax.literal);

const Object_e460ad90b47a11ecaf6c07879d7ca8d5= _.syntax.$PathNode($.$toSet($Object_e460ad90b47a11ecaf6c07879d7ca8d5, $.Cardinality.Many), null, true);

const $AnnotationSubject = $.makeType(_.spec, "e5c4c5a4-b47a-11ec-bffc-27eb4954b19d", _.syntax.literal);

const AnnotationSubject= _.syntax.$PathNode($.$toSet($AnnotationSubject, $.Cardinality.Many), null, true);

const $Alias = $.makeType(_.spec, "e7a6a7ca-b47a-11ec-a490-5b31863e6b1a", _.syntax.literal);

const Alias= _.syntax.$PathNode($.$toSet($Alias, $.Cardinality.Many), null, true);

const $SubclassableObject = $.makeType(_.spec, "e46d8574-b47a-11ec-ba8a-c5452312a3de", _.syntax.literal);

const SubclassableObject= _.syntax.$PathNode($.$toSet($SubclassableObject, $.Cardinality.Many), null, true);

const $InheritingObject = $.makeType(_.spec, "e5e21e4c-b47a-11ec-a042-1dc5604d2a3e", _.syntax.literal);

const InheritingObject= _.syntax.$PathNode($.$toSet($InheritingObject, $.Cardinality.Many), null, true);

const $Annotation = $.makeType(_.spec, "e5aed9ec-b47a-11ec-ac1d-b3cd4b883018", _.syntax.literal);

const Annotation= _.syntax.$PathNode($.$toSet($Annotation, $.Cardinality.Many), null, true);

const $Type = $.makeType(_.spec, "e4823168-b47a-11ec-a1bf-31ea851f7c8c", _.syntax.literal);

const Type= _.syntax.$PathNode($.$toSet($Type, $.Cardinality.Many), null, true);

const $PrimitiveType = $.makeType(_.spec, "e4ee60c2-b47a-11ec-a97d-7572e24117a9", _.syntax.literal);

const PrimitiveType= _.syntax.$PathNode($.$toSet($PrimitiveType, $.Cardinality.Many), null, true);

const $CollectionType = $.makeType(_.spec, "e50e4392-b47a-11ec-b997-d369a5976f0e", _.syntax.literal);

const CollectionType= _.syntax.$PathNode($.$toSet($CollectionType, $.Cardinality.Many), null, true);

const $Array = $.makeType(_.spec, "e5300234-b47a-11ec-beb6-91c1c23fe7d1", _.syntax.literal);

const Array= _.syntax.$PathNode($.$toSet($Array, $.Cardinality.Many), null, true);

const $CallableObject = $.makeType(_.spec, "e629064a-b47a-11ec-8363-d7ebd821e0bc", _.syntax.literal);

const CallableObject= _.syntax.$PathNode($.$toSet($CallableObject, $.Cardinality.Many), null, true);

const $VolatilitySubject = $.makeType(_.spec, "e68245ca-b47a-11ec-bedc-e369b64b81c8", _.syntax.literal);

const VolatilitySubject= _.syntax.$PathNode($.$toSet($VolatilitySubject, $.Cardinality.Many), null, true);

const $Cast = $.makeType(_.spec, "ea24eec6-b47a-11ec-ad3f-2b97ea363676", _.syntax.literal);

const Cast= _.syntax.$PathNode($.$toSet($Cast, $.Cardinality.Many), null, true);

const $ConsistencySubject = $.makeType(_.spec, "e6e31a3a-b47a-11ec-9204-e932b7e0c732", _.syntax.literal);

const ConsistencySubject= _.syntax.$PathNode($.$toSet($ConsistencySubject, $.Cardinality.Many), null, true);

const $Constraint = $.makeType(_.spec, "e69b8602-b47a-11ec-9254-6984bd274d88", _.syntax.literal);

const Constraint= _.syntax.$PathNode($.$toSet($Constraint, $.Cardinality.Many), null, true);

const $Delta = $.makeType(_.spec, "e596413e-b47a-11ec-9c18-5135d36572ab", _.syntax.literal);

const Delta= _.syntax.$PathNode($.$toSet($Delta, $.Cardinality.Many), null, true);

const $Extension = $.makeType(_.spec, "eabed23e-b47a-11ec-b825-b94f9f3c7bc7", _.syntax.literal);

const Extension= _.syntax.$PathNode($.$toSet($Extension, $.Cardinality.Many), null, true);

const $Function = $.makeType(_.spec, "e9ad00a0-b47a-11ec-813e-79a1204bb4cc", _.syntax.literal);

const Function= _.syntax.$PathNode($.$toSet($Function, $.Cardinality.Many), null, true);

const $Global = $.makeType(_.spec, "ea5aad7c-b47a-11ec-84f5-672fef36280a", _.syntax.literal);

const Global= _.syntax.$PathNode($.$toSet($Global, $.Cardinality.Many), null, true);

const $Index = $.makeType(_.spec, "e70bf68a-b47a-11ec-89a7-ef525af9934e", _.syntax.literal);

const Index= _.syntax.$PathNode($.$toSet($Index, $.Cardinality.Many), null, true);

const $Pointer = $.makeType(_.spec, "e74ffd30-b47a-11ec-b2af-db3a95a3223a", _.syntax.literal);

const Pointer= _.syntax.$PathNode($.$toSet($Pointer, $.Cardinality.Many), null, true);

const $Source = $.makeType(_.spec, "e72dcb52-b47a-11ec-abe8-f1db55b6da07", _.syntax.literal);

const Source= _.syntax.$PathNode($.$toSet($Source, $.Cardinality.Many), null, true);

const $Link = $.makeType(_.spec, "e89e6230-b47a-11ec-99a7-0df3083010f3", _.syntax.literal);

const Link= _.syntax.$PathNode($.$toSet($Link, $.Cardinality.Many), null, true);

const $Migration = $.makeType(_.spec, "ea8dd954-b47a-11ec-a199-f902adb24567", _.syntax.literal);

const Migration= _.syntax.$PathNode($.$toSet($Migration, $.Cardinality.Many), null, true);

const $Module = $.makeType(_.spec, "e4dbf644-b47a-11ec-9885-414eb6208971", _.syntax.literal);

const Module= _.syntax.$PathNode($.$toSet($Module, $.Cardinality.Many), null, true);

const $ObjectType = $.makeType(_.spec, "e8285482-b47a-11ec-b36d-a5d1502f44e3", _.syntax.literal);

const ObjectType= _.syntax.$PathNode($.$toSet($ObjectType, $.Cardinality.Many), null, true);

const $Operator = $.makeType(_.spec, "e9e7481e-b47a-11ec-b4f4-fbe6364cd294", _.syntax.literal);

const Operator= _.syntax.$PathNode($.$toSet($Operator, $.Cardinality.Many), null, true);

const $Parameter = $.makeType(_.spec, "e60a4944-b47a-11ec-9c77-671808ddc722", _.syntax.literal);

const Parameter= _.syntax.$PathNode($.$toSet($Parameter, $.Cardinality.Many), null, true);

const $Property = $.makeType(_.spec, "e908f21c-b47a-11ec-bb9b-fd67f0dd59ce", _.syntax.literal);

const Property= _.syntax.$PathNode($.$toSet($Property, $.Cardinality.Many), null, true);

const $PseudoType = $.makeType(_.spec, "e4969950-b47a-11ec-ad15-3126503bc770", _.syntax.literal);

const PseudoType= _.syntax.$PathNode($.$toSet($PseudoType, $.Cardinality.Many), null, true);

const $ScalarType = $.makeType(_.spec, "e7ce5d9c-b47a-11ec-830c-cdda3af1c371", _.syntax.literal);

const ScalarType= _.syntax.$PathNode($.$toSet($ScalarType, $.Cardinality.Many), null, true);

const $Tuple = $.makeType(_.spec, "e569233e-b47a-11ec-8969-99c19a2253c5", _.syntax.literal);

const Tuple= _.syntax.$PathNode($.$toSet($Tuple, $.Cardinality.Many), null, true);

const $TupleElement = $.makeType(_.spec, "e5580e8c-b47a-11ec-b779-a7bfef086c69", _.syntax.literal);

const TupleElement= _.syntax.$PathNode($.$toSet($TupleElement, $.Cardinality.Many), null, true);



Object.assign(exports, { $CardinalityλEnum: $CardinalityλEnum, Cardinality: Cardinality, $OperatorKindλEnum: $OperatorKindλEnum, OperatorKind: OperatorKind, $ParameterKindλEnum: $ParameterKindλEnum, ParameterKind: ParameterKind, $TargetDeleteActionλEnum: $TargetDeleteActionλEnum, TargetDeleteAction: TargetDeleteAction, $TypeModifierλEnum: $TypeModifierλEnum, TypeModifier: TypeModifier, $VolatilityλEnum: $VolatilityλEnum, Volatility: Volatility, $Object_e460ad90b47a11ecaf6c07879d7ca8d5: $Object_e460ad90b47a11ecaf6c07879d7ca8d5, Object_e460ad90b47a11ecaf6c07879d7ca8d5: Object_e460ad90b47a11ecaf6c07879d7ca8d5, $AnnotationSubject: $AnnotationSubject, AnnotationSubject: AnnotationSubject, $Alias: $Alias, Alias: Alias, $SubclassableObject: $SubclassableObject, SubclassableObject: SubclassableObject, $InheritingObject: $InheritingObject, InheritingObject: InheritingObject, $Annotation: $Annotation, Annotation: Annotation, $Type: $Type, Type: Type, $PrimitiveType: $PrimitiveType, PrimitiveType: PrimitiveType, $CollectionType: $CollectionType, CollectionType: CollectionType, $Array: $Array, Array: Array, $CallableObject: $CallableObject, CallableObject: CallableObject, $VolatilitySubject: $VolatilitySubject, VolatilitySubject: VolatilitySubject, $Cast: $Cast, Cast: Cast, $ConsistencySubject: $ConsistencySubject, ConsistencySubject: ConsistencySubject, $Constraint: $Constraint, Constraint: Constraint, $Delta: $Delta, Delta: Delta, $Extension: $Extension, Extension: Extension, $Function: $Function, Function: Function, $Global: $Global, Global: Global, $Index: $Index, Index: Index, $Pointer: $Pointer, Pointer: Pointer, $Source: $Source, Source: Source, $Link: $Link, Link: Link, $Migration: $Migration, Migration: Migration, $Module: $Module, Module: Module, $ObjectType: $ObjectType, ObjectType: ObjectType, $Operator: $Operator, Operator: Operator, $Parameter: $Parameter, Parameter: Parameter, $Property: $Property, Property: Property, $PseudoType: $PseudoType, PseudoType: PseudoType, $ScalarType: $ScalarType, ScalarType: ScalarType, $Tuple: $Tuple, Tuple: Tuple, $TupleElement: $TupleElement, TupleElement: TupleElement });

const __defaultExports = {
  "Cardinality": Cardinality,
  "OperatorKind": OperatorKind,
  "ParameterKind": ParameterKind,
  "TargetDeleteAction": TargetDeleteAction,
  "TypeModifier": TypeModifier,
  "Volatility": Volatility,
  "Object": Object_e460ad90b47a11ecaf6c07879d7ca8d5,
  "AnnotationSubject": AnnotationSubject,
  "Alias": Alias,
  "SubclassableObject": SubclassableObject,
  "InheritingObject": InheritingObject,
  "Annotation": Annotation,
  "Type": Type,
  "PrimitiveType": PrimitiveType,
  "CollectionType": CollectionType,
  "Array": Array,
  "CallableObject": CallableObject,
  "VolatilitySubject": VolatilitySubject,
  "Cast": Cast,
  "ConsistencySubject": ConsistencySubject,
  "Constraint": Constraint,
  "Delta": Delta,
  "Extension": Extension,
  "Function": Function,
  "Global": Global,
  "Index": Index,
  "Pointer": Pointer,
  "Source": Source,
  "Link": Link,
  "Migration": Migration,
  "Module": Module,
  "ObjectType": ObjectType,
  "Operator": Operator,
  "Parameter": Parameter,
  "Property": Property,
  "PseudoType": PseudoType,
  "ScalarType": ScalarType,
  "Tuple": Tuple,
  "TupleElement": TupleElement
};
exports.default = __defaultExports;
