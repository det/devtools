import { TimelineState } from "./timeline";
import { AppState } from "./app";
import { CommentsState } from "./comments";
import { ContextMenusState } from "../reducers/contextMenus";
import { ReactDevToolsState } from "./reactDevTools";
import { InspectorState } from "devtools/client/inspector/state";
import { MarkupState } from "devtools/client/inspector/markup/state/markup";
import { ClassListState } from "devtools/client/inspector/rules/state/class-list";
import { RulesState } from "devtools/client/inspector/rules/state/rules";
import { ComputedState } from "devtools/client/inspector/computed/state";
import { MessageState } from "devtools/client/webconsole/reducers/messages";
import { NetworkState } from "ui/reducers/network";
import { LayoutState } from "./layout";

export interface UIState {
  app: AppState;
  classList: ClassListState;
  comments: CommentsState;
  computed: ComputedState;
  contextMenus: ContextMenusState;
  eventListenerBreakpoints: any;
  inspector: InspectorState;
  layout: LayoutState;
  markup: MarkupState;
  messages: MessageState;
  network: NetworkState;
  reactDevTools: ReactDevToolsState;
  rules: RulesState;
  timeline: TimelineState;
}
