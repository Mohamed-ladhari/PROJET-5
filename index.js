import reactdom from"react-dom/client"
import { browserrouter,routes,route } from "react-router-dom";
import Nav from"./components/Nav";
import accueil from "./pages/accueil";
import formation from"./pages/formation";
import contact from"./pages/contact";
import login from"./pages/login";
import inscription from"./pages/lnscription";
import nopage from"./pages/nopage";

export default function Mohamed amine() {
    return (
        <browserrouter>
        <routes>
            <Route path="/" element={<Nav />}>
            <Route index element={<accueil />}>
            <Route path="Formation" element={<formation />} />
            <ROUTE path="contact" element={<contact />} />
            <Route path="*" element={<nopage />} />
            </Route>
        </routes>
        </browserrouter>
    )
}