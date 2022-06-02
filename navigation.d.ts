import { RootStackParamList } from "./app/navigation/types";

declare global {
    namespace ReactNavigation {
        interface RootParamsList extends RootStackParamList {}
    }
}