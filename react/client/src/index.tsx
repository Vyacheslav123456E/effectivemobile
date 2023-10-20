import React from 'react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import ru_RU from 'antd/es/locale/ru_RU';
import {ConfigProvider} from "antd";
import './assets/styles/index.css';
import {store} from "./redux";
import {Provider} from "react-redux";

const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ConfigProvider locale={ru_RU}>
                <App />
            </ConfigProvider>
        </BrowserRouter>
    </Provider>
);