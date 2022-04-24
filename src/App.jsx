import { Routes, Route } from 'react-router-dom';

import { Referenzen } from './pages/Referenzen/Referenzen';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Referenzen />} />
				<Route path='/preise' element={<Referenzen />} />
				<Route path='/referenzen' element={<Referenzen />} />
				<Route path='/kontakt' element={<Referenzen />} />
			</Routes>
		</>
	);
};

export default App;
