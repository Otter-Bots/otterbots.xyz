import errorGrid from "../../css/errors/grid.module.css";
export default function Error404() {
    return (
        <div class={errorGrid.parent}>
            <div class={errorGrid.div1}>
                <h1>You hit a wrong turn!</h1>
                <p>
                    Sorry, but the page you were trying to view does not exist.
                    <br />
                    You can however go back to the home page.
                </p>
            </div>
        </div>
    )
}