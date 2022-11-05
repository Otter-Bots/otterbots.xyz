import { JSX } from "solid-js";
import grid from "../../css/shared/grid.module.css";
import utils from "../../css/shared/utils.module.css"; 
export function Layout(props:{ children: JSX.Element }) {
  return (
    <div class={grid.parent}>
      <div class={grid.div1}>
          <div class={utils.imageAllign}>
              <img src="/src/assets/otterBots-Logo.svg" width={75} height={50}>Otter Bots</img>
              <h2>Otter Bots</h2>
          </div>
      </div>
      <div class={grid.div2}></div>
      <div class={grid.div3}>
        <p>Navigation!</p>
      </div>
      <div class={grid.div4}></div>
      <div class={grid.div5}>
        {props.children}
      </div>
      <div class={grid.div6}></div>
      <div class={grid.div7}>
        <p>&copy; Otter Bots</p>
      </div>
    </div>
  )
}