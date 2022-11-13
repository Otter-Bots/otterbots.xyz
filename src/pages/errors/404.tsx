import Dismiss from "solid-dismiss";
import { createSignal } from "solid-js";
import errorGrid from "../../css/errors/grid.module.css";
import "../../css/errors/specialFormatting.module.css";
import popup from "../../css/shared/popups.module.css"
export default function Error404() {
    const [yesOpen, SETyesOpen] = createSignal(false);
    const [noOpen, SETnoOpen] = createSignal(false);
    let btnE1;
    let btnE2;
    return (
        <div class={errorGrid.parent}>
            <div class={errorGrid.div1}>
                <h1>You hit a wrong turn!</h1>
                <p>
                    Sorry, but the page you were trying to view does not exist.
                    <br />
                    Are you lost?
                    <br />
                    <br />
                    <button ref={btnE1}>Yes</button>
                    <button ref={btnE2}>No</button>
                    <Dismiss menuButton={btnE1} open={yesOpen} setOpen={SETyesOpen}>
                        <div class={popup.popup}>
                            <p>
                                Ok! I'll help you find your way back.
                                <br />
                                <a href="/">Click here</a> to go back to the home page.
                            </p>
                        </div>
                    </Dismiss>
                    <Dismiss menuButton={btnE2} open={noOpen} setOpen={SETnoOpen}>
                        <div class={popup.popup}>
                            <p>
                                Weird..
                                <br />
                                Imagine intentionally going to a page that doesn't exist.
                            </p>
                        </div>
                    </Dismiss>
                </p>
            </div>
        </div>
    )
}