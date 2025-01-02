import PropTypes from "prop-types"
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {
                children
            }
            <Footer />
        </div>
    )
}
Layout.propTypes={
    children : PropTypes.node.isRequired
}