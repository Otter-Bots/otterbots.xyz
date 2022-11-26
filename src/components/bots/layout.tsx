import { DiscordPerms } from "../../types/discordPerms";
import botsGrid from "../../css/bots/grid.module.css";
import botsInfotabs from "../../css/bots/botsInfotabs.module.css";
import utils from "../../css/shared/utils.module.css";
import { createSignal, For, Match, Switch, Show } from "solid-js";
const BotsLayout = (props: IBotsLayoutProps) => {
    const [activeTab, setActiveTab] = createSignal(1);
    return (
        <Show when={props.implemented === true} fallback={<h1>THIS BOT IS NOT IMPLEMENTED YET!</h1>}>
        <div class={botsGrid.parent}>
            <div class={botsGrid.div1}>
                <a href={props.inviteUrl}>
                    <img src={`https://assets.otterbots.xyz/bot-logos/${props.name}.png`} alt={props.name} />
                </a>
            </div>
            <div class={botsGrid.div2}>
                <button onClick={() => setActiveTab(1)} class={botsInfotabs.button}>Commands</button>
            </div>
            <div class={botsGrid.div3}>
                <button onClick={() => setActiveTab(2)} class={botsInfotabs.button}>Permissions</button>
            </div>
            <div class={botsGrid.div4}>
                <button onClick={() => setActiveTab(3)} class={botsInfotabs.button}>Arguments</button>
            </div>
            <div class={botsGrid.div5}>
                <Switch fallback={<Commands commands={props.commands}/>}>
                    <Match when={activeTab() === 1}><Commands commands={props.commands}/></Match>
                    <Match when={activeTab() === 2}><Permissions permissions={props.permissions}/></Match>
                    <Match when={activeTab() === 3}><Arguments commands={props.commands}/></Match>
                </Switch>
            </div>
        </div>
    </Show>
    )
}
const Commands = (props: IBotsLayoutProps) => {
    return (
        <>
        <div>
            <h3>Commands</h3>
        </div>
        <table class={utils.tableCentre}>
                <thead>
                    <tr>
                        <th>Command</th>
                        <th>Slashy?</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={props.commands}>
                        {(command, i) => <tr>
                            <td>{command.name}</td>
                            <td>{command.slashy ? "Yes" : "No"}</td>
                        </tr>}
                    </For>
                </tbody>
            </table></>
    )}
const Permissions = (props: IBotsLayoutProps) => {
    return (
        <>
        <div>
            <h3>Permissions</h3>
        </div>
        <table class={utils.tableCentre}>
            <thead>
                <tr>
                    <th>Permission</th>
                    <th>Description</th>
                    <th>Required?</th>
                </tr>
            </thead>
            <tbody>
                <For each={props.permissions}>
                    {(permission, i) =>
                        <tr>
                            <td>{permission.name}</td>
                            <td>{permission.description}</td>
                            <td>{permission.required ? "Yes" : "No"}</td>
                        </tr>
                    }
                </For>
            </tbody>
        </table>
        </>
    )};
const Arguments = (props: IBotsLayoutProps) => {
    return (
        <>
        <div>
            <h3>Arguments</h3>
        </div>
        <table class={utils.tableCentre}>
            <thead>
                <tr>
                    <th>Command Name</th>
                    <th>Argument Name</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Required?</th>
                </tr>
            </thead>
            <tbody>
                <For each={props.commands}>
                    {(command, i) =>
                        <For each={command.arguments}>
                            {(argument, i) =>
                                <tr>
                                    <td>{command.name}</td>
                                    <td>{argument.name}</td>
                                    <td>{argument.type}</td>
                                    <td>{argument.description}</td>
                                    <td>{argument.required ? "Yes" : "No"}</td>
                                </tr>
                            }
                        </For>
                    }
                </For>
            </tbody>
        </table>
        </>
    )};

interface IBotsLayoutProps {
    name?: string;
    commands?: ICommandsProps[];
    permissions?: IPermissionsProps[];
    inviteUrl?: string;
    implemented?: boolean;
}
interface ICommandsProps {
    name: string;
    slashy: boolean;
    arguments?: ICommandsArgumentsProps[];
}
interface ICommandsArgumentsProps {
    name: string;
    type: string;
    description: string;
    required: boolean;
}
interface IPermissionsProps {
    name: DiscordPerms;
    description: string;
    required: boolean;
}
export default BotsLayout;