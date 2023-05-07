import { CommentsPage } from './pages/CommentPage';
import {Loader} from './components/Loader'

function App() {
  if (document.readyState == 'loading') return <Loader/>
  return <CommentsPage />
}

export default App;
