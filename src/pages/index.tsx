import { type Component, createSignal, Show, createEffect } from 'solid-js';
import { Layout } from '../components/shared/Layout';
import homeGrid from "./../css/home/grid.module.css";
//import utils from "./../css/shared/utils.module.css";
import fourBoxGrid from "./../css/shared/4boxGrid.module.css";
const Index: Component = () => {
  const [randNum, setRandNum] = createSignal(1);
  setRandNum(Math.floor(Math.random() * 2) + 1);
  createEffect(() => {
    console.log("Random Number!:", randNum());
  });
  return (
    <Layout>
      <div class={homeGrid.parent}>
        <div class={homeGrid.div1}>
          <Show when={randNum() === 1}>
            <h1>Bots for everyday use</h1>
            <br />
            <p>
              From starring your messages, to checking stock markets,
              <br />
              or even your own custom-made hosted by us, we’ve got it.
            </p>
          </Show>
          <Show when={randNum() === 2}>
            <h1>Built on blocks, and otters</h1>
            <br />
            <p>
              We’re a small team whose making Discord easier,              
              <br />
              more accessible, and more fun.
            </p>
          </Show>
        </div>
        <div class={homeGrid.div2}>Hi</div>
        <div class={homeGrid.div3}>Hi</div>
        <div class={homeGrid.div4}>Hi</div>
        <div class={homeGrid.div5}>Hi</div>
        <div class={homeGrid.div6}>Hi</div>
        <div class={homeGrid.div7}>Hi</div>
        <section class={homeGrid.div8}>
          <h3>Our Bots!</h3>
          <div class={fourBoxGrid.parent}>
            <div class={fourBoxGrid.div1}>
              <a href='/bots/starboard'>
                <img src='https://assets.otterbots.xyz/bot-logos/starboard.png' alt='Starbot' width="150px" height="150px"/>
              </a>
            </div>
            <div class={fourBoxGrid.div2}>
              <a href='/bots/support'>
                <img src='https://assets.otterbots.xyz/bot-logos/support.png' alt='Support' width="150px" height="150px"/>
              </a>
            </div>
            <div class={fourBoxGrid.div3}>
              <a href='/bots/roles'>
                <img src='https://assets.otterbots.xyz/bot-logos/roles.png' alt='Roles' width="150px" height="150px"/>
              </a>
            </div>
            <div class={fourBoxGrid.div4}>
              <a href='/bots/stocks'>
                <img src='https://assets.otterbots.xyz/bot-logos/stocks.png' alt='Stock' width="150px" height="150px"/>
              </a>
            </div>
            <div class={fourBoxGrid.div5}>
              <a href='/bots/ikeastock'>
                <img src='https://assets.otterbots.xyz/bot-logos/ikeastock.png' alt='IkeaStock' width="150px" height="150px"/>
              </a>
            </div>
          </div>
        </section>
        <div class={homeGrid.div9}>Hi</div>
      </div>
    </Layout>
  );
};

export default Index;
