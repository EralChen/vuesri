import{G as t}from"./chunk-x2EARIDc.js";import{hydratedAdapter as r}from"./chunk-MCxy10OK.js";import"./chunk-8J0p1hu6.js";import"./chunk-EUQwHdIv.js";function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function g(e){return t.extendedSpatialReferenceInfo(e)}function h(e,n){return t.clip(r,i(e),e,n)}function w(e,n){return t.cut(r,i(e),e,n)}function R(e,n){return t.contains(r,i(e),e,n)}function x(e,n){return t.crosses(r,i(e),e,n)}function y(e,n,a){return t.distance(r,i(e),e,n,a)}function S(e,n){return t.equals(r,i(e),e,n)}function A(e,n){return t.intersects(r,i(e),e,n)}function D(e,n){return t.touches(r,i(e),e,n)}function L(e,n){return t.within(r,i(e),e,n)}function T(e,n){return t.disjoint(r,i(e),e,n)}function V(e,n){return t.overlaps(r,i(e),e,n)}function v(e,n,a){return t.relate(r,i(e),e,n,a)}function z(e){return t.isSimple(r,i(e),e)}function H(e){return t.simplify(r,i(e),e)}function I(e,n=!1){return t.convexHull(r,i(e),e,n)}function J(e,n){return t.difference(r,i(e),e,n)}function N(e,n){return t.symmetricDifference(r,i(e),e,n)}function O(e,n){return t.intersect(r,i(e),e,n)}function b(e,n=null){return t.union(r,i(e),e,n)}function j(e,n,a,s,c,u){return t.offset(r,i(e),e,n,a,s,c,u)}function q(e,n,a,s=!1){return t.buffer(r,i(e),e,n,a,s)}function B(e,n,a,s,c,u){return t.geodesicBuffer(r,i(e),e,n,a,s,c,u)}function C(e,n,a=!0){return t.nearestCoordinate(r,i(e),e,n,a)}function E(e,n){return t.nearestVertex(r,i(e),e,n)}function P(e,n,a,s){return t.nearestVertices(r,i(e),e,n,a,s)}function f(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent?.center??null:null}function G(e,n,a){if(e==null)throw new o;const s=e.spatialReference;if((a=a??f(e))==null)throw new o;const c=e.constructor.fromJSON(t.rotate(e,n,a));return c.spatialReference=s,c}function $(e,n){if(e==null)throw new o;const a=e.spatialReference;if((n=n??f(e))==null)throw new o;const s=e.constructor.fromJSON(t.flipHorizontal(e,n));return s.spatialReference=a,s}function k(e,n){if(e==null)throw new o;const a=e.spatialReference;if((n=n??f(e))==null)throw new o;const s=e.constructor.fromJSON(t.flipVertical(e,n));return s.spatialReference=a,s}function F(e,n,a,s){return t.generalize(r,i(e),e,n,a,s)}function K(e,n,a){return t.densify(r,i(e),e,n,a)}function M(e,n,a,s=0){return t.geodesicDensify(r,i(e),e,n,a,s)}function Q(e,n){return t.planarArea(r,i(e),e,n)}function U(e,n){return t.planarLength(r,i(e),e,n)}function W(e,n,a){return t.geodesicArea(r,i(e),e,n,a)}function X(e,n,a){return t.geodesicLength(r,i(e),e,n,a)}function Y(e,n){return t.intersectLinesToPoints(r,i(e),e,n)}function Z(e,n){t.changeDefaultSpatialReferenceTolerance(e,n)}function _(e){t.clearDefaultSpatialReferenceTolerance(e)}class o extends Error{constructor(){super("Illegal Argument Exception")}}export{q as buffer,Z as changeDefaultSpatialReferenceTolerance,_ as clearDefaultSpatialReferenceTolerance,h as clip,R as contains,I as convexHull,x as crosses,w as cut,K as densify,J as difference,T as disjoint,y as distance,S as equals,g as extendedSpatialReferenceInfo,$ as flipHorizontal,k as flipVertical,F as generalize,W as geodesicArea,B as geodesicBuffer,M as geodesicDensify,X as geodesicLength,O as intersect,Y as intersectLinesToPoints,A as intersects,z as isSimple,C as nearestCoordinate,E as nearestVertex,P as nearestVertices,j as offset,V as overlaps,Q as planarArea,U as planarLength,v as relate,G as rotate,H as simplify,N as symmetricDifference,D as touches,b as union,L as within};
