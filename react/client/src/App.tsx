import React from 'react';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";

function App() {
  return (
      <Layout style={{height: 'calc(100vh - 0)'}}>
          <Layout.Content>
              <AppRouter />
          </Layout.Content>
      </Layout>
  );
}

export default App;
