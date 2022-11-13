import { JSX } from "solid-js";
import grid from "../../css/shared/grid.module.css";
import utils from "../../css/shared/utils.module.css";
import navGrid from "../../css/shared/navigationGrid.module.css";
export function Layout(props:{ children: JSX.Element }) {
  return (
    <div class={grid.parent}>
      <div class={grid.div1}>
          <div class={utils.imageAllign}>
              <img src="https://assets.otterbots.xyz/website/otterBots-Logo-Black.png" width={50} height={50}>Otter Bots</img>
              <h2>Otter Bots</h2>
          </div>
      </div>
      <div class={grid.div2}></div>
      <div class={grid.div3}>
        <div class={navGrid.parent}>
          <div class={navGrid.div1}>
            <a href="/">Home</a>
          </div>
          <div class={navGrid.div2}>
            <a href="/bots">Bots</a>
          </div>
          <div class={navGrid.div3}>
            <a href="/about">About</a>
          </div>
          <div class={navGrid.div4}>
            <a href="/order">Order</a>
          </div>
          <div class={navGrid.div5}>
            <a href="/team">Team</a>
          </div>
        </div>
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