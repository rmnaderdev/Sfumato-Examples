import { LitElement, unsafeCSS } from "lit";
import style from "../styles/sfumato.global.css?inline";


export abstract class SfumatoLitElement extends LitElement {
  static baseStyles = [unsafeCSS(style)];
};