import ExecuteJoystickWebsocket from "@/components/executors/ExecuteJoystickWebsocket";
import FormJoystickWebsocket from "@/components/forms/FormJoystickWebsocket";
const ExecutorMap = {
  formJoystickWebsocket: ExecuteJoystickWebsocket
}
const ComponentMap = {
  formJoystickWebsocket: FormJoystickWebsocket,

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