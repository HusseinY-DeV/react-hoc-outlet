import { ButtonHIS } from "../../common";


export function HeaderBtn({ handleSave, handleClear }) {

    return <section className="header-btn">
        <ButtonHIS onClick={handleClear} title="clear" />
        <ButtonHIS onClick={handleSave} title="save" />
    </section>
}
