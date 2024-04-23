import {webAppContext} from "@/telegram-web-app/context";
import {useContext} from "react";

export const useTgWebApp = () => useContext(webAppContext);
