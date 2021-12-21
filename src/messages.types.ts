import { notificationDispatch } from './notification/index';
import { windowRedirect, windowReload } from './window/index';
import { contextLanguage, contextEnvironment, contextLocale, contextCurrency } from './context/index';
import { uiComponentSectionRenderer } from './ui/componentSection/index';
import { locationUpdateHeight } from './location/index';


/**
 * Contains all shopware send types.
 * @internal
 */
export type ShopwareMessageTypes = {
  notificationDispatch: notificationDispatch,
  windowRedirect: windowRedirect,
  windowReload: windowReload,
  contextLanguage: contextLanguage,
  contextEnvironment: contextEnvironment,
  contextLocale: contextLocale,
  contextCurrency: contextCurrency,
  getPageTitle: getPageTitle,
  uiComponentSectionRenderer: uiComponentSectionRenderer,
  locationUpdateHeight: locationUpdateHeight,
  __function__: __function__,
  __registerWindow__: __registerWindow__,
  _multiply: _multiply,
  _subtract: _subtract,
}

/**
 * @private
 * JUST FOR DEMO CASES HOW A TYPE WITH RESPONSE VALUE LOOKS LIKE
 * Get the actual page title
 */
export type getPageTitle = {
  responseType: string,
}

/**
 * @private
 * JUST FOR TEST CASES
 */
export type _multiply = {
  responseType: number,
  firstNumber: number,
  secondNumber: number,
}

export type _subtract = {
  responseType: number,
  firstNumber: number,
  secondNumber: number,
}

export type __function__ = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responseType: any,
  args: unknown[],
  id: string,
}

export type __registerWindow__ = {
  responseType: void,
}