import ExecuteJoystickWebsocket from "@/components/executors/ExecuteJoystickWebsocket";
import ExecuteSwitchWebsocket from "@/components/executors/ExecuteSwitchWebsocket";
import FormJoystickWebsocket from "@/components/forms/FormJoystickWebsocket";
import FormSwitchWebsocket from "@/components/forms/FormSwitchWebsocket";
import FormLeverWebsocket from "@/components/forms/FormLeverWebsocket";
import ExecuteLeverWebsocket from "@/components/executors/ExecuteLeverWebsocket";
const ExecutorMap = {
  formJoystickWebsocket: ExecuteJoystickWebsocket,
  formSwitchWebsocket: ExecuteSwitchWebsocket,
  formLeverWebsocket: ExecuteLeverWebsocket
}
const ComponentMap = {
  formJoystickWebsocket: FormJoystickWebsocket,
  formSwitchWebsocket: FormSwitchWebsocket,
  formLeverWebsocket: FormLeverWebsocket

};
type ExecutorKey = keyof typeof ExecutorMap;
type ComponentKey = keyof typeof ComponentMap;
const selectExecutor = (key: string) =>{
  const executor  = ExecutorMap[key as keyof typeof ExecutorMap];
  return executor || null;
}
const selectComponent = (key: string) => {
  const component = ComponentMap[key as keyof typeof ComponentMap];
  return component || null;
};
export {
  selectExecutor,
  selectComponent,
  ComponentMap
}