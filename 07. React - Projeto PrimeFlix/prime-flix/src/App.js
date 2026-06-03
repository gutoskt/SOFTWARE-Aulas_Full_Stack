import RoutesApp from './routes';
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// 2. Segundo: Importe o SEU arquivo de CSS (ele vai sobrescrever o de cima)
import './index.css';

function App() {
  return (
    <div className="app">
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </div>
  );
}

export default App;
