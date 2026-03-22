import { siteSettings } from "./siteSettings";
import { homePage } from "./homePage";

export const schemaTypes = [siteSettings, homePage];

export const singletonTypes = new Set(["siteSettings", "homePage"]);
export const singletonActions = new Set(["publish", "discardChanges", "restore"]);
