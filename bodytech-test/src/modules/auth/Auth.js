
import { URL } from './token'




const Auth = () => {
    return <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{
            minHeight: "100vh",
            backgroundColor: "black",
        }}
    >
        <img src="http://www.tuconcierto.net/wp-content/uploads/2019/12/twitter_card-default.jpg" />
        <a className="btn btn-success btn-lg" href={URL}>
            Ingresar
        </a>
    </div>
}

export default Auth;