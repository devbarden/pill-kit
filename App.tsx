import { FC, memo } from "react";
import { NativeBaseProvider } from "native-base";

import { Home } from "./pages";

const App: FC = memo(() => (
  <NativeBaseProvider>
    <Home />
  </NativeBaseProvider>
));

export default App;
