// @flow
import type { alertsStateType, TemperatureAlert } from '../reducers/alerts';

export const ADD_TEMPERATURE_ALERT = 'ADD_TEMPERATURE_ALERT';
export const REMOVE_TEMPERATURE_ALERT = 'REMOVE_TEMPERATURE_ALERT';
export const TRIGGER_ALERT = 'TRIGGER_ALERT';

export function addTemperatureAlert(alert) {
  return {
    type: ADD_TEMPERATURE_ALERT,
    payload: alert
  };
}

export function removeTemperatureAlert(index: number) {
  return {
    type: REMOVE_TEMPERATURE_ALERT,
    payload: index
  };
}

export function triggerAlert(index: number) {
  return {
    type: TRIGGER_ALERT,
    payload: index
  };
}

