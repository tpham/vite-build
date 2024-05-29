import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

// ---- For now, we remove strict mode so that it makes it easier to upgrade from 17 to 18. We'll add it back later when eveything settles down.
// ---- See https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-strict-mode
// ReactDOM.createRoot(document.getElementById('root')!).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
// );
