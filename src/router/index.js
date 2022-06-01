import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import SacrificePage from "../pages/SacrificePage/SacrificePage";
import MultipliersPage from "../pages/MultipliersPage/MultipliersPage";
import StatisticsPage from "../pages/StatisticsPage/StatisticsPage";

const RouteManager = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<MainPage />} />
                    <Route path="sacrifice" element={<SacrificePage/>}>
                        <Route path=":dataAddress" element={<SacrificePage />} />
                    </Route>
                    <Route path="statistics" element={<StatisticsPage/>}>
                        <Route path=":dataAddress" element={<StatisticsPage/>}/>
                    </Route>
                    <Route path="multipliers" element={<MultipliersPage/>}>
                        <Route path=":dataAddress" element={<MultipliersPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteManager;