import { combineReducers } from "redux";
// import {all} from "redux-saga/effects";

import * as auth from "../app/modules/_auth/_redux/authRedux";
import * as layout from "../app/layout/_redux/layoutRedux";
import * as demo from "../app/modules/_demo/_redux/demoRedux";
import * as title from "../app/modules/Title/titleRedux";
import * as employee from '../app/modules/Employee/employeeRedux'
import * as deductBankAccount from '../app/modules/DeductBankAccount/_redux/deductionBankAccountRedux';
import * as deductLayout from '../app/modules/DeductBankAccount/_redux/deductLayoutRedux';
import * as manageDeductLayout from '../app/modules/ManageDeductBankAccount/_redux/manageDeductLayoutRedux'
import * as manageDeduct from '../app/modules/ManageDeductBankAccount/_redux/manageDeductRedux'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  layout: layout.reducer,
  demo: demo.reducer,
  title: title.reducer,
  employee: employee.reducer,
  deductBankAccount: deductBankAccount.reducer,
  deductLayout: deductLayout.reducer,
  manageDeductLayout: manageDeductLayout.reducer,
  manageDeduct: manageDeduct.reducer,

});

export function* rootSaga() {
  // yield all([demo.saga()]);
}
