import { typeRootStackParamList } from "./app/navigation/Types";

declare global {
    namespace ReactNavigation {
        interface RootParamsList extends TypeRootStackParamList{}
    }
}