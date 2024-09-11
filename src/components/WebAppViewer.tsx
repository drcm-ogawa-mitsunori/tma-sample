import { useState } from "react";
import WebApp from '@twa-dev/sdk'
export interface WebApp {
  requestContact: (callback?: (access: boolean) => unknown) => void;
}

export const WebAppViewer = () => {
  const [webAppStrList, setWebAppStrList] = useState<Record<string, string | number>>({});

  const webAppStrListKeys = Object.keys(webAppStrList);
  if (webAppStrListKeys.length <= 0) {
    const newWebAppStrList: Record<string, string | number> = {};
    newWebAppStrList.isExpanded = WebApp.isExpanded ? 'true' : 'false';
    newWebAppStrList.viewportHeight = WebApp.viewportHeight;
    newWebAppStrList.viewportStableHeight = WebApp.viewportStableHeight;
    newWebAppStrList.platform = WebApp.platform;
    newWebAppStrList.backgroundColor = WebApp.backgroundColor;
    newWebAppStrList.isClosingConfirmationEnabled = WebApp.isClosingConfirmationEnabled ? 'true' : 'false';
    newWebAppStrList.themeParams = Object.keys(WebApp.themeParams).map(key => `${key}=${(WebApp.themeParams as any)[key]}`).join(','),
    newWebAppStrList.initDataUnsafe = Object.keys(WebApp.initDataUnsafe).map(key => `${key}=${(WebApp.initDataUnsafe as any)[key]}`).join(','),
    newWebAppStrList.initData = WebApp.initData;
    newWebAppStrList.colorScheme = WebApp.colorScheme;
    setWebAppStrList(newWebAppStrList);
  }

  return (
    <p>
      WebApp:
      { webAppStrListKeys.map(key => <><br />{key} : {webAppStrList[key]}</>) }
    </p>
  )
}
