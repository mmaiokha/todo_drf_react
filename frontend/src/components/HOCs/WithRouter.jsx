import {useParams} from "react-router";

export function WithRouter (Component) {
    function WithRouterParams(props) {
        const params = useParams()
        return <Component {...props} router={{params}}/>
    }
    return WithRouterParams
}