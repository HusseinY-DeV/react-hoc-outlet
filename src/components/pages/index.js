import { Login } from "./Login/Login";
import { Home } from "./Home/Home";
import { Form } from "./Form/Form";
import { Contact } from "./Contact/Contact";
import { Test } from "./Test/Test";
import { withHeaderBtn } from "../containers/withHeaderBtn";

const FormWithHeaderBtn = withHeaderBtn(Form);
const ContactWithHeaderBtn = withHeaderBtn(Contact);


export {
    Login,
    Home,
    Form,
    Contact,
    ContactWithHeaderBtn,
    FormWithHeaderBtn,
    Test
}