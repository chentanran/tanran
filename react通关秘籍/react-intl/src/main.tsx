import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { IntlProvider } from 'react-intl'
import enUS from './en-US.json';
import zhCN from './zh-CN.json';

const messages: Record<string, any> = {
  'en-US': enUS,
  'zh-CN': zhCN
}
const locale = 'zh-CN';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="zh_CN">
    <App />
  </IntlProvider>
)
